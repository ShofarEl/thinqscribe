/**
 * Tracking Pixel Configuration
 * Centralized configuration for Meta Pixel, Google Analytics, and other tracking solutions
 */

// Meta/Facebook Pixel ID
export const FACEBOOK_PIXEL_ID = process.env.VITE_FACEBOOK_PIXEL_ID || '';

// Google Analytics ID
export const GOOGLE_ANALYTICS_ID = process.env.VITE_GOOGLE_ANALYTICS_ID || '';

// TikTok Pixel ID
export const TIKTOK_PIXEL_ID = process.env.VITE_TIKTOK_PIXEL_ID || '';

// LinkedIn Tag ID
export const LINKEDIN_TAG_ID = process.env.VITE_LINKEDIN_TAG_ID || '';

/**
 * Initialize Facebook/Meta Pixel
 */
export const initFacebookPixel = () => {
  if (!FACEBOOK_PIXEL_ID) {
    console.warn('Facebook Pixel ID not configured');
    return;
  }

  // Load Facebook SDK
  window.fbq = window.fbq || function() {
    (window.fbq.q = window.fbq.q || []).push(arguments);
  };

  window.fbq('init', FACEBOOK_PIXEL_ID);
  window.fbq('track', 'PageView');

  // Load Facebook SDK script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  // Noscript fallback
  const noscript = document.createElement('noscript');
  noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1" />`;
  document.body.appendChild(noscript);
};

/**
 * Initialize Google Analytics
 */
export const initGoogleAnalytics = () => {
  if (!GOOGLE_ANALYTICS_ID) {
    console.warn('Google Analytics ID not configured');
    return;
  }

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
  document.head.appendChild(script);

  // Configure Google Analytics
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GOOGLE_ANALYTICS_ID, {
    page_path: window.location.pathname,
  });
};

/**
 * Initialize TikTok Pixel
 */
export const initTikTokPixel = () => {
  if (!TIKTOK_PIXEL_ID) {
    console.warn('TikTok Pixel ID not configured');
    return;
  }

  // Load TikTok SDK
  window.ttq = window.ttq || [];
  window.ttq.push(['pageInstance', new window.ttq.pageInstance()]);
  window.ttq.track('pageview');

  // Load TikTok script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://analytics.tiktok.com/i/jsc/pixel/api.js?sdkid=${TIKTOK_PIXEL_ID}`;
  document.head.appendChild(script);
};

/**
 * Initialize LinkedIn Tag
 */
export const initLinkedInTag = () => {
  if (!LINKEDIN_TAG_ID) {
    console.warn('LinkedIn Tag ID not configured');
    return;
  }

  // Load LinkedIn Insight Tag
  const script = document.createElement('script');
  script.async = true;
  script.type = 'text/javascript';
  script.innerHTML = `
    _linkedin_partner_id = "${LINKEDIN_TAG_ID}";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
  `;
  document.head.appendChild(script);

  // Load LinkedIn script
  const linkedinScript = document.createElement('script');
  linkedinScript.async = true;
  linkedinScript.type = 'text/javascript';
  linkedinScript.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
  document.head.appendChild(linkedinScript);

  // Noscript fallback
  const noscript = document.createElement('noscript');
  noscript.innerHTML = `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_TAG_ID}&conversionId=0&noscript=1" />`;
  document.body.appendChild(noscript);
};

/**
 * Track custom events
 */
export const trackEvent = (eventName, eventData = {}) => {
  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', eventName, eventData);
  }

  // Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }

  // TikTok Pixel
  if (window.ttq) {
    window.ttq.track(eventName, eventData);
  }

  console.log(`Event tracked: ${eventName}`, eventData);
};

/**
 * Track specific user actions
 */
export const trackUserActions = {
  // Authentication events
  signupStart: () => trackEvent('SignupStart'),
  signupComplete: (userData) => trackEvent('Subscribe', {
    currency: 'NGN',
    value: 0,
    ...userData
  }),
  loginSuccess: () => trackEvent('Login'),
  logout: () => trackEvent('Logout'),

  // Writer/Scribe interactions
  writerViewed: (writerId, field) => trackEvent('ViewContent', {
    content_type: 'writer',
    content_ids: [writerId],
    content_name: field,
  }),
  writerContactClick: (writerId, field) => trackEvent('Contact', {
    writer_id: writerId,
    field: field,
  }),

  // Page views
  landingPageView: () => trackEvent('PageView', {
    page_title: 'Landing Page'
  }),
  writersPageView: () => trackEvent('PageView', {
    page_title: 'Writers Page'
  }),
  scribesPageView: () => trackEvent('PageView', {
    page_title: 'Scribes Page'
  }),

  // Lead generation
  leadGenerated: (email, source) => trackEvent('Lead', {
    currency: 'NGN',
    value: 0,
    email: email,
    source: source,
  }),

  // Search events
  search: (searchQuery) => trackEvent('Search', {
    search_string: searchQuery,
  }),

  // Video engagement
  videoStart: (videoName) => trackEvent('ViewContent', {
    content_type: 'video',
    content_name: videoName,
  }),

  // Add to wishlist/bookmark
  addToWishlist: (writerId) => trackEvent('AddToWishlist', {
    content_ids: [writerId],
  }),

  // Custom conversion for service inquiry
  serviceInquiry: (serviceType, field) => trackEvent('Contact', {
    service_type: serviceType,
    field: field,
    value: 0,
    currency: 'NGN',
  }),
};

/**
 * Initialize all tracking pixels
 */
export const initializeAllPixels = () => {
  try {
    initFacebookPixel();
    initGoogleAnalytics();
    initTikTokPixel();
    initLinkedInTag();
    console.log('All tracking pixels initialized');
  } catch (error) {
    console.error('Error initializing tracking pixels:', error);
  }
};

export default {
  FACEBOOK_PIXEL_ID,
  GOOGLE_ANALYTICS_ID,
  TIKTOK_PIXEL_ID,
  LINKEDIN_TAG_ID,
  initFacebookPixel,
  initGoogleAnalytics,
  initTikTokPixel,
  initLinkedInTag,
  trackEvent,
  trackUserActions,
  initializeAllPixels,
};

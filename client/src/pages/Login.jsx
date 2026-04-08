import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, BookOpen, Home } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);
    if (result.success) navigate('/writers');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#e8eaf0',
        padding: '16px',
        fontFamily: "'Instrument Sans', 'DM Sans', sans-serif",
      }}
    >
      {/* Back to Home Button */}
      <Link
        to="/"
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 16px',
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          textDecoration: 'none',
          color: '#015382',
          fontSize: '13px',
          fontWeight: '600',
          boxShadow: '0 4px 20px rgba(1,83,130,0.15)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#015382';
          e.target.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.95)';
          e.target.style.color = '#015382';
        }}
      >
        <Home size={16} />
        <span style={{ display: window.innerWidth > 640 ? 'inline' : 'none' }}>Back to Home</span>
      </Link>
      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
          width: '100%',
          maxWidth: '900px',
          minHeight: window.innerWidth <= 768 ? 'auto' : '560px',
          background: '#f5f6f0',
          borderRadius: window.innerWidth <= 768 ? '20px' : '28px',
          overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(1,83,130,0.13)',
          position: 'relative',
        }}
      >
        {/* LEFT — Form Panel */}
        <div
          style={{
            flex: window.innerWidth <= 768 ? '1' : '0 0 45%',
            padding: window.innerWidth <= 640 ? '40px 20px' : window.innerWidth <= 768 ? '48px 32px' : '48px 44px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: 'linear-gradient(160deg, #f0f4f8 0%, #e8f0f7 100%)',
            position: 'relative',
            zIndex: 1,
            minHeight: window.innerWidth <= 768 ? 'auto' : 'auto',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
            <img 
              src="/logo1.png" 
              alt="Thinqscribe Logo" 
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px'
              }}
            />
            <span style={{ fontFamily: "'Berkshire Swash', cursive", fontSize: '19px', color: '#015382', letterSpacing: '0px' }}>
              Thinqscribe
            </span>
          </div>

          {/* Heading */}
          <div style={{ marginBottom: '32px' }}>
            <h1
              style={{
                fontSize: window.innerWidth <= 768 ? '26px' : '30px',
                fontFamily: "'Berkshire Swash', cursive",
                color: '#0a1628',
                marginBottom: '6px',
                letterSpacing: '0px',
                lineHeight: 1.25,
              }}
            >
              Welcome back
            </h1>
            <p style={{ fontSize: '13.5px', color: '#6b7a90' }}>Sign in to your account to continue</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#6b7a90', marginBottom: '7px', letterSpacing: '0.2px' }}>
                Email
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={15} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#9daab8' }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{
                    width: '100%',
                    padding: '11px 14px 11px 38px',
                    background: 'white',
                    border: '1.5px solid #dde3ec',
                    borderRadius: '12px',
                    fontSize: '13.5px',
                    color: '#0a1628',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#015382')}
                  onBlur={(e) => (e.target.style.borderColor = '#dde3ec')}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#6b7a90', marginBottom: '7px', letterSpacing: '0.2px' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={15} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#9daab8' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  style={{
                    width: '100%',
                    padding: '11px 40px 11px 38px',
                    background: 'white',
                    border: '1.5px solid #dde3ec',
                    borderRadius: '12px',
                    fontSize: '13.5px',
                    color: '#0a1628',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#015382')}
                  onBlur={(e) => (e.target.style.borderColor = '#dde3ec')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9daab8', padding: 0 }}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              <div style={{ textAlign: 'right', marginTop: '6px' }}>
                <Link to="/forgot-password" style={{ fontSize: '12px', color: '#015382', textDecoration: 'none', fontWeight: '500' }}>
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '13px',
                background: loading ? '#5a9fc0' : '#015382',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '0.1px',
                transition: 'background 0.2s, transform 0.1s',
              }}
              onMouseEnter={(e) => { if (!loading) e.target.style.background = '#013f62'; }}
              onMouseLeave={(e) => { if (!loading) e.target.style.background = '#015382'; }}
            >
              {loading ? (
                <div style={{ width: '18px', height: '18px', border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Footer links */}
          <div style={{ 
            marginTop: '28px', 
            display: 'flex', 
            flexDirection: window.innerWidth <= 640 ? 'column' : 'row',
            justifyContent: 'space-between', 
            alignItems: window.innerWidth <= 640 ? 'flex-start' : 'center',
            gap: window.innerWidth <= 640 ? '12px' : '0'
          }}>
            <p style={{ fontSize: '12.5px', color: '#6b7a90', margin: 0 }}>
              No account?{' '}
              <Link to="/signup" style={{ color: '#015382', fontWeight: '600', textDecoration: 'none' }}>
                Sign up
              </Link>
            </p>
            <Link to="/" style={{ fontSize: '12px', color: '#9daab8', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* RIGHT — Image Panel */}
        <div
          style={{
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: window.innerWidth <= 768 ? '0' : '0 28px 28px 0',
            minHeight: window.innerWidth <= 768 ? '200px' : 'auto',
            display: window.innerWidth <= 480 ? 'none' : 'block',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(135deg, rgba(1,83,130,0.72) 0%, rgba(1,40,80,0.55) 100%), url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Floating card — top */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{
              position: 'absolute',
              top: window.innerWidth <= 768 ? '16px' : '24px',
              left: window.innerWidth <= 768 ? '16px' : '24px',
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(10px)',
              borderRadius: '14px',
              padding: window.innerWidth <= 768 ? '10px 14px' : '12px 16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              minWidth: window.innerWidth <= 768 ? '160px' : '180px',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#015382', flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: '12px', fontWeight: '700', color: '#0a1628', margin: 0 }}>100+ Expert Writers</p>
              <p style={{ fontSize: '11px', color: '#6b7a90', margin: 0 }}>Available now</p>
            </div>
          </motion.div>

          {/* Floating card — bottom */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{
              position: 'absolute',
              bottom: window.innerWidth <= 768 ? '16px' : '28px',
              left: window.innerWidth <= 768 ? '16px' : '24px',
              right: window.innerWidth <= 768 ? '16px' : '24px',
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(10px)',
              borderRadius: '14px',
              padding: window.innerWidth <= 768 ? '12px 16px' : '14px 18px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '12.5px', fontWeight: '700', color: '#0a1628', margin: '0 0 2px' }}>Plagiarism-Free Guarantee</p>
                <p style={{ fontSize: '11.5px', color: '#6b7a90', margin: 0 }}>Secure & confidential · 24/7 support</p>
              </div>
              <div style={{ display: 'flex' }}>
                {['#015382', '#e8a020', '#34a853'].map((c, i) => (
                  <div key={i} style={{ width: '26px', height: '26px', borderRadius: '50%', background: c, border: '2px solid white', marginLeft: i > 0 ? '-8px' : '0' }} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
};

export default Login;
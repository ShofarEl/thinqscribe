import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, GraduationCap, Search, CheckCircle, Edit, Quote, Lightbulb, Star, Play } from 'lucide-react';
import Navigation from '../components/Navigation';

const LandingPage = () => {
  const services = [
    { icon: <Edit className="w-10 h-10" />, name: 'Essay Writing', count: '850+ Services', color: 'text-pink-500' },
    { icon: <GraduationCap className="w-10 h-10" />, name: 'Thesis Support', count: '470+ Services', color: 'text-purple-500' },
    { icon: <FileText className="w-10 h-10" />, name: 'Research Papers', count: '620+ Services', color: 'text-red-500' },
    { icon: <BookOpen className="w-10 h-10" />, name: 'Dissertation Help', count: '580+ Services', color: 'text-teal-500' },
    { icon: <Search className="w-10 h-10" />, name: 'Literature Review', count: '380+ Services', color: 'text-green-500' },
    { icon: <CheckCircle className="w-10 h-10" />, name: 'Editing & Proofreading', count: '720+ Services', color: 'text-purple-500' },
    { icon: <Quote className="w-10 h-10" />, name: 'Citation & Formatting', count: '450+ Services', color: 'text-blue-500' },
    { icon: <Lightbulb className="w-10 h-10" />, name: 'Proposal Writing', count: '390+ Services', color: 'text-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#1e3a8a] overflow-hidden">
        {/* Curved Grid Pattern Background */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Decorative Shapes */}
        <div className="absolute top-20 right-32 w-12 h-12 bg-orange-400 rounded-lg opacity-80 animate-float" style={{ transform: 'rotate(45deg)' }}></div>
        <div className="absolute top-32 left-20 w-8 h-8 bg-yellow-400 rounded-full opacity-70" style={{ animation: 'float 4s ease-in-out infinite' }}></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-teal-400 rounded-full opacity-60 animate-bounce-gentle"></div>
        <div className="absolute top-1/2 left-10 w-6 h-6 bg-pink-400 rounded-full opacity-70"></div>
        <div className="absolute bottom-32 left-32 w-10 h-10 border-4 border-purple-400 rounded-full opacity-60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 pb-20 md:pb-32">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center min-h-[calc(100vh-200px)]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-coral px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium mb-4 md:mb-6"
              >
                Academic Excellence
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 md:mb-6 leading-tight px-2 lg:px-0"
              >
                Connect with Expert Academic Writers
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 md:mb-10 leading-relaxed px-2 lg:px-0"
              >
                Professional writing support for undergraduate, graduate, and postgraduate students.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center lg:justify-start px-4 lg:px-0"
              >
                <Link to="/signup" className="w-full sm:w-auto bg-accent hover:bg-[#3a7bc8] text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-200 shadow-lg inline-flex items-center justify-center text-sm md:text-base">
                  Explore Services
                </Link>
                <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 text-sm md:text-base">
                  <div className="w-8 md:w-10 h-8 md:h-10 bg-white rounded-full flex items-center justify-center">
                    <Play className="w-3 md:w-4 h-3 md:h-4 text-primary ml-0.5" fill="currentColor" />
                  </div>
                  <span className="hidden sm:inline">Watch Video</span>
                  <span className="sm:hidden">Video</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex items-center justify-center order-last"
            >
              <img
                src="/image.png"
                alt="Academic Student with Books"
                className="w-full md:w-[120%] h-auto max-w-none relative z-10"
              />
            </motion.div>
          </div>
        </div>

        {/* Social Proof Card - Hidden on mobile to prevent cutoff */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-6xl px-4 z-20"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-display text-gray-900 mb-2">The Scribe</h3>
                <p className="text-gray-500 text-sm">Join over 5,000+ students around the world</p>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 md:w-5 h-4 md:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-4 md:w-5 h-4 md:h-5 fill-yellow-400 text-yellow-400 opacity-50" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">4.5 Star Rating</p>
                  <p className="text-xs text-gray-500">(2k+ Reviews)</p>
                </div>
              </div>
            </div>
            
            {/* Partner Logos */}
            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center md:justify-between opacity-40 grayscale flex-wrap gap-4 md:gap-0">
                <div className="text-gray-400 font-bold text-xs md:text-sm">HARVARD</div>
                <div className="text-gray-400 font-bold text-xs md:text-sm">STANFORD</div>
                <div className="text-gray-400 font-bold text-xs md:text-sm">MIT</div>
                <div className="text-gray-400 font-bold text-xs md:text-sm">OXFORD</div>
                <div className="text-gray-400 font-bold text-xs md:text-sm">CAMBRIDGE</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Social Proof - Only visible on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:hidden bg-gray-50 rounded-2xl p-6 mb-12 text-center"
          >
            <h3 className="text-lg font-display text-gray-900 mb-2">The Scribe</h3>
            <p className="text-gray-500 text-sm mb-4">Join over 5,000+ students around the world</p>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50" />
            </div>
            <p className="text-sm font-semibold text-gray-900 mb-1">4.5 Star Rating</p>
            <p className="text-xs text-gray-500 mb-4">(2k+ Reviews)</p>
            <div className="flex items-center justify-center opacity-40 grayscale flex-wrap gap-3">
              <div className="text-gray-400 font-bold text-xs">HARVARD</div>
              <div className="text-gray-400 font-bold text-xs">STANFORD</div>
              <div className="text-gray-400 font-bold text-xs">MIT</div>
              <div className="text-gray-400 font-bold text-xs">OXFORD</div>
              <div className="text-gray-400 font-bold text-xs">CAMBRIDGE</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-gray-900 mb-4 px-4">
              Popular Topics, Which are Most Favourite To Students
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group cursor-pointer p-4 sm:p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <div className="mb-4 sm:mb-6 md:mb-8 inline-flex items-center justify-center">
                  <div className={`${service.color} transition-transform group-hover:scale-110 duration-300`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3 leading-tight">{service.name}</h3>
                <p className="text-gray-500 text-xs sm:text-sm">{service.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-last lg:order-first"
            >
              <div className="absolute -top-4 md:-top-6 -left-4 md:-left-6 w-24 md:w-32 h-24 md:h-32 bg-orange-400 rounded-full opacity-20 -z-10"></div>
              <div className="w-full h-[300px] md:h-[450px] relative">
                <img
                  src="/image2.jpg"
                  alt="Student Success"
                  className="w-full h-full object-cover rounded-2xl shadow-xl relative z-10"
                />
              </div>
              <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-32 md:w-40 h-32 md:h-40 bg-teal-400 rounded-full opacity-20 -z-10"></div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-gray-900 mb-6 md:mb-8 leading-tight px-2 lg:px-0">
                Benefit From Our Online Learning Expertise Earn professional
              </h2>
              <p className="text-gray-600 mb-8 md:mb-10 leading-relaxed text-base md:text-lg px-2 lg:px-0">
                At The Scribe, we believe every student deserves access to expert academic writing support. 
                Our mission is to connect students with verified, qualified writers who can help them achieve their academic goals.
              </p>
              
              <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 text-left">
                {[
                  'Upskill your organization with expert writers',
                  'Access to 100+ verified academic professionals',
                  'Personalized support for any academic level',
                  '24/7 customer support and unlimited revisions'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 md:gap-4 px-2 lg:px-0">
                    <CheckCircle className="w-5 md:w-6 h-5 md:h-6 text-accent flex-shrink-0 mt-0.5 md:mt-1" />
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center lg:justify-start">
                <Link to="/signup" className="btn-primary inline-flex items-center text-sm md:text-base px-6 md:px-8 py-3 md:py-4">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-3 md:mb-4 px-2">
              Ready to Excel in Your Academic Journey?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-10 px-2">
              Join thousands of students achieving their academic goals with expert support
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Link to="/signup" className="bg-white hover:bg-gray-100 text-primary font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-200 shadow-lg text-sm md:text-base">
                Get Started Free
              </Link>
              <Link to="/about" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-200 text-sm md:text-base">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-display text-lg mb-4">The Scribe</h3>
              <p className="text-sm">Empowering students worldwide to achieve academic excellence.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/writers" className="hover:text-white transition-colors">Writers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Essay Writing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Thesis Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>officialthinqscribe@gmail.com</li>
                <li>+2349050035785</li>
                <li>+2349095368912</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 The Scribe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

import { motion } from 'framer-motion';
import { Target, Heart, Users, CheckCircle, BookOpen, Award, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Same style as landing page */}
      <section className="relative min-h-[70vh] bg-[#1e3a8a] overflow-hidden">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-16 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center min-h-[50vh]">
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
                Our Story
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 md:mb-6 leading-tight px-2 lg:px-0"
              >
                About The Scribe
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed px-2 lg:px-0"
              >
                Empowering students worldwide to achieve academic excellence through expert writing support and personalized guidance
              </motion.p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex items-center justify-center order-last"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop"
                alt="Students collaborating and studying together"
                className="w-full md:w-[120%] h-auto rounded-2xl shadow-2xl relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-last md:order-first"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-400 rounded-full opacity-20 -z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop"
                  alt="Student studying with books and laptop"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-xl relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-400 rounded-full opacity-20 -z-10"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="text-2xl md:text-3xl font-display text-primary mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4 text-base md:text-lg leading-relaxed">
                At The Scribe, we believe every student deserves access to expert academic writing support. 
                Our mission is to connect students with verified, qualified writers who can help them achieve their academic goals.
              </p>
              <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
                We're committed to maintaining the highest standards of quality, originality, and academic integrity in every project we facilitate.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '5,000+', label: 'Students Helped' },
                  { number: '98%', label: 'Success Rate' },
                  { number: '24/7', label: 'Support Available' },
                  { number: '100+', label: 'Expert Writers' }
                ].map((stat, index) => (
                  <div key={index} className="bg-blue-50 rounded-xl p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-display text-primary mb-4">Our Core Values</h2>
            <p className="text-lg md:text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Target className="w-10 md:w-12 h-10 md:h-12" />, title: 'Academic Excellence', desc: 'We maintain the highest standards of academic quality and integrity', color: 'text-primary' },
              { icon: <Heart className="w-10 md:w-12 h-10 md:h-12" />, title: 'Student Success', desc: 'Your academic success is our top priority and driving force', color: 'text-accent' },
              { icon: <Users className="w-10 md:w-12 h-10 md:h-12" />, title: 'Expert Network', desc: 'We connect you with verified writers holding advanced degrees', color: 'text-teal-500' },
              { icon: <Shield className="w-10 md:w-12 h-10 md:h-12" />, title: 'Trust & Security', desc: 'Your privacy and academic integrity are always protected', color: 'text-green-500' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${value.color} mx-auto mb-4`}>{value.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left order-last md:order-first"
            >
              <h2 className="text-2xl md:text-3xl font-display text-primary mb-6">
                How We Support Your Academic Journey
              </h2>
              <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
                Our comprehensive platform connects you with expert writers and provides all the tools you need for academic success.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Connect with writers specialized in your field',
                  'Get personalized support for any academic level',
                  'Receive original, plagiarism-free work',
                  'Access 24/7 customer support',
                  'Enjoy unlimited revisions until satisfied'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 md:w-6 h-5 md:h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center md:justify-start">
                <Link to="/signup" className="btn-primary inline-flex items-center text-sm md:text-base px-6 md:px-8 py-3 md:py-4">
                  Get Started Today
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-400 rounded-full opacity-20 -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop"
                alt="Academic writing and research"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl relative z-10"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white relative overflow-hidden">
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
              Ready to Start Your Academic Journey?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-10 px-2">
              Join thousands of students who have transformed their academic writing with The Scribe
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Link to="/signup" className="bg-coral hover:bg-[#e55a2a] text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-200 shadow-lg text-sm md:text-base">
                Get Started Today
              </Link>
              <Link to="/writers" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-200 text-sm md:text-base">
                Browse Writers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

import { motion } from 'framer-motion';
import { MessageCircle, BookOpen, Calculator, Microscope, Globe, Palette, Code, Music, GraduationCap } from 'lucide-react';
import Navigation from '../components/Navigation';

const Writers = () => {
  const writers = [
    {
      id: 1,
      name: 'THE SCRIBE',
      field: 'Literature & English',
      specialties: ['Essay Writing', 'Literary Analysis', 'Creative Writing', 'Research Papers', 'Poetry Analysis', 'Book Reviews', 'Comparative Literature', 'Critical Essays', 'Thesis Writing', 'Dissertations', 'Annotated Bibliography', 'Rhetorical Analysis'],
      whatsapp: '+2349050035785',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'from-blue-500/10 to-blue-600/5',
      iconColor: 'text-blue-600',
      accentColor: 'bg-blue-50'
    },
    {
      id: 2,
      name: 'THE SCRIBE',
      field: 'Science & Research',
      specialties: ['Biology', 'Chemistry', 'Physics', 'Lab Reports', 'Biochemistry', 'Microbiology', 'Genetics', 'Organic Chemistry', 'Environmental Science', 'Anatomy', 'Physiology', 'Research Proposals', 'Scientific Papers'],
      whatsapp: '+2349050035785',
      icon: <Microscope className="w-5 h-5" />,
      color: 'from-emerald-500/10 to-emerald-600/5',
      iconColor: 'text-emerald-600',
      accentColor: 'bg-emerald-50'
    },
    {
      id: 3,
      name: 'THE SCRIBE',
      field: 'Mathematics & Statistics',
      specialties: ['Calculus', 'Statistics', 'Data Analysis', 'Problem Solving', 'Algebra', 'Geometry', 'Trigonometry', 'Linear Algebra', 'Differential Equations', 'Probability', 'SPSS', 'Excel Analysis', 'Mathematical Modeling'],
      whatsapp: '+2349095368912',
      icon: <Calculator className="w-5 h-5" />,
      color: 'from-purple-500/10 to-purple-600/5',
      iconColor: 'text-purple-600',
      accentColor: 'bg-purple-50'
    },
    {
      id: 4,
      name: 'THE SCRIBE',
      field: 'Social Sciences',
      specialties: ['Psychology', 'Sociology', 'Political Science', 'Anthropology', 'Social Work', 'Criminology', 'Human Geography', 'International Relations', 'Public Policy', 'Cultural Studies', 'Gender Studies', 'Case Studies'],
      whatsapp: '+2349095368912',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-orange-500/10 to-orange-600/5',
      iconColor: 'text-orange-600',
      accentColor: 'bg-orange-50'
    },
    {
      id: 5,
      name: 'THE SCRIBE',
      field: 'Arts & Design',
      specialties: ['Art History', 'Graphic Design', 'Fine Arts', 'Creative Projects', 'Visual Arts', 'Photography', 'Film Studies', 'Architecture', 'Fashion Design', 'Interior Design', 'Digital Art', 'Art Criticism'],
      whatsapp: '+2349050035785',
      icon: <Palette className="w-5 h-5" />,
      color: 'from-pink-500/10 to-pink-600/5',
      iconColor: 'text-pink-600',
      accentColor: 'bg-pink-50'
    },
    {
      id: 6,
      name: 'THE SCRIBE',
      field: 'Technology & Engineering',
      specialties: ['Computer Science', 'Programming', 'Software Engineering', 'Technical Writing', 'Web Development', 'Database Design', 'Algorithms', 'Data Structures', 'Networking', 'Cybersecurity', 'AI & Machine Learning', 'Mobile Apps'],
      whatsapp: '+2349050035785',
      icon: <Code className="w-5 h-5" />,
      color: 'from-indigo-500/10 to-indigo-600/5',
      iconColor: 'text-indigo-600',
      accentColor: 'bg-indigo-50'
    },
    {
      id: 7,
      name: 'THE SCRIBE',
      field: 'Business & Economics',
      specialties: ['Business Analysis', 'Economics', 'Finance', 'Marketing', 'Accounting', 'Management', 'Entrepreneurship', 'Strategic Planning', 'Business Plans', 'Financial Analysis', 'Market Research', 'MBA Essays'],
      whatsapp: '+2349095368912',
      icon: <GraduationCap className="w-5 h-5" />,
      color: 'from-teal-500/10 to-teal-600/5',
      iconColor: 'text-teal-600',
      accentColor: 'bg-teal-50'
    },
    {
      id: 8,
      name: 'THE SCRIBE',
      field: 'Music & Performing Arts',
      specialties: ['Music Theory', 'Composition', 'Performance Analysis', 'Music History', 'Theatre Studies', 'Dance', 'Opera', 'Jazz Studies', 'Ethnomusicology', 'Sound Design', 'Music Education', 'Concert Reviews'],
      whatsapp: '+2349095368912',
      icon: <Music className="w-5 h-5" />,
      color: 'from-rose-500/10 to-rose-600/5',
      iconColor: 'text-rose-600',
      accentColor: 'bg-rose-50'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-gray-100">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-48 h-48 bg-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-3xl md:text-4xl font-display text-gray-900 mb-4 leading-tight">
                Connect with Expert Academic Writers
              </h1>
              <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed mb-6">
                Get personalized support from qualified professionals specialized in your field
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#writers"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#writers')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-7 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Browse Writers
                </a>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&q=80"
                  alt="Students collaborating"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">8+</p>
                    <p className="text-xs text-gray-600">Specializations</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Writers List */}
      <section id="writers" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 md:space-y-4">
            {writers.map((writer, index) => (
              <motion.div
                key={writer.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                className="group relative bg-white hover:bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 overflow-hidden"
              >
                <div className="relative p-4 sm:p-5 md:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 md:gap-5">
                    {/* Avatar with Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl ${writer.accentColor} flex items-center justify-center p-2.5 sm:p-3 transition-transform duration-300 group-hover:scale-105`}>
                          <img
                            src="/the_scribelogo.png"
                            alt="The Scribe Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className={`absolute -bottom-1.5 -right-1.5 ${writer.iconColor} bg-white p-1.5 sm:p-2 rounded-lg border border-gray-100`}>
                          {writer.icon}
                        </div>
                      </div>
                    </div>

                    {/* Writer Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3 md:gap-4">
                        <div className="flex-1 space-y-2.5 md:space-y-3">
                          <div>
                            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">
                              {writer.name}
                            </h3>
                            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
                              {writer.field}
                            </p>
                          </div>
                          
                          {/* Specialties */}
                          <div className="flex flex-wrap gap-1.5">
                            {writer.specialties.map((specialty, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs sm:text-sm font-normal rounded-lg border border-gray-100"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* WhatsApp Button */}
                        <div className="flex-shrink-0">
                          <a
                            href={`https://wa.me/${writer.whatsapp.replace(/\s+/g, '')}?text=Hello Scribe!, I found your profile on The Scribe and would like to discuss my academic writing needs.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                          >
                            <MessageCircle className="w-4 h-4 transition-transform group-hover/btn:rotate-12" />
                            <span className="text-sm">Chat on WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-gray-900 leading-tight">
                Need Help with Your Academic Project?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Our expert writers are ready to assist you with personalized academic support
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4">
              <a
                href="https://wa.me/+2349050035785?text=Hello Scribe!!!!! I found your profile on The Scribe and would like to discuss my academic writing needs."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium py-3.5 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span>Get Started Now</span>
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 font-medium py-3.5 px-8 rounded-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:scale-105 active:scale-95"
              >
                Browse All Writers
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Writers;

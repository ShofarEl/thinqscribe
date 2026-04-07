import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo1.png" 
              alt="Thinqscribe" 
              className="h-8 w-8"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="text-xl font-bold text-primary hidden">Thinqscribe</span>
            <span className="text-xl font-display text-primary">Thinqscribe</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              HOME
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              ABOUT
            </Link>
            <Link to="/writers" className="text-gray-700 hover:text-primary transition-colors">
              WRITERS
            </Link>
            <a 
              href="https://ai.thinqscribe.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              AI
            </a>
          </div>

          {/* Desktop User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-gray-700 hover:text-coral transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="btn-primary"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                to="/writers" 
                className="block text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                WRITERS
              </Link>
              <a 
                href="https://ai.thinqscribe.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                AI
              </a>
              
              <div className="border-t pt-3 space-y-3">
                {user ? (
                  <>
                    <Link 
                      to="/profile" 
                      className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="w-5 h-5" />
                      <span>{user.name}</span>
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="flex items-center space-x-2 text-gray-700 hover:text-coral transition-colors py-2 w-full"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/login" 
                      className="block text-gray-700 hover:text-primary transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                    <Link 
                      to="/signup" 
                      className="block btn-primary text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { forgotPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await forgotPassword(email);
    setLoading(false);
    
    if (result.success) {
      setSuccess(true);
    }
  };

  const handleTryAgain = () => {
    setSuccess(false);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Link 
            to="/login" 
            className="inline-flex items-center text-primary hover:text-accent mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sign In
          </Link>

          {!success ? (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-2">Forgot your password?</h2>
                <p className="text-gray-600">
                  No worries! Enter your email address and we'll send you instructions to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-field"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    'Send Reset Instructions'
                  )}
                </button>
              </form>

              <p className="mt-6 text-center text-gray-600">
                Remember your password?{' '}
                <Link to="/login" className="text-accent hover:text-primary font-medium">
                  Sign in
                </Link>
              </p>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-primary mb-2">Check your email</h2>
              <p className="text-gray-600 mb-8">
                We've sent password reset instructions to <strong>{email}</strong>
              </p>
              
              <div className="space-y-3">
                <Link
                  to="/login"
                  className="w-full inline-block btn-primary text-center"
                >
                  Back to Sign In
                </Link>
                <button
                  onClick={handleTryAgain}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-primary font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Try another email
                </button>
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-accent font-semibold mb-2">Having trouble?</h3>
          <p className="text-sm text-gray-600">
            If you don't receive an email within a few minutes, check your spam folder or contact our support team.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;

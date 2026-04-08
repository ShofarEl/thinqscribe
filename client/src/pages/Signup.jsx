import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, User, CheckCircle, BookOpen, Home } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { signup } = useAuth();
  const navigate = useNavigate();

  const getPasswordStrength = (password) => {
    let s = 0;
    if (password.length >= 6) s++;
    if (password.length >= 10) s++;
    if (/[A-Z]/.test(password)) s++;
    if (/[0-9]/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    return s;
  };

  const passwordStrength = getPasswordStrength(formData.password);
  const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
  const strengthColors = ['', '#ef4444', '#f59e0b', '#3b82f6', '#22c55e', '#16a34a'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const e = {};
    if (formData.name.length < 2) e.name = 'At least 2 characters';
    if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Invalid email address';
    if (formData.password.length < 6) e.password = 'At least 6 characters';
    if (formData.password !== formData.confirmPassword) e.confirmPassword = 'Passwords do not match';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setLoading(true);
    const result = await signup(formData.name, formData.email, formData.password);
    setLoading(false);
    if (result.success) navigate('/writers');
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 14px 10px 36px',
    background: 'white',
    border: '1.5px solid #dde3ec',
    borderRadius: '12px',
    fontSize: '13px',
    color: '#0a1628',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '11.5px',
    fontWeight: '600',
    color: '#6b7a90',
    marginBottom: '6px',
    letterSpacing: '0.2px',
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
        fontFamily: "'DM Sans', sans-serif",
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
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
          width: '100%',
          maxWidth: '900px',
          minHeight: window.innerWidth <= 768 ? 'auto' : '620px',
          background: '#f5f6f0',
          borderRadius: window.innerWidth <= 768 ? '20px' : '28px',
          overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(1,83,130,0.13)',
        }}
      >
        {/* LEFT — Form */}
        <div
          style={{
            flex: window.innerWidth <= 768 ? '1' : '0 0 46%',
            padding: window.innerWidth <= 640 ? '40px 20px' : window.innerWidth <= 768 ? '48px 32px' : '40px 44px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: 'linear-gradient(160deg, #f0f4f8 0%, #e8f0f7 100%)',
            minHeight: window.innerWidth <= 768 ? 'auto' : 'auto',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
            <img 
              src="/logo1.png" 
              alt="Thinqscribe Logo" 
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px'
              }}
            />
            <span style={{ fontFamily: "'Berkshire Swash', cursive", fontSize: '18px', color: '#015382', letterSpacing: '0px' }}>Thinqscribe</span>
          </div>

          {/* Heading */}
          <div style={{ marginBottom: '26px' }}>
            <h1 style={{ fontSize: window.innerWidth <= 768 ? '24px' : '28px', fontFamily: "'Berkshire Swash', cursive", color: '#0a1628', marginBottom: '5px', letterSpacing: '0px', lineHeight: 1.25 }}>
              Create an account
            </h1>
            <p style={{ fontSize: '13px', color: '#6b7a90' }}>Sign up and start your academic journey</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            {/* Name */}
            <div>
              <label style={labelStyle}>Full Name</label>
              <div style={{ position: 'relative' }}>
                <User size={14} style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: '#9daab8' }} />
                <input
                  type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Amélie Laurent" required style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#015382')}
                  onBlur={(e) => (e.target.style.borderColor = '#dde3ec')}
                />
              </div>
              {errors.name && <p style={{ color: '#ef4444', fontSize: '11.5px', marginTop: '4px' }}>{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>Email</label>
              <div style={{ position: 'relative' }}>
                <Mail size={14} style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: '#9daab8' }} />
                <input
                  type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="your@email.com" required style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#015382')}
                  onBlur={(e) => (e.target.style.borderColor = '#dde3ec')}
                />
              </div>
              {errors.email && <p style={{ color: '#ef4444', fontSize: '11.5px', marginTop: '4px' }}>{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label style={labelStyle}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={14} style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: '#9daab8' }} />
                <input
                  type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange}
                  placeholder="••••••••••••" required style={{ ...inputStyle, paddingRight: '38px' }}
                  onFocus={(e) => (e.target.style.borderColor = '#015382')}
                  onBlur={(e) => (e.target.style.borderColor = '#dde3ec')}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '13px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9daab8', padding: 0 }}>
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
              {formData.password && (
                <div style={{ marginTop: '6px' }}>
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '3px' }}>
                    {[...Array(5)].map((_, i) => (
                      <div key={i} style={{ height: '3px', flex: 1, borderRadius: '2px', background: i < passwordStrength ? strengthColors[passwordStrength] : '#dde3ec', transition: 'background 0.3s' }} />
                    ))}
                  </div>
                  <p style={{ fontSize: '11px', color: strengthColors[passwordStrength] || '#9daab8' }}>{strengthLabels[passwordStrength]}</p>
                </div>
              )}
              {errors.password && <p style={{ color: '#ef4444', fontSize: '11.5px', marginTop: '4px' }}>{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label style={labelStyle}>Confirm Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={14} style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: '#9daab8' }} />
                <input
                  type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
                  placeholder="••••••••••••" required style={{ ...inputStyle, paddingRight: '38px' }}
                  onFocus={(e) => (e.target.style.borderColor = '#015382')}
                  onBlur={(e) => (e.target.style.borderColor = '#dde3ec')}
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ position: 'absolute', right: '13px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9daab8', padding: 0 }}>
                  {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
              {formData.confirmPassword && formData.password === formData.confirmPassword && (
                <p style={{ color: '#22c55e', fontSize: '11.5px', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle size={12} /> Passwords match
                </p>
              )}
              {errors.confirmPassword && <p style={{ color: '#ef4444', fontSize: '11.5px', marginTop: '4px' }}>{errors.confirmPassword}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit" disabled={loading}
              style={{
                width: '100%', padding: '13px',
                background: loading ? '#5a9fc0' : '#015382',
                color: 'white', border: 'none', borderRadius: '12px',
                fontSize: '13.5px', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer',
                marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => { if (!loading) e.target.style.background = '#013f62'; }}
              onMouseLeave={(e) => { if (!loading) e.target.style.background = '#015382'; }}
            >
              {loading
                ? <div style={{ width: '16px', height: '16px', border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                : 'Create Account'}
            </button>
          </form>

          {/* Footer */}
          <div style={{ 
            marginTop: '20px', 
            display: 'flex', 
            flexDirection: window.innerWidth <= 640 ? 'column' : 'row',
            justifyContent: 'space-between', 
            alignItems: window.innerWidth <= 640 ? 'flex-start' : 'center',
            gap: window.innerWidth <= 640 ? '12px' : '0'
          }}>
            <p style={{ fontSize: '12px', color: '#6b7a90', margin: 0 }}>
              Have an account?{' '}
              <Link to="/login" style={{ color: '#015382', fontWeight: '600', textDecoration: 'none' }}>Sign in</Link>
            </p>
            <Link to="/" style={{ fontSize: '11.5px', color: '#9daab8', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* RIGHT — Image Panel */}
        <div style={{ 
          flex: 1, 
          position: 'relative', 
          overflow: 'hidden', 
          borderRadius: window.innerWidth <= 768 ? '0' : '0 28px 28px 0',
          minHeight: window.innerWidth <= 768 ? '200px' : 'auto',
          display: window.innerWidth <= 480 ? 'none' : 'block',
        }}>
          <div
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'linear-gradient(135deg, rgba(1,83,130,0.72) 0%, rgba(1,40,80,0.55) 100%), url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop)',
              backgroundSize: 'cover', backgroundPosition: 'center',
            }}
          />

          {/* Floating top card */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{
              position: 'absolute', 
              top: window.innerWidth <= 768 ? '16px' : '24px', 
              left: window.innerWidth <= 768 ? '16px' : '20px',
              background: 'rgba(255,255,255,0.93)', 
              backdropFilter: 'blur(10px)',
              borderRadius: '14px', 
              padding: window.innerWidth <= 768 ? '10px 14px' : '12px 16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            }}
          >
            <p style={{ fontSize: '11.5px', fontWeight: '700', color: '#0a1628', margin: '0 0 1px' }}>Free Account Setup</p>
            <p style={{ fontSize: '11px', color: '#6b7a90', margin: 0 }}>Instant writer matching</p>
          </motion.div>

          {/* Floating bottom card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{
              position: 'absolute', 
              bottom: window.innerWidth <= 768 ? '16px' : '28px', 
              left: window.innerWidth <= 768 ? '16px' : '20px', 
              right: window.innerWidth <= 768 ? '16px' : '20px',
              background: 'rgba(255,255,255,0.93)', 
              backdropFilter: 'blur(10px)',
              borderRadius: '14px', 
              padding: window.innerWidth <= 768 ? '12px 16px' : '14px 18px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
            }}
          >
            <div>
              <p style={{ fontSize: '12.5px', fontWeight: '700', color: '#0a1628', margin: '0 0 2px' }}>Quality Guaranteed</p>
              <p style={{ fontSize: '11px', color: '#6b7a90', margin: 0 }}>Secure & confidential · 24/7</p>
            </div>
            <div style={{ display: 'flex' }}>
              {['#015382', '#e8a020', '#34a853', '#ef4444'].map((c, i) => (
                <div key={i} style={{ width: '24px', height: '24px', borderRadius: '50%', background: c, border: '2px solid white', marginLeft: i > 0 ? '-7px' : '0' }} />
              ))}
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

export default Signup;
import React, { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [feedback, setFeedback] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prev => ({ ...prev, [name]: value }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  const scriptURL = "https://script.google.com/macros/s/AKfycbyJwN7FL8QuQywXoqnuQ_3v9YW-imk1Hzuk0_LnHvU67iNXsKGgomYi6ywztybt_sjXVg/exec";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(feedback),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      toast.success("Feedback saved to Google Sheet!");
      setIsSubmitted(true);
      setFeedback({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      toast.error("Failed to submit feedback.");
    }
  } catch (error) {
    console.error("Error submitting feedback:", error);
    toast.error("Something went wrong.");
  }
};


  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClass = scrollPosition > 50 ? 'navbar scrolled' : 'navbar';

  const extensions = [
    { name: 'Privacy Guard', desc: 'Block trackers and protect your data', icon: '🔒' },
    { name: 'Ad Blocker', desc: 'Remove all ads for seamless browsing', icon: '🚫' },
    { name: 'Password Vault', desc: 'Secure password storage and generator', icon: '🔑' },
    { name: 'Dark Mode Pro', desc: 'Universal dark mode for all websites', icon: '🌙' }
  ];

  const features = [
    { title: 'Lightweight', desc: 'Minimal resource usage for optimal performance', icon: '⚡' },
    { title: 'Secure', desc: 'Military-grade encryption for all your data', icon: '🛡️' },
    { title: 'Cross-Platform', desc: 'Works on all major browsers and devices', icon: '🌐' },
    { title: 'Regular Updates', desc: 'Continuous improvements and new features', icon: '🔄' }
  ];

  const team = [
    { name: 'Ijas', role: 'CEO & Founder', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Mahesh', role: 'Lead Developer', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Midhun Chen', role: 'Security Expert', img: 'https://randomuser.me/api/portraits/men/22.jpg' },
    { name: 'Amal Davis', role: 'UX Designer', img: 'https://randomuser.me/api/portraits/women/63.jpg' },
    { name: 'krishna Kim', role: 'Marketing Head', img: 'https://randomuser.me/api/portraits/men/75.jpg' },
    { name: 'Sreehari Brown', role: 'Customer Support', img: 'https://randomuser.me/api/portraits/women/28.jpg' }
  ];

  const faqs = [
    { question: 'How do I install Lock extensions?', answer: 'Simply visit our download page, choose your browser, and click install. The extension will guide you through the setup process.' },
    { question: 'Are Lock extensions free?', answer: 'We offer both free and premium versions. The free versions have basic features while premium unlocks advanced functionality.' },
    { question: 'Is my data safe with Lock?', answer: 'Absolutely! We never collect or store your personal data. All processing happens locally on your device.' },
    { question: 'Can I use Lock on multiple devices?', answer: 'Yes, with a premium account you can sync your settings across all your devices securely.' },
    { question: 'How often are new features added?', answer: 'We release updates monthly with new features, improvements, and security enhancements.' }
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <header className={navbarClass}>
        <div className="container">
          <div className="logo">
            <span className="logo-icon">🔒</span>
            <span className="logo-text">LOCK</span>
          </div>
          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#extensions" onClick={() => setIsMenuOpen(false)}>Extensions</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#team" onClick={() => setIsMenuOpen(false)}>Team</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
          </nav>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className={`bar ${isMenuOpen ? 'animate' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'animate' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'animate' : ''}`}></span>
          </button>
        </div>
      </header>
    
      

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title animate-text">Secure Your Digital Life</h1>
            <p className="hero-subtitle">Powerful browser extensions to protect your privacy and enhance your browsing experience</p>
            <div className="hero-buttons">
              <a href="#extensions" className="btn-primary">Explore Extensions</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="extension-preview">
              <div className="browser-window">
                <div className="browser-header">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="browser-content">
                  <div className="lock-animation">
                    <div className="lock-top"></div>
                    <div className="lock-body"></div>
                    <div className="lock-key"></div>
                  </div>
                  <p className="secure-text">Your connection is secured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-down">
          <span></span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About <span>Lock</span></h2>
            <p>Your trusted partner in online security</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>At Lock, we believe in a safer, more private internet for everyone. Founded in 2018, our team of security experts and developers work tirelessly to create tools that put you in control of your digital life.</p>
              <p>We're not just another tech company - we're a movement dedicated to fighting against data mining, intrusive ads, and online surveillance.</p>
              <div className="stats">
                <div className="stat-item">
                  <h4>5M+</h4>
                  <p>Active Users</p>
                </div>
                <div className="stat-item">
                  <h4>15+</h4>
                  <p>Extensions</p>
                </div>
                <div className="stat-item">
                  <h4>24/7</h4>
                  <p>Support</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="globe-animation">
                <div className="globe">
                  <div className="ring"></div>
                  <div className="ring"></div>
                  <div className="ring"></div>
                  <div className="core"></div>
                </div>
                <div className="dots">
                  {[...Array(12)].map((_, i) => <div key={i} className="dot" style={{ transform: `rotate(${i * 30}deg) translate(80px)` }}></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extensions Section */}
      <section id="extensions" className="extensions">
        <div className="container">
          <div className="section-header">
            <h2>Our <span>Extensions</span></h2>
            <p>Choose the perfect tools for your needs</p>
          </div>
          <div className="extensions-grid">
            {extensions.map((ext, index) => (
              <div key={index} className="extension-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="extension-icon">{ext.icon}</div>
                <h3>{ext.name}</h3>
                <p>{ext.desc}</p>
                <button className="btn-outline">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download">
        <div className="container">
          <div className="download-content">
            <h2>Ready to <span>Lock</span> It Down?</h2>
            <p>Download our extensions today and take control of your online experience</p>
            <div className="browser-buttons">
              <button className="browser-btn chrome">
                <span className="icon">🌐</span>
                <span>Chrome</span>
              </button>
              <button className="browser-btn firefox">
                <span className="icon">🦊</span>
                <span>Firefox</span>
              </button>
              <button className="browser-btn edge">
                <span className="icon">🔵</span>
                <span>Edge</span>
              </button>
              <button className="browser-btn safari">
                <span className="icon">🍏</span>
                <span>Safari</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Key <span>Features</span></h2>
            <p>Why millions trust Lock for their security needs</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-header">
            <h2>Our <span>Team</span></h2>
            <p>The brilliant minds behind Lock</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="team-img">
                  <img src={member.img} alt={member.name} />
                  <div className="social-links">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                  </div>
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contact <span>Us</span></h2>
            <p>We'd love to hear from you</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Location</h3>
                  <p>123 Security Ave, San Francisco, CA 94107</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>support@locksecurity.com</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked <span>Questions</span></h2>
            <p>Find answers to common questions about Lock</p>
          </div>
          <div className="faq-content">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFAQ === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">{activeFAQ === index ? '-' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
   <section className="feedback">
  <div className="container">
    <div className="feedback-content">
      <h2>Your <span>Feedback</span> Matters</h2>
      <p>Help us improve by sharing your experience</p>

      {isSubmitted ? (
        <div className="success-message">
          <p>Thank you for your feedback! We appreciate your input.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={feedback.name}
              onChange={handleFeedbackChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={feedback.email}
              onChange={handleFeedbackChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Feedback"
              rows="4"
              value={feedback.message}
              onChange={handleFeedbackChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-primary">Submit Feedback</button>
        </form>
      )}
    </div>
  </div>

  {/* Toast Container */}
  <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
</section>


      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <div className="logo">
                <span className="logo-icon">🔒</span>
                <span className="logo-text">LOCK</span>
              </div>
              <p>Empowering users with privacy-focused browser extensions since 2018.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
              </div>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#extensions">Extensions</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Extensions</h3>
              <ul>
                {extensions.map((ext, index) => (
                  <li key={index}><a href="#">{ext.name}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-newsletter">
              <h3>Newsletter</h3>
              <p>Subscribe to get updates on new releases and features.</p>
              <form>
                <input type="email" placeholder="Your Email" required />
                <button type="submit" className="btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Lock Security. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
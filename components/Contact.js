'use client';
import { useState } from 'react';
import Icon from './Icon';
import cvData from '@/data/cv-data.json';

export default function Contact() {
  const { contact, personal } = cvData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">
            تواصل <span>معي</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            هل لديك مشروع؟ أو تريد الاستفسار عن شيء؟ أرسل لي رسالة
          </p>
        </div>

        <div className="contact-container">
          
          <div className="contact-info">
            <h3 className="info-title">معلومات الاتصال</h3>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Icon name="FaEnvelope" size={24} color="white" />
                </div>
                <div className="info-content">
                  <h4>البريد الإلكتروني</h4>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Icon name="FaPhone" size={24} color="white" />
                </div>
                <div className="info-content">
                  <h4>رقم الهاتف</h4>
                  <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Icon name="FaMapMarkerAlt" size={24} color="white" />
                </div>
                <div className="info-content">
                  <h4>الموقع</h4>
                  <p>{contact.address}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Icon name="FaCalendarAlt" size={24} color="white" />
                </div>
                <div className="info-content">
                  <h4>موعد سريع</h4>
                  <a href={contact.calendar} target="_blank" rel="noopener noreferrer">
                    احجز موعد
                  </a>
                </div>
              </div>
            </div>

            
            <div className="quick-actions">
              <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="action-btn github">
                <Icon name="FaGithub" size={20} />
                <span>GitHub</span>
              </a>
              <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="action-btn linkedin">
                <Icon name="FaLinkedin" size={20} />
                <span>LinkedIn</span>
              </a>
              <a href={personal.social.twitter} target="_blank" rel="noopener noreferrer" className="action-btn twitter">
                <Icon name="FaTwitter" size={20} />
                <span>Twitter</span>
              </a>
            </div>
          </div>

          
          <div className="contact-form">
            <h3 className="form-title">أرسل رسالة</h3>
            
            {submitStatus === 'success' && (
              <div className="form-success">
                <Icon name="FaCheckCircle" size={24} />
                <p>تم إرسال رسالتك بنجاح! سأتواصل معك قريباً</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">الاسم</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسمك"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="أدخل بريدك"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">الموضوع</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="ما موضوع رسالتك؟"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Icon name="FaPaperPlane" size={18} />
                    إرسال الرسالة
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
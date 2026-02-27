'use client';
import { useState } from 'react';
import Icon from './Icon';
import cvData from '@/data/cv-data.json';

export default function About() {
  const { personal, education, certificates, languages } = cvData;
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            من <span>أنا</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-container">
          {/* Left Column - Info */}
          <div className="about-info">
            <div className="about-card">
              <div className="about-avatar">
                <Icon name="FaUserTie" size={40} color="#667eea" />
              </div>
              <h3 className="about-name">{personal.name}</h3>
              <p className="about-title">{personal.title}</p>
              
              <div className="about-details">
                <div className="detail-item">
                  <Icon name="FaEnvelope" size={20} color="#667eea" />
                  <span>{personal.email}</span>
                </div>
                <div className="detail-item">
                  <Icon name="FaPhone" size={20} color="#667eea" />
                  <span>{personal.phone}</span>
                </div>
                <div className="detail-item">
                  <Icon name="FaMapMarkerAlt" size={20} color="#667eea" />
                  <span>{personal.location}</span>
                </div>
              </div>

              <a href="#contact" className="about-contact-btn">
                <Icon name="FaEnvelope" size={18} />
                راسلني
              </a>
            </div>
          </div>

          {/* Right Column - Tabs */}
          <div className="about-tabs">
            <div className="tabs-header">
              <button 
                className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => setActiveTab('about')}
              >
                <Icon name="FaUser" size={16} />
                عني
              </button>

              <button 
                className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                <Icon name="FaGraduationCap" size={16} />
                التعليم
              </button>

              <button 
                className={`tab-btn ${activeTab === 'certificates' ? 'active' : ''}`}
                onClick={() => setActiveTab('certificates')}
              >
                <Icon name="FaCertificate" size={16} />
                الشهادات
              </button>

              <button 
                className={`tab-btn ${activeTab === 'languages' ? 'active' : ''}`}
                onClick={() => setActiveTab('languages')}
              >
                <Icon name="FaLanguage" size={16} />
                اللغات
              </button>
            </div>

            <div className="tabs-content">
              {/* About Tab */}
              {activeTab === 'about' && (
                <div className="tab-pane">
                  <p className="about-bio">{personal.bio}</p>
                  
                  <div className="about-stats">
                    <div className="stat-item">
                      <span className="stat-number">3+</span>
                      <span className="stat-label">سنوات خبرة</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">20+</span>
                      <span className="stat-label">مشروع</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">50+</span>
                      <span className="stat-label">عميل</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">100+</span>
                      <span className="stat-label">كوب قهوة</span>
                    </div>
                  </div>

                  <div className="about-features">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <Icon name="FaBullseye" size={24} color="#667eea" />
                      </div>
                      <h4>الشغف</h4>
                      <p>أحب بناء تطبيقات ويب مبتكرة وسهلة الاستخدام</p>
                    </div>

                    <div className="feature-item">
                      <div className="feature-icon">
                        <Icon name="FaRocket" size={24} color="#667eea" />
                      </div>
                      <h4>التعلم المستمر</h4>
                      <p>دائماً أتابع أحدث التقنيات وأطور مهاراتي</p>
                    </div>

                    <div className="feature-item">
                      <div className="feature-icon">
                        <Icon name="FaHandshake" size={24} color="#667eea" />
                      </div>
                      <h4>العمل الجماعي</h4>
                      <p>أفضل العمل ضمن فريق لتحقيق أفضل النتائج</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === 'education' && (
                <div className="tab-pane">
                  <div className="timeline">
                    {education.map((edu) => (
                      <div key={edu.id} className="timeline-item">
                        <div className="timeline-icon">
                          <Icon name="FaGraduationCap" size={20} color="#667eea" />
                        </div>
                        <div className="timeline-content">
                          <div className="timeline-header">
                            <h3>{edu.degree}</h3>
                            <span className="timeline-date">
                              {edu.startDate} - {edu.endDate}
                            </span>
                          </div>
                          <h4 className="timeline-institution">{edu.institution}</h4>
                          <p className="timeline-description">{edu.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certificates Tab */}
              {activeTab === 'certificates' && (
                <div className="tab-pane">
                  <div className="certificates-grid">
                    {certificates.map((cert) => (
                      <div key={cert.id} className="certificate-card">
                        <div className="certificate-icon">
                          <Icon name="FaCertificate" size={32} color="#667eea" />
                        </div>
                        <h3>{cert.name}</h3>
                        <p className="certificate-issuer">{cert.issuer}</p>
                        <p className="certificate-date">{cert.date}</p>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="certificate-link"
                        >
                          عرض الشهادة
                          <Icon name="FaExternalLinkAlt" size={14} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Languages Tab */}
              {activeTab === 'languages' && (
                <div className="tab-pane">
                  <div className="languages-list">
                    {languages.map((lang, index) => (
                      <div key={index} className="language-item">
                        <div className="language-info">
                          <h3>{lang.name}</h3>
                          <span className="language-level">{lang.level}</span>
                        </div>
                        <div className="language-progress">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${lang.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';
import { useState } from 'react';
import Icon from './Icon';
import cvData from '@/data/cv-data.json';

export default function Skills() {
  const { skills } = cvData;
  const [filter, setFilter] = useState('all');
  
  
  const advancedSkills = skills.filter(s => s.level >= 80);
  const intermediateSkills = skills.filter(s => s.level >= 60 && s.level < 80);
  const beginnerSkills = skills.filter(s => s.level < 60);

  const getFilteredSkills = () => {
    switch(filter) {
      case 'advanced': return advancedSkills;
      case 'intermediate': return intermediateSkills;
      case 'beginner': return beginnerSkills;
      default: return skills;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            المهارات <span>التقنية</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            مجموعة من المهارات والتقنيات التي أستخدمها في مشاريعي اليومية
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="skills-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            كل المهارات
          </button>
          <button 
            className={`filter-btn ${filter === 'advanced' ? 'active' : ''}`}
            onClick={() => setFilter('advanced')}
          >
            متقدم
          </button>
          <button 
            className={`filter-btn ${filter === 'intermediate' ? 'active' : ''}`}
            onClick={() => setFilter('intermediate')}
          >
            متوسط
          </button>
          <button 
            className={`filter-btn ${filter === 'beginner' ? 'active' : ''}`}
            onClick={() => setFilter('beginner')}
          >
            مبتدئ
          </button>
        </div>

        
        <div className="skills-grid">
          {getFilteredSkills().map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon-wrapper" style={{ backgroundColor: `${skill.color}20` }}>
                <Icon name={skill.icon} size={32} color={skill.color} />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">
                <div className="skill-progress">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        
        <div className="skills-stats">
          <div className="stats-card">
            <div className="stats-icon">
              <Icon name="FaCode" size={24} color="#667eea" />
            </div>
            <div className="stats-info">
              <span className="stats-number">{skills.length}</span>
              <span className="stats-label">مجموع المهارات</span>
            </div>
          </div>
          <div className="stats-card">
            <div className="stats-icon">
              <Icon name="FaRocket" size={24} color="#667eea" />
            </div>
            <div className="stats-info">
              <span className="stats-number">{advancedSkills.length}</span>
              <span className="stats-label">مهارات متقدمة</span>
            </div>
          </div>
          <div className="stats-card">
            <div className="stats-icon">
              <Icon name="FaStar" size={24} color="#667eea" />
            </div>
            <div className="stats-info">
              <span className="stats-number">{intermediateSkills.length}</span>
              <span className="stats-label">مهارات متوسطة</span>
            </div>
          </div>
          <div className="stats-card">
            <div className="stats-icon">
              <Icon name="FaLeaf" size={24} color="#667eea" />
            </div>
            <div className="stats-info">
              <span className="stats-number">{beginnerSkills.length}</span>
              <span className="stats-label">قيد التعلم</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
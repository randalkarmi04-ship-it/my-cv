'use client';
import { useState } from 'react';
import Icon from './Icon';
import cvData from '@/data/cv-data.json';

export default function Projects() {
  const { projects } = cvData;
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState('all');

  
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const handleProjectClick = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            المشاريع <span>السابقة</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            مجموعة من المشاريع التي قمت بتطويرها باستخدام تقنيات حديثة
          </p>
        </div>

       
        <div className="projects-grid">
          {/* المشاريع المميزة */}
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card featured ${activeProject === project.id ? 'expanded' : ''}`}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-header">
                <div className="project-icon-wrapper">
                  <Icon name={project.icon} size={32} color="#667eea" />
                </div>
                <div className="project-badge">مميز</div>
              </div>

              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tech-tag">+{project.technologies.length - 4}</span>
                )}
              </div>

              {activeProject === project.id && (
                <div className="project-details">
                  <p className="project-full-description">
                    {project.description} تم تطوير هذا المشروع باستخدام أحدث التقنيات لضمان أفضل أداء وتجربة مستخدم.
                  </p>
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Icon name="FaExternalLinkAlt" size={14} />
                      معاينة حية
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Icon name="FaGithub" size={14} />
                      الكود المصدري
                    </a>
                  </div>
                </div>
              )}

              <div className="project-footer">
                <span className="project-year">{project.year}</span>
                <button className="project-expand-btn">
                  <Icon name={activeProject === project.id ? "FaChevronUp" : "FaChevronDown"} size={16} />
                </button>
              </div>
            </div>
          ))}

          
          {otherProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${activeProject === project.id ? 'expanded' : ''}`}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-header">
                <div className="project-icon-wrapper">
                  <Icon name={project.icon} size={28} color="#718096" />
                </div>
              </div>

              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              {activeProject === project.id && (
                <div className="project-details">
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Icon name="FaExternalLinkAlt" size={14} />
                      معاينة
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Icon name="FaGithub" size={14} />
                      كود
                    </a>
                  </div>
                </div>
              )}

              <div className="project-footer">
                <span className="project-year">{project.year}</span>
                <button className="project-expand-btn">
                  <Icon name={activeProject === project.id ? "FaChevronUp" : "FaChevronDown"} size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        
        <div className="projects-more">
          <a href="https://github.com/rand" target="_blank" rel="noopener noreferrer" className="more-btn">
            <Icon name="FaGithub" size={20} />
            شاهد المزيد على GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
// lib/icons.js
import { 
  FaReact, 
  FaHtml5, 
  FaCss3, 
  FaNodeJs, 
  FaGitAlt, 
  FaBlogger, 
  FaTasks, 
  FaShoppingCart, 
  FaCloudSun,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt
} from 'react-icons/fa';

import { 
  SiNextdotjs, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiFigma 
} from 'react-icons/si';

// خريطة الأيقونات
export const iconMap = {
  // Skills
  FaReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  FaHtml5,
  FaCss3,
  SiTailwindcss,
  FaNodeJs,
  FaGitAlt,
  SiFigma,
  
  // Projects
  FaBlogger,
  FaTasks,
  FaShoppingCart,
  FaCloudSun,
  
  // Social
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  
  // Contact
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt
};

// دالة مساعدة للحصول على الأيقونة
export const getIcon = (iconName) => {
  return iconMap[iconName] || FaReact; // افتراضي React
};
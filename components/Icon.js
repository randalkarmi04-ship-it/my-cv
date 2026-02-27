'use client';
import { getIcon } from '@/lib/icons';

export default function Icon({ name, className = '', size = 24, color = '' }) {
  const IconComponent = getIcon(name);
  
  return <IconComponent className={className} size={size} color={color} />;
}
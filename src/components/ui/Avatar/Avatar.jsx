import React, { useState } from 'react';
import { AvatarContainer, AvatarSvg, GlowEffect } from './Avatar.styles';

const Avatar = ({ size = 120, showAnimation = true, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AvatarContainer 
      className={className}
      size={size}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlowEffect $isActive={isHovered && showAnimation} />
      
      <AvatarSvg 
        width={size} 
        height={size} 
        viewBox="0 0 120 120" 
        xmlns="http://www.w3.org/2000/svg"
        $isHovered={isHovered}
      >
        {/* Background circle */}
        <circle cx="60" cy="60" r="58" fill="#1a1a1a" stroke="#10b981" strokeWidth="2"/>
        
        {/* Head */}
        <ellipse cx="60" cy="65" rx="28" ry="32" fill="#d4a574"/>
        
        {/* Hair */}
        <ellipse cx="60" cy="45" rx="30" ry="18" fill="#8b6f3a"/>
        <rect x="30" y="42" width="60" height="12" fill="#8b6f3a"/>
        
        {/* Hair texture */}
        <rect x="35" y="35" width="3" height="8" fill="#a0804d"/>
        <rect x="40" y="33" width="3" height="10" fill="#a0804d"/>
        <rect x="45" y="34" width="3" height="9" fill="#a0804d"/>
        <rect x="50" y="32" width="3" height="11" fill="#a0804d"/>
        <rect x="55" y="33" width="3" height="10" fill="#a0804d"/>
        <rect x="60" y="31" width="3" height="12" fill="#a0804d"/>
        <rect x="65" y="33" width="3" height="10" fill="#a0804d"/>
        <rect x="70" y="32" width="3" height="11" fill="#a0804d"/>
        <rect x="75" y="34" width="3" height="9" fill="#a0804d"/>
        <rect x="80" y="35" width="3" height="8" fill="#a0804d"/>
        <rect x="85" y="36" width="3" height="7" fill="#a0804d"/>
        
        {/* Glasses frame */}
        <rect x="40" y="58" width="18" height="14" fill="none" stroke="#4a5568" strokeWidth="2" rx="3"/>
        <rect x="62" y="58" width="18" height="14" fill="none" stroke="#4a5568" strokeWidth="2" rx="3"/>
        
        {/* Glasses bridge */}
        <rect x="58" y="64" width="4" height="2" fill="#4a5568"/>
        
        {/* Glasses lenses */}
        <rect x="42" y="60" width="14" height="10" fill="rgba(99, 179, 237, 0.3)" rx="2"/>
        <rect x="64" y="60" width="14" height="10" fill="rgba(99, 179, 237, 0.3)" rx="2"/>
        
        {/* Glasses reflection */}
        <rect x="43" y="61" width="4" height="3" fill="rgba(255, 255, 255, 0.6)"/>
        <rect x="65" y="61" width="4" height="3" fill="rgba(255, 255, 255, 0.6)"/>
        
        {/* Eyes behind glasses */}
        <circle cx="49" cy="65" r="3" fill="#2d2d2d"/>
        <circle cx="71" cy="65" r="3" fill="#2d2d2d"/>
        <circle cx="50" cy="64" r="1" fill="#ffffff"/>
        <circle cx="72" cy="64" r="1" fill="#ffffff"/>
        
        {/* Nose */}
        <ellipse cx="60" cy="72" rx="2" ry="4" fill="#c19660"/>
        
        {/* Mouth */}
        <ellipse cx="60" cy="82" rx="6" ry="3" fill="#8b4513"/>
        <ellipse cx="60" cy="81" rx="4" ry="2" fill="#d4a574"/>
        
        {/* Shirt/clothing */}
        <rect x="35" y="95" width="50" height="25" fill="#1e3a8a"/>
        
        {/* Digital elements - animados */}
        <rect x="20" y="20" width="2" height="2" fill="#10b981">
          {showAnimation && (
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
          )}
        </rect>
        <rect x="25" y="15" width="2" height="2" fill="#10b981">
          {showAnimation && (
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
          )}
        </rect>
        <rect x="93" y="18" width="2" height="2" fill="#10b981">
          {showAnimation && (
            <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite"/>
          )}
        </rect>
        <rect x="98" y="25" width="2" height="2" fill="#10b981">
          {showAnimation && (
            <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite"/>
          )}
        </rect>
        
        {/* Terminal cursor effect */}
        <rect x="105" y="35" width="8" height="2" fill="#10b981">
          {showAnimation && (
            <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
          )}
        </rect>
        
        {/* Code brackets */}
        <text x="15" y="40" fill="#10b981" fontFamily="monospace" fontSize="12">{'{'}</text>
        <text x="100" y="90" fill="#10b981" fontFamily="monospace" fontSize="12">{'}'}</text>
        
        {/* Small pixels for tech aesthetic */}
        <rect x="25" y="95" width="1" height="1" fill="#10b981"/>
        <rect x="27" y="97" width="1" height="1" fill="#10b981"/>
        <rect x="92" y="95" width="1" height="1" fill="#10b981"/>
        <rect x="94" y="97" width="1" height="1" fill="#10b981"/>
      </AvatarSvg>
    </AvatarContainer>
  );
};

export default Avatar;
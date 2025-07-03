import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(16, 185, 129, 0.6);
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  cursor: pointer;
  animation: ${float} 3s ease-in-out infinite;
`;

export const GlowEffect = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  opacity: ${props => props.$isActive ? 1 : 0};
  transition: opacity 0.3s ease;
  animation: ${props => props.$isActive ? glowPulse : 'none'} 2s infinite;
`;

export const AvatarSvg = styled.svg`
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
  
  ${props => props.$isHovered && `
    transform: scale(1.05);
  `}
`;
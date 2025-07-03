import styled, { keyframes } from 'styled-components';

const floatUp = keyframes`
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
`;

export const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
`;

export const Particle = styled.div.attrs(props => ({
  style: {
    left: `${props.$left}%`,
    width: `${props.$size}px`,
    height: `${props.$size}px`,
    opacity: props.$opacity,
    animationDelay: `${props.$delay}s`,
    animationDuration: `${props.$duration}s`
  }
}))`
  position: absolute;
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: ${floatUp} linear infinite;
  box-shadow: 0 0 6px ${props => props.theme.colors.primary};
`;
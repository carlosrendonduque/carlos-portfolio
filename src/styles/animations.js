import { keyframes } from 'styled-components';

export const animations = {
  // Typewriter effect
  typewriter: keyframes`
    from { width: 0 }
    to { width: 100% }
  `,

  // Blink cursor
  blink: keyframes`
    0%, 50% { opacity: 1 }
    51%, 100% { opacity: 0 }
  `,

  // Fade in
  fadeIn: keyframes`
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  `,

  // Slide in from left
  slideInLeft: keyframes`
    from { 
      opacity: 0;
      transform: translateX(-30px);
    }
    to { 
      opacity: 1;
      transform: translateX(0);
    }
  `,

  // Glitch effect
  glitch: keyframes`
    0% { transform: translate(0) }
    20% { transform: translate(-2px, 2px) }
    40% { transform: translate(-2px, -2px) }
    60% { transform: translate(2px, 2px) }
    80% { transform: translate(2px, -2px) }
    100% { transform: translate(0) }
  `,

  // Pulse glow
  pulseGlow: keyframes`
    0%, 100% { 
      box-shadow: 0 0 5px rgba(16, 185, 129, 0.3);
    }
    50% { 
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.8);
    }
  `,

  // Float
  float: keyframes`
    0%, 100% { transform: translateY(0px) }
    50% { transform: translateY(-10px) }
  `,

  // Matrix rain effect
  matrixRain: keyframes`
    0% { transform: translateY(-100vh) }
    100% { transform: translateY(100vh) }
  `
};

export const mixins = {
  // Center flexbox
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  // Absolute center
  absoluteCenter: `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  // Terminal text style
  terminalText: `
    font-family: 'Courier New', monospace;
    color: #10b981;
    text-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
  `,

  // Card base
  cardBase: `
    background: rgba(17, 24, 39, 0.5);
    border: 1px solid #374151;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    
    &:hover {
      border-color: #10b981;
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
    }
  `
};
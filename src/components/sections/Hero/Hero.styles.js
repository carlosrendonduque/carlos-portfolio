import styled, { keyframes } from 'styled-components';
import { mixins, animations } from '../../../styles/animations';
import { media } from '../../../styles/theme';

const scrollBounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
`;

const glitchTitle = keyframes`
  0%, 90%, 100% { transform: translate(0); }
  10% { transform: translate(-2px, -1px); }
  20% { transform: translate(2px, 1px); }
  30% { transform: translate(-1px, 2px); }
  40% { transform: translate(1px, -2px); }
  50% { transform: translate(-2px, 1px); }
  60% { transform: translate(2px, -1px); }
  70% { transform: translate(-1px, -2px); }
  80% { transform: translate(1px, 2px); }
`;

export const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  ${mixins.flexCenter};
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  padding: ${props => props.theme.space[8]} 0;
`;

export const BackgroundEffects = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  width: 100%;
  padding: 0 ${props => props.theme.space[6]};
  
  animation: ${animations.fadeIn} 1s ease-out;
`;

export const TerminalPrompt = styled.div`
  ${mixins.terminalText};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.lg};
  margin-bottom: ${props => props.theme.space[4]};
  animation: ${animations.fadeIn} 0.8s ease-out 0.2s both;
  
  ${media.md} {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const HeroTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.space[6]};
  animation: ${animations.fadeIn} 1s ease-out 0.4s both;
  transition: ${props => props.theme.transitions.base};
  
  ${media.md} {
    font-size: ${props => props.theme.fontSizes['6xl']};
  }
  
  &:hover {
    animation: ${glitchTitle} 0.3s ease-in-out;
    text-shadow: 
      0 0 5px ${props => props.theme.colors.primary},
      0 0 10px ${props => props.theme.colors.primary},
      0 0 15px ${props => props.theme.colors.primary};
  }
`;

export const TypewriterContainer = styled.div`
  ${mixins.flexCenter};
  margin-bottom: ${props => props.theme.space[8]};
  min-height: 3rem;
  
  ${media.md} {
    min-height: 4rem;
  }
`;

export const TypewriterText = styled.span`
  ${mixins.terminalText};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.medium};
  
  ${media.md} {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
`;

export const Cursor = styled.span`
  ${mixins.terminalText};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xl};
  animation: ${props => props.$isTyping ? animations.blink : 'none'} 1s infinite;
  
  ${media.md} {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
`;

export const HeroDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.gray300};
  line-height: ${props => props.theme.lineHeights.relaxed};
  margin-bottom: ${props => props.theme.space[8]};
  animation: ${animations.fadeIn} 1s ease-out 0.8s both;
  
  ${media.md} {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[4]};
  animation: ${animations.fadeIn} 1s ease-out 1s both;
  
  ${media.sm} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${props => props.theme.space[8]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  
  div {
    width: 2px;
    height: 30px;
    background: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.borderRadius.full};
    animation: ${scrollBounce} 2s infinite;
    box-shadow: 0 0 10px ${props => props.theme.colors.primary};
  }
`;
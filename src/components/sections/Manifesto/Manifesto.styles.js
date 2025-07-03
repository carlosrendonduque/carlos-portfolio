import styled, { keyframes } from 'styled-components';
import { mixins } from '../../../styles/animations';
import { media } from '../../../styles/theme';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const quoteRotate = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const ManifestoContainer = styled.section`
  padding: ${props => props.theme.space[16]} 0;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  position: relative;
`;

export const ScrollProgress = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${props => props.$progress}%;
  height: 3px;
  background: linear-gradient(90deg, #10b981, #ef4444, #f59e0b, #8b5cf6);
  z-index: 1000;
  transition: width 0.1s ease;
`;

export const ManifestoHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.space[20]};
  animation: ${fadeInUp} 1s ease-out;
`;

export const ManifestoTitle = styled.h1`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.space[6]};
  
  background: linear-gradient(90deg, #10b981, #ef4444, #f59e0b, #8b5cf6);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s linear infinite;
  
  ${media.lg} {
    font-size: ${props => props.theme.fontSizes['6xl']};
  }
`;

export const ManifestoIntro = styled.p`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.gray300};
  line-height: ${props => props.theme.lineHeights.relaxed};
  margin-bottom: ${props => props.theme.space[8]};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const QuoteSection = styled.div`
  margin-bottom: ${props => props.theme.space[20]};
  ${mixins.flexCenter};
`;

export const QuoteContainer = styled.div`
  text-align: center;
  max-width: 800px;
  padding: ${props => props.theme.space[8]};
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid ${props => props.theme.colors.gray700};
  border-radius: ${props => props.theme.borderRadius.xl};
  position: relative;
  
  svg {
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.space[4]};
  }
`;

export const QuoteText = styled.blockquote`
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.white};
  line-height: ${props => props.theme.lineHeights.relaxed};
  margin-bottom: ${props => props.theme.space[4]};
  font-style: italic;
  animation: ${quoteRotate} 0.8s ease-out;
  
  ${media.lg} {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

export const QuoteAuthor = styled.cite`
  font-family: ${props => props.theme.fonts.mono};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.lg};
  font-style: normal;
`;

export const BridgesSection = styled.div`
  margin-bottom: ${props => props.theme.space[20]};
`;

export const BridgesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[4]};
`;

export const PhilosophySection = styled.div`
  margin-bottom: ${props => props.theme.space[20]};
`;

export const PhilosophyCard = styled.div`
  background: rgba(17, 24, 39, 0.3);
  border: 1px solid ${props => props.theme.colors.gray700};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.space[6]};
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  h3 {
    font-family: ${props => props.theme.fonts.mono};
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: ${props => props.theme.fontWeights.bold};
  }
  
  p {
    color: ${props => props.theme.colors.gray300};
    line-height: ${props => props.theme.lineHeights.relaxed};
  }
`;

export const VisionStatement = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid ${props => props.theme.colors.gray700};
  border-left: 4px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.space[8]};
  
  h3 {
    font-family: ${props => props.theme.fonts.mono};
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSizes.xl};
    margin-bottom: ${props => props.theme.space[4]};
  }
  
  p {
    color: ${props => props.theme.colors.gray300};
    line-height: ${props => props.theme.lineHeights.relaxed};
    margin-bottom: ${props => props.theme.space[4]};
    font-size: ${props => props.theme.fontSizes.lg};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const CallToAction = styled.div`
  text-align: center;
  padding: ${props => props.theme.space[12]} ${props => props.theme.space[8]};
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid ${props => props.theme.colors.gray700};
  border-radius: ${props => props.theme.borderRadius.xl};
  margin-bottom: ${props => props.theme.space[16]};
  
  h2 {
    font-size: ${props => props.theme.fontSizes['3xl']};
    color: ${props => props.theme.colors.white};
    margin-bottom: ${props => props.theme.space[4]};
  }
  
  p {
    font-size: ${props => props.theme.fontSizes.xl};
    color: ${props => props.theme.colors.gray300};
    line-height: ${props => props.theme.lineHeights.relaxed};
    margin-bottom: ${props => props.theme.space[8]};
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FloatingQuote = styled.div`
  position: fixed;
  bottom: ${props => props.theme.space[8]};
  right: ${props => props.theme.space[8]};
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.space[4]};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[3]};
  max-width: 300px;
  backdrop-filter: blur(10px);
  animation: ${float} 3s ease-in-out infinite;
  z-index: 100;
  
  svg {
    color: ${props => props.theme.colors.primary};
    flex-shrink: 0;
  }
  
  span {
    font-family: ${props => props.theme.fonts.mono};
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.sm};
    line-height: ${props => props.theme.lineHeights.tight};
  }
  
  ${media.md} {
    display: none;
  }
`;
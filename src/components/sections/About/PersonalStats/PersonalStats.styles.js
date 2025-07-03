import styled, { css, keyframes } from 'styled-components';
import { media } from '../../../../styles/theme';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StatsContainer = styled.div`
  margin-top: ${props => props.theme.space[16]};
  margin-bottom: ${props => props.theme.space[8]};
`;

export const StatsTitle = styled.h2`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.space[8]};
  text-align: center;
`;

export const StatsGrid = styled.div`
  display: grid;
  gap: ${props => props.theme.space[6]};
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-bottom: ${props => props.theme.space[12]};
  
  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Definir StatIcon ANTES de StatCard
export const StatIcon = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto ${props => props.theme.space[4]};
  background: ${props => props.$color}20;
  border: 2px solid ${props => props.$color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$color};
  transition: ${props => props.theme.transitions.base};
`;

// Ahora StatCard puede referenciar StatIcon
export const StatCard = styled.div`
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid ${props => props.theme.colors.gray700};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.space[6]};
  text-align: center;
  transition: ${props => props.theme.transitions.base};
  position: relative;
  overflow: hidden;
  
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '30px'});
  animation: ${props => props.$isVisible ? fadeInUp : 'none'} 0.8s ease-out both;
  animation-delay: ${props => props.$delay}s;
  
  &:hover {
    border-color: ${props => props.$color};
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    
    ${StatIcon} {
      animation: ${pulse} 0.6s ease-in-out;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${props => props.$color}, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

export const StatNumber = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.$color};
  line-height: 1;
  margin-bottom: ${props => props.theme.space[2]};
  
  ${media.lg} {
    font-size: ${props => props.theme.fontSizes['5xl']};
  }
`;

export const StatLabel = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.semibold};
  margin-bottom: ${props => props.theme.space[2]};
`;

export const StatDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.gray400};
  line-height: ${props => props.theme.lineHeights.relaxed};
`;

export const FunFactsSection = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid ${props => props.theme.colors.gray700};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.space[8]};
`;

export const FunFactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${props => props.theme.space[3]};
  padding: ${props => props.theme.space[4]};
  background: rgba(17, 24, 39, 0.5);
  border-radius: ${props => props.theme.borderRadius.base};
  transition: ${props => props.theme.transitions.base};
  animation: ${slideInRight} 0.6s ease-out both;
  animation-delay: ${props => props.$delay}s;
  
  &:hover {
    background: rgba(17, 24, 39, 0.8);
    transform: translateX(5px);
  }
`;

export const FunFactIcon = styled.div`
  color: ${props => props.theme.colors.primary};
  margin-top: ${props => props.theme.space[1]};
  flex-shrink: 0;
`;

export const FunFactText = styled.p`
  color: ${props => props.theme.colors.gray300};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: ${props => props.theme.lineHeights.relaxed};
`;
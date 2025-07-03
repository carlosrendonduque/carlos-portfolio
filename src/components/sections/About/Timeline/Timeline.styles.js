import styled, { css, keyframes } from 'styled-components';
import { media } from '../../../../styles/theme';

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const expandDescription = keyframes`
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 200px;
  }
`;

export const TimelineContainer = styled.div`
  margin-top: ${props => props.theme.space[16]};
  margin-bottom: ${props => props.theme.space[8]};
`;

export const TimelineTitle = styled.h2`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.space[8]};
  text-align: center;
`;

export const TimelineWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 2rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.primaryLight},
    ${props => props.theme.colors.primary}
  );
  
  ${media.md} {
    left: 50%;
    transform: translateX(-50%);
  }
`;

// Definir TimelineMarker ANTES de TimelineItem
export const TimelineMarker = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 2rem;
  height: 2rem;
  background: ${props => props.$color};
  border: 3px solid ${props => props.theme.colors.black};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.black};
  transform: translateX(-50%);
  z-index: 2;
  
  ${media.md} {
    top: 1.5rem;
  }
`;

// Ahora TimelineItem puede referenciar TimelineMarker
export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.space[8]};
  animation: ${slideInLeft} 0.8s ease-out both;
  animation-delay: ${props => props.$delay}s;
  cursor: pointer;
  
  ${media.md} {
    width: 50%;
    
    &:nth-child(even) {
      margin-left: 50%;
      
      ${TimelineMarker} {
        left: -2.5rem;
      }
    }
    
    &:nth-child(odd) {
      
      ${TimelineMarker} {
        right: -2.5rem;
      }
    }
  }
`;

export const TimelineContent = styled.div`
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid ${props => props.theme.colors.gray700};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.space[6]};
  margin-left: ${props => props.theme.space[16]};
  transition: ${props => props.theme.transitions.base};
  
  ${props => props.$isActive && css`
    border-color: ${props => props.theme.colors.primary};
    background: rgba(17, 24, 39, 0.8);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  `}
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
  
  ${media.md} {
    margin-left: 0;
  }
`;

export const TimelineDate = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.space[2]};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const TimelineItemTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.space[2]};
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

export const TimelineLocation = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[1]};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.gray400};
  margin-bottom: ${props => props.theme.space[3]};
`;

export const TimelineDescription = styled.p`
  color: ${props => props.theme.colors.gray300};
  line-height: ${props => props.theme.lineHeights.relaxed};
  font-size: ${props => props.theme.fontSizes.sm};
  
  ${props => props.$isExpanded && css`
    animation: ${expandDescription} 0.3s ease-out;
  `}
`;
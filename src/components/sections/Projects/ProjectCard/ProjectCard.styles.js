import styled, { css, keyframes } from 'styled-components';
import { mixins } from '../../../../styles/animations';
import { media } from '../../../../styles/theme';

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px rgba(16, 185, 129, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
  }
`;

export const Card = styled.div`
  ${mixins.cardBase};
  position: relative;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  overflow: hidden;
  
  ${props => props.$isHovered && css`
    transform: translateY(-8px);
    border-color: ${props => props.$primaryColor};
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 30px ${props => props.$primaryColor}40;
  `}
`;

export const ColorAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: ${props => props.$color};
  opacity: 0.8;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${props => props.theme.space[6]};
  padding-bottom: ${props => props.theme.space[4]};
`;

export const ProjectTitle = styled.h3`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.space[1]};
`;

export const ProjectSubtitle = styled.p`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.primary};
`;

export const StatusBadge = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  padding: ${props => props.theme.space[1]} ${props => props.theme.space[2]};
  border-radius: ${props => props.theme.borderRadius.base};
  border: 1px solid currentColor;
  
  ${props => {
    switch(props.$status) {
      case 'LIVE':
        return css`
          color: ${props => props.theme.colors.success};
          background: rgba(16, 185, 129, 0.1);
          animation: ${glowPulse} 2s infinite;
        `;
      case 'BETA':
        return css`
          color: ${props => props.theme.colors.warning};
          background: rgba(251, 191, 36, 0.1);
        `;
      case 'PRÓXIMAMENTE':
      case 'DESARROLLO':
        return css`
          color: ${props => props.theme.colors.info};
          background: rgba(59, 130, 246, 0.1);
        `;
      default:
        return css`
          color: ${props => props.theme.colors.gray400};
          background: rgba(156, 163, 175, 0.1);
        `;
    }
  }}
`;

export const CardContent = styled.div`
  padding: 0 ${props => props.theme.space[6]};
  flex: 1;
`;

export const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.gray300};
  line-height: ${props => props.theme.lineHeights.relaxed};
  margin-bottom: ${props => props.theme.space[4]};
`;

export const PreviewArea = styled.div`
  height: ${props => props.$isVisible ? '120px' : '0'};
  opacity: ${props => props.$isVisible ? 1 : 0};
  margin-bottom: ${props => props.$isVisible ? props.theme.space[4] : 0};
  transition: all 0.3s ease;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${props => props.theme.borderRadius.base};
  border: 1px solid ${props => props.theme.colors.gray700};
`;

export const PreviewContent = styled.div`
  padding: ${props => props.theme.space[3]};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.primary};
  height: 100%;
  overflow: auto;
  
  pre {
    margin: 0;
    white-space: pre-wrap;
  }
  
  .form-line {
    margin-bottom: ${props => props.theme.space[1]};
    
    &:last-child {
      color: ${props => props.theme.colors.gray400};
      font-style: italic;
    }
  }
  
  .poetry-line {
    margin-bottom: ${props => props.theme.space[2]};
    animation: ${slideUp} 0.5s ease-out;
    
    &:last-child {
      color: ${props => props.theme.colors.gray400};
      cursor: pointer;
      
      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
  
  .bridges-preview {
    ${mixins.flexCenter};
    height: 100%;
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.space[2]};
  margin-bottom: ${props => props.theme.space[4]};
`;

export const TechTag = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.gray400};
  background: ${props => props.theme.colors.gray800};
  padding: ${props => props.theme.space[1]} ${props => props.theme.space[2]};
  border-radius: ${props => props.theme.borderRadius.base};
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    background: ${props => props.theme.colors.gray700};
    color: ${props => props.theme.colors.primary};
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.space[6]};
  padding-top: ${props => props.theme.space[4]};
  border-top: 1px solid ${props => props.theme.colors.gray800};
`;

export const ProjectYear = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  color: ${props => props.theme.colors.gray500};
  font-size: ${props => props.theme.fontSizes.sm};
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: ${props => props.theme.space[2]};
  
  ${media.sm} {
    gap: ${props => props.theme.space[3]};
  }
`;

export const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(16, 185, 129, 0.05) 0%,
    transparent 50%,
    rgba(16, 185, 129, 0.02) 100%
  );
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: none;
`;
import styled, { css, keyframes } from 'styled-components';
import { media } from '../../../../styles/theme';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const expandContent = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
  }
`;

export const BridgeContainer = styled.div`
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid ${props => props.theme.colors.gray700};
  border-radius: ${props => props.theme.borderRadius.lg};
  margin-bottom: ${props => props.theme.space[6]};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  opacity: ${props => props.$hasAnimated ? 1 : 0};
  transform: translateX(${props => props.$hasAnimated ? '0' : '-30px'});
  animation: ${props => props.$hasAnimated ? slideIn : 'none'} 0.6s ease-out;
  
  ${props => props.$isActive && css`
    border-color: ${props.$color};
    background: rgba(17, 24, 39, 0.8);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 0 1px ${props.$color}40;
  `}
  
  &:hover {
    border-color: ${props => props.$color};
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const BridgeAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: ${props => props.$color};
  opacity: 0.8;
`;

export const BridgeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.space[6]};
`;

export const BridgeNumber = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.$color};
  min-width: 3rem;
`;

export const BridgeTitle = styled.h3`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.space[1]};
  
  ${media.lg} {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

export const BridgeSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.gray300};
  line-height: ${props => props.theme.lineHeights.snug};
`;

export const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${props => props.$color}20;
  border: 2px solid ${props => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

export const BridgeContent = styled.div`
  max-height: ${props => props.$isExpanded ? 'none' : '0'};
  opacity: ${props => props.$isExpanded ? 1 : 0};
  overflow: hidden;
  transition: all 0.3s ease;
  
  ${props => props.$isExpanded && css`
    padding: 0 ${props => props.theme.space[6]} ${props => props.theme.space[6]};
    animation: ${expandContent} 0.5s ease-out;
  `}
`;

export const BridgeDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.gray300};
  line-height: ${props => props.theme.lineHeights.relaxed};
  margin-bottom: ${props => props.theme.space[6]};
`;

export const FullDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.gray400};
  line-height: ${props => props.theme.lineHeights.relaxed};
  margin-bottom: ${props => props.theme.space[6]};
  font-style: italic;
`;

export const BridgeKeywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.space[2]};
  margin-bottom: ${props => props.theme.space[6]};
`;

export const Keyword = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.$color};
  background: ${props => props.$color}20;
  border: 1px solid ${props => props.$color};
  padding: ${props => props.theme.space[1]} ${props => props.theme.space[3]};
  border-radius: ${props => props.theme.borderRadius.full};
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    background: ${props => props.$color}40;
    transform: scale(1.05);
  }
`;

export const InteractiveArea = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${props => props.theme.borderRadius.lg};
  margin-bottom: ${props => props.theme.space[6]};
  border: 1px solid ${props => props.theme.colors.gray700};
`;

export const BridgeExamples = styled.div``;

export const ExampleItem = styled.div`
  background: ${props => props.$color}10;
  border-left: 3px solid ${props => props.$color};
  padding: ${props => props.theme.space[3]} ${props => props.theme.space[4]};
  margin-bottom: ${props => props.theme.space[2]};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.gray300};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ExpandButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[2]};
  color: ${props => props.$color};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  background: none;
  border: none;
  cursor: pointer;
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;
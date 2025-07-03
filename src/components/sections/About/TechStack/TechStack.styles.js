import styled, { css, keyframes } from 'styled-components';
import { media } from '../../../../styles/theme';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const progressFill = keyframes`
  from {
    width: 0%;
  }
`;

export const TechStackContainer = styled.div`
  margin-top: ${props => props.theme.space[8]};
`;

export const TechTitle = styled.h3`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.space[6]};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const TechCategories = styled.div`
  display: flex;
  gap: ${props => props.theme.space[2]};
  margin-bottom: ${props => props.theme.space[6]};
  flex-wrap: wrap;
`;

export const CategoryTab = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[2]};
  padding: ${props => props.theme.space[2]} ${props => props.theme.space[4]};
  border-radius: ${props => props.theme.borderRadius.base};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  transition: ${props => props.theme.transitions.base};
  
  ${props => props.$isActive ? css`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.black};
    border: 1px solid ${props => props.theme.colors.primary};
  ` : css`
    background: transparent;
    color: ${props => props.theme.colors.gray400};
    border: 1px solid ${props => props.theme.colors.gray700};
    
    &:hover {
      color: ${props => props.theme.colors.white};
      border-color: ${props => props.theme.colors.primary};
    }
  `}
  
  .icon {
    font-size: 1rem;
  }
`;

export const TechGrid = styled.div`
  display: grid;
  gap: ${props => props.theme.space[4]};
  grid-template-columns: 1fr;
  
  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TechItem = styled.div`
  background: rgba(17, 24, 39, 0.3);
  border: 1px solid ${props => props.theme.colors.gray700};
  border-radius: ${props => props.theme.borderRadius.base};
  padding: ${props => props.theme.space[4]};
  transition: ${props => props.theme.transitions.base};
  animation: ${fadeInUp} 0.6s ease-out both;
  animation-delay: ${props => props.$delay}s;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
  
  .tech-header {
    display: flex;
    align-items: center;
    gap: ${props => props.theme.space[3]};
    margin-bottom: ${props => props.theme.space[3]};
  }
`;

export const TechIcon = styled.div`
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 185, 129, 0.1);
  border-radius: ${props => props.theme.borderRadius.base};
`;

export const TechName = styled.div`
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.base};
`;

export const TechExperience = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.gray400};
`;

export const SkillBar = styled.div`
  width: 100%;
  height: 4px;
  background: ${props => props.theme.colors.gray700};
  border-radius: ${props => props.theme.borderRadius.full};
  overflow: hidden;
`;

export const SkillProgress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.primaryLight});
  border-radius: ${props => props.theme.borderRadius.full};
  width: ${props => props.$experience}%;
  animation: ${progressFill} 1.5s ease-out both;
  animation-delay: ${props => props.$delay + 0.5}s;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.theme.colors.white};
    border-radius: 50%;
    box-shadow: 0 0 6px ${props => props.theme.colors.primary};
  }
`;
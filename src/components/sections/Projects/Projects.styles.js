import styled, { css, keyframes } from 'styled-components';
import { mixins } from '../../../styles/animations';
import { media } from '../../../styles/theme';

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

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
`;

export const ProjectsContainer = styled.section`
  padding: ${props => props.theme.space[16]} 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const ProjectsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${props => props.theme.space[12]};
  gap: ${props => props.theme.space[8]};
  
  ${media.md} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProjectsTitle = styled.h1`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.space[4]};
  
  ${media.lg} {
    font-size: ${props => props.theme.fontSizes['5xl']};
  }
`;

export const ProjectsDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.gray300};
  line-height: ${props => props.theme.lineHeights.relaxed};
  max-width: 600px;
  
  ${media.xl} {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const ProjectsStats = styled.div`
  display: flex;
  gap: ${props => props.theme.space[6]};
  
  ${media.md} {
    margin-top: ${props => props.theme.space[6]};
  }
`;

export const StatsItem = styled.div`
  text-align: center;
  
  .number {
    display: block;
    font-family: ${props => props.theme.fonts.mono};
    font-size: ${props => props.theme.fontSizes['2xl']};
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.primary};
    line-height: 1;
  }
  
  .label {
    display: block;
    font-family: ${props => props.theme.fonts.mono};
    font-size: ${props => props.theme.fontSizes.xs};
    color: ${props => props.theme.colors.gray400};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: ${props => props.theme.space[1]};
  }
`;

export const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.space[8]};
  gap: ${props => props.theme.space[4]};
  
  ${media.lg} {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const CategoryFilters = styled.div`
  display: flex;
  gap: ${props => props.theme.space[2]};
  flex-wrap: wrap;
  
  ${media.lg} {
    justify-content: center;
    margin-bottom: ${props => props.theme.space[4]};
  }
`;

export const CategoryButton = styled.button`
  ${mixins.flexCenter};
  gap: ${props => props.theme.space[2]};
  padding: ${props => props.theme.space[3]} ${props => props.theme.space[4]};
  border-radius: ${props => props.theme.borderRadius.lg};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  transition: ${props => props.theme.transitions.base};
  position: relative;
  overflow: hidden;
  
  ${props => props.$isActive ? css`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.black};
    box-shadow: ${props => props.theme.shadows.glow};
  ` : css`
    background: transparent;
    color: ${props => props.theme.colors.gray400};
    border: 1px solid ${props => props.theme.colors.gray700};
    
    &:hover {
      color: ${props => props.theme.colors.white};
      border-color: ${props => props.theme.colors.primary};
      background: rgba(16, 185, 129, 0.1);
    }
  `}
  
  .icon {
    font-size: ${props => props.theme.fontSizes.lg};
  }
  
  .name {
    font-weight: ${props => props.theme.fontWeights.medium};
  }
  
  .count {
    background: ${props => props.$isActive 
      ? 'rgba(0, 0, 0, 0.2)' 
      : 'rgba(16, 185, 129, 0.2)'
    };
    color: ${props => props.$isActive 
      ? props.theme.colors.black 
      : props.theme.colors.primary
    };
    padding: ${props => props.theme.space[1]} ${props => props.theme.space[2]};
    border-radius: ${props => props.theme.borderRadius.full};
    font-size: ${props => props.theme.fontSizes.xs};
    min-width: 20px;
  }
`;

export const ViewToggle = styled.div`
  display: flex;
  gap: ${props => props.theme.space[2]};
  background: ${props => props.theme.colors.gray800};
  padding: ${props => props.theme.space[1]};
  border-radius: ${props => props.theme.borderRadius.lg};
`;

export const ProjectsGrid = styled.div`
  display: grid;
  gap: ${props => props.theme.space[6]};
  
  ${props => props.$viewMode === 'grid' ? css`
    grid-template-columns: 1fr;
    
    ${media.md} {
      grid-template-columns: repeat(2, 1fr);
    }
    
    ${media.xl} {
      grid-template-columns: repeat(3, 1fr);
    }
  ` : css`
    grid-template-columns: 1fr;
    gap: ${props => props.theme.space[4]};
  `}
  
  > * {
    animation: ${fadeInUp} 0.6s ease-out both;
  }
`;

export const LoadingState = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: ${props => props.theme.space[16]} ${props => props.theme.space[8]};
  
  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid ${props => props.theme.colors.gray700};
    border-top: 3px solid ${props => props.theme.colors.primary};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
    margin-bottom: ${props => props.theme.space[4]};
  }
  
  p {
    color: ${props => props.theme.colors.gray400};
    font-family: ${props => props.theme.fonts.mono};
  }
`;

export const EmptyState = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: ${props => props.theme.space[16]} ${props => props.theme.space[8]};
  text-align: center;
  
  svg {
    color: ${props => props.theme.colors.gray600};
    margin-bottom: ${props => props.theme.space[4]};
  }
  
  h3 {
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes['2xl']};
    margin-bottom: ${props => props.theme.space[2]};
  }
  
  p {
    color: ${props => props.theme.colors.gray400};
    margin-bottom: ${props => props.theme.space[6]};
    max-width: 400px;
  }
`;
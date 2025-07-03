import styled, { css } from 'styled-components';
import { mixins } from '../../../styles/animations';

const buttonVariants = {
  primary: css`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.black};
    border: 1px solid ${props => props.theme.colors.primary};
    
    &:hover:not(:disabled) {
      background: ${props => props.theme.colors.primaryLight};
      box-shadow: ${props => props.theme.shadows.glow};
      transform: translateY(-2px);
    }
  `,
  
  secondary: css`
    background: transparent;
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    
    &:hover:not(:disabled) {
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.black};
      box-shadow: ${props => props.theme.shadows.glow};
    }
  `,
  
  ghost: css`
    background: transparent;
    color: ${props => props.theme.colors.white};
    border: 1px solid transparent;
    
    &:hover:not(:disabled) {
      color: ${props => props.theme.colors.primary};
      background: rgba(16, 185, 129, 0.1);
    }
  `
};

const buttonSizes = {
  small: css`
    padding: ${props => props.theme.space[2]} ${props => props.theme.space[4]};
    font-size: ${props => props.theme.fontSizes.sm};
  `,
  
  medium: css`
    padding: ${props => props.theme.space[3]} ${props => props.theme.space[6]};
    font-size: ${props => props.theme.fontSizes.base};
  `,
  
  large: css`
    padding: ${props => props.theme.space[4]} ${props => props.theme.space[8]};
    font-size: ${props => props.theme.fontSizes.lg};
  `
};

export const StyledButton = styled.button`
  ${mixins.flexCenter};
  font-family: ${props => props.theme.fonts.mono};
  font-weight: ${props => props.theme.fontWeights.bold};
  border-radius: ${props => props.theme.borderRadius.base};
  transition: ${props => props.theme.transitions.base};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  ${props => buttonVariants[props.$variant]};
  ${props => buttonSizes[props.$size]};
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export const ButtonContent = styled.span`
  ${mixins.flexCenter};
  gap: ${props => props.theme.space[2]};
`;

export const ButtonIcon = styled.span`
  ${mixins.flexCenter};
  
  ${props => props.$position === 'left' && css`
    margin-right: ${props => props.theme.space[2]};
    margin-left: -${props => props.theme.space[1]};
  `}
  
  ${props => props.$position === 'right' && css`
    margin-left: ${props => props.theme.space[2]};
    margin-right: -${props => props.theme.space[1]};
  `}
`;
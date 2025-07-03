import styled, { css } from 'styled-components';
import { mixins, animations } from '../../../styles/animations';
import { media } from '../../../styles/theme';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${props => props.theme.colors.gray800};
  z-index: ${props => props.theme.zIndex.sticky};
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    background: rgba(0, 0, 0, 0.95);
  }
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.space[4]} ${props => props.theme.space[6]};
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.button`
  ${mixins.terminalText};
  font-family: ${props => props.theme.fonts.mono};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.lg};
  transition: ${props => props.theme.transitions.base};
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.primaryLight};
    text-shadow: 0 0 15px rgba(16, 185, 129, 0.8);
    animation: ${animations.glitch} 0.3s ease-in-out;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[8]};
  
  ${media.md} {
    gap: ${props => props.theme.space[6]};
  }
`;

export const NavLink = styled.button`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: ${props => props.theme.transitions.base};
  position: relative;
  padding: ${props => props.theme.space[2]} 0;
  
  color: ${props => props.$active 
    ? props.theme.colors.primary 
    : props.theme.colors.gray400
  };
  
  &:hover {
    color: ${props => props.theme.colors.white};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.transitions.base};
  }
  
  &:hover::after {
    width: 100%;
  }
`;

export const LanguageToggle = styled.button`
  ${mixins.flexCenter};
  gap: ${props => props.theme.space[2]};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.gray400};
  transition: ${props => props.theme.transitions.base};
  padding: ${props => props.theme.space[2]};
  border-radius: ${props => props.theme.borderRadius.base};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    background: rgba(16, 185, 129, 0.1);
  }
`;
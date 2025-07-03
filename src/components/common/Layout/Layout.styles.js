import styled from 'styled-components';
import { media } from '../../../styles/theme';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  padding-top: 5rem; /* Account for fixed navigation */
  padding-left: ${props => props.theme.space[6]};
  padding-right: ${props => props.theme.space[6]};
  
  ${media.lg} {
    padding-left: ${props => props.theme.space[8]};
    padding-right: ${props => props.theme.space[8]};
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid ${props => props.theme.colors.gray800};
  margin-top: ${props => props.theme.space[20]};
  padding: ${props => props.theme.space[8]} ${props => props.theme.space[6]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${media.md} {
    flex-direction: row;
  }
  
  flex-direction: column;
  gap: ${props => props.theme.space[4]};
`;

export const FooterText = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  color: ${props => props.theme.colors.gray500};
  font-size: ${props => props.theme.fontSizes.sm};
`;
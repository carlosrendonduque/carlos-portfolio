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

export const AboutContainer = styled.section`
  padding: ${props => props.theme.space[16]} 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const AboutHeader = styled.div`
  margin-bottom: ${props => props.theme.space[16]};
  animation: ${fadeInUp} 1s ease-out;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.space[8]};
  text-align: center;
  
  ${media.lg} {
    flex-direction: row;
    text-align: left;
    gap: ${props => props.theme.space[12]};
  }
`;

export const AvatarContainer = styled.div`
  flex-shrink: 0;
`;

export const ProfileInfo = styled.div`
  flex: 1;
`;

export const ProfileTitle = styled.h1`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.space[4]};
  
  ${media.lg} {
    font-size: ${props => props.theme.fontSizes['5xl']};
  }
`;

export const ProfileTagline = styled.p`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.gray300};
  line-height: ${props => props.theme.lineHeights.relaxed};
  margin-bottom: ${props => props.theme.space[6]};
  
  ${media.lg} {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
`;

export const QuickFacts = styled.div`
  display: grid;
  gap: ${props => props.theme.space[3]};
  
  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[3]};
  padding: ${props => props.theme.space[3]};
  background: rgba(17, 24, 39, 0.3);
  border-radius: ${props => props.theme.borderRadius.base};
  border: 1px solid ${props => props.theme.colors.gray700};
  transition: ${props => props.theme.transitions.base};
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    background: rgba(17, 24, 39, 0.5);
  }
`;

export const FactIcon = styled.div`
  color: ${props => props.theme.colors.primary};
  flex-shrink: 0;
`;

export const FactText = styled.span`
  color: ${props => props.theme.colors.gray300};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: ${props => props.theme.lineHeights.snug};
`;

export const MainContent = styled.div`
  animation: ${slideInLeft} 1s ease-out 0.3s both;
`;

export const ContentGrid = styled.div`
  display: grid;
  gap: ${props => props.theme.space[12]};
  margin-bottom: ${props => props.theme.space[16]};
  
  ${media.lg} {
    grid-template-columns: 2fr 1fr;
    gap: ${props => props.theme.space[16]};
  }
`;

export const ContentSection = styled.div``;

export const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.space[6]};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const ProfileDescription = styled.p`
  color: ${props => props.theme.colors.gray300};
  line-height: ${props => props.theme.lineHeights.relaxed};
  margin-bottom: ${props => props.theme.space[6]};
  font-size: ${props => props.theme.fontSizes.base};
`;

export const ContactGrid = styled.div`
  display: grid;
  gap: ${props => props.theme.space[4]};
  margin-bottom: ${props => props.theme.space[8]};
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[4]};
  padding: ${props => props.theme.space[4]};
  background: rgba(17, 24, 39, 0.3);
  border: 1px solid ${props => props.theme.colors.gray700};
  border-radius: ${props => props.theme.borderRadius.base};
  transition: ${props => props.theme.transitions.base};
  cursor: ${props => props.$isClickable ? 'pointer' : 'default'};
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    background: rgba(17, 24, 39, 0.5);
    transform: ${props => props.$isClickable ? 'translateX(5px)' : 'none'};
  }
`;

export const ContactIcon = styled.div`
  color: ${props => props.theme.colors.primary};
  flex-shrink: 0;
`;

export const ContactInfo = styled.div`
  flex: 1;
`;

export const ContactLabel = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.gray400};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: ${props => props.theme.space[1]};
`;

export const ContactValue = styled.div`
  color: ${props => props.$isActive ? props.theme.colors.white : props.theme.colors.gray300};
  font-size: ${props => props.theme.fontSizes.base};
  transition: ${props => props.theme.transitions.base};
`;

export const CollaborationBox = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid ${props => props.theme.colors.gray700};
  border-left: 4px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.space[6]};
`;

export const CollaborationTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[2]};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.space[4]};
`;

export const CollaborationText = styled.p`
  color: ${props => props.theme.colors.gray300};
  line-height: ${props => props.theme.lineHeights.relaxed};
  font-size: ${props => props.theme.fontSizes.sm};
`;
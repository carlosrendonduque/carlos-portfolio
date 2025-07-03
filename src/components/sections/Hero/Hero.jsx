import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import { useTypewriter } from '../../../hooks/useTypewriter';
import { Button } from '../../common';
import FloatingParticles from '../../ui/FloatingParticles/FloatingParticles';
import BridgeConnections from '../../ui/BridgeConnections/BridgeConnections';
import {
  HeroContainer,
  HeroContent,
  TerminalPrompt,
  HeroTitle,
  TypewriterContainer,
  TypewriterText,
  Cursor,
  HeroDescription,
  ButtonGroup,
  ScrollIndicator,
  BackgroundEffects
} from './Hero.styles';

const Hero = ({ onNavigate }) => {
  const { t } = useTranslation();
  const { displayedText, isTyping } = useTypewriter(t('hero.tagline'), 80, 1000);

  return (
    <HeroContainer>
      <BackgroundEffects>
        <BridgeConnections />
        <FloatingParticles count={20} /> {/* Reducido de 40 a 20 */}
      </BackgroundEffects>
      
      <HeroContent>
        <TerminalPrompt>
          {t('hero.whoami')}
        </TerminalPrompt>
        
        <HeroTitle>
          {t('hero.name')}
        </HeroTitle>
        
        <TypewriterContainer>
          <TypewriterText>
            {displayedText}
          </TypewriterText>
          <Cursor $isTyping={isTyping}>_</Cursor>
        </TypewriterContainer>
        
        <HeroDescription>
          {t('hero.description')}
        </HeroDescription>
        
        <ButtonGroup>
          <Button
            variant="primary"
            size="large"
            icon={<ArrowRight size={20} />}
            onClick={() => onNavigate('laboratory')}
          >
            {t('hero.exploreButton')}
          </Button>
          
          <Button
            variant="secondary"
            size="large"
            onClick={() => onNavigate('manifesto')}
          >
            {t('hero.bridgesButton')}
          </Button>
        </ButtonGroup>
      </HeroContent>
      
      <ScrollIndicator>
        <div />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;
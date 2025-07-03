import React from 'react';
import Navigation from '../Navigation/Navigation';
import { LayoutContainer, Main, Footer, FooterText } from './Layout.styles';
import { useTranslation } from '../../../hooks/useTranslation';

const Layout = ({ children, currentSection, onSectionChange }) => {
  const { t } = useTranslation();
  
  return (
    <LayoutContainer>
      <Navigation 
        currentSection={currentSection}
        onSectionChange={onSectionChange}
      />
      
      <Main>
        {children}
      </Main>
      
      <Footer>
        <FooterText>
          $ echo "2024 - Carlos Rendón"
        </FooterText>
        <FooterText>
          construyendo_puentes_narrativos.exe
        </FooterText>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;
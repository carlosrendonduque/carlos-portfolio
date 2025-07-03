import React from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import {
  Nav,
  NavContainer,
  NavContent,
  Logo,
  NavLinks,
  NavLink,
  LanguageToggle
} from './Navigation.styles';

const Navigation = ({ currentSection, onSectionChange }) => {
  const { t, changeLanguage, currentLanguage } = useTranslation();
  
  const navItems = [
    { key: 'home', label: t('navigation.home') },
    { key: 'laboratory', label: t('navigation.laboratory') },
    { key: 'manifesto', label: t('navigation.manifesto') },
    { key: 'about', label: t('navigation.about') }
  ];

  const toggleLanguage = () => {
    changeLanguage(currentLanguage === 'es' ? 'en' : 'es');
  };

  return (
    <Nav>
      <NavContainer>
        <NavContent>
          <Logo onClick={() => onSectionChange('home')}>
            CARLOS_RENDÓN
          </Logo>
          
          <NavLinks>
            {navItems.map(({ key, label }) => (
              <NavLink
                key={key}
                $active={currentSection === key}
                onClick={() => onSectionChange(key)}
              >
                {label}
              </NavLink>
            ))}
            
            <LanguageToggle onClick={toggleLanguage}>
              <Globe size={16} />
              {currentLanguage.toUpperCase()}
            </LanguageToggle>
          </NavLinks>
        </NavContent>
      </NavContainer>
    </Nav>
  );
};

export default Navigation;
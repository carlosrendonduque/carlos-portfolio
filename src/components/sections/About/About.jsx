import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Calendar, Award, Coffee, Code, Heart } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import { Button } from '../../common';
import Avatar from '../../ui/Avatar/Avatar';
import TechStack from './TechStack/TechStack';
import Timeline from './Timeline/Timeline';
import PersonalStats from './PersonalStats/PersonalStats';
import {
  AboutContainer,
  AboutHeader,
  ProfileSection,
  AvatarContainer,
  ProfileInfo,
  ProfileTitle,
  ProfileTagline,
  ProfileDescription,
  ContactGrid,
  ContactItem,
  ContactIcon,
  ContactInfo,
  ContactLabel,
  ContactValue,
  MainContent,
  ContentGrid,
  ContentSection,
  SectionTitle,
  CollaborationBox,
  CollaborationTitle,
  CollaborationText,
  QuickFacts,
  FactItem,
  FactIcon,
  FactText
} from './About.styles';

const About = () => {
  const { t, changeLanguage, currentLanguage } = useTranslation();
  const [activeTimelineItem, setActiveTimelineItem] = useState(null);

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'carlos.rendon.duque@gmail.com',
      link: 'mailto:carlos.rendon.duque@gmail.com',
      copyable: true
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: '/in/carlosrendonduque',
      link: 'https://linkedin.com/in/carlosrendonduque',
      copyable: false
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'Coming soon...',
      link: null,
      copyable: false
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Brisbane, Queensland, Australia',
      link: null,
      copyable: false
    }
  ];

  const quickFacts = [
    {
      icon: <Code size={20} />,
      text: '8+ años desarrollando soluciones tecnológicas'
    },
    {
      icon: <Award size={20} />,
      text: 'Maestría en Creative Writing & Digital Narratives'
    },
    {
      icon: <Heart size={20} />,
      text: 'Especialista en narrativas interactivas y IA'
    },
    {
      icon: <Coffee size={20} />,
      text: 'Del bypass a ecosistemas narrativos vivos'
    }
  ];

  const handleCopyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // Aquí podrías agregar una notificación toast
      console.log('Copiado al portapapeles:', text);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <AboutContainer>
      <AboutHeader>
        <ProfileSection>
          <AvatarContainer>
            <Avatar size={200} showAnimation={true} />
          </AvatarContainer>
          
          <ProfileInfo>
            <ProfileTitle>ABOUT</ProfileTitle>
            <ProfileTagline>
              Del bypass a un ecosistema narrativo vivo que conecta historias, cuerpos y futuros.
            </ProfileTagline>
            
            <QuickFacts>
              {quickFacts.map((fact, index) => (
                <FactItem key={index}>
                  <FactIcon>{fact.icon}</FactIcon>
                  <FactText>{fact.text}</FactText>
                </FactItem>
              ))}
            </QuickFacts>
          </ProfileInfo>
        </ProfileSection>
      </AboutHeader>

      <MainContent>
        <ContentGrid>
          <ContentSection>
            <SectionTitle>BACKGROUND</SectionTitle>
            <ProfileDescription>
              Salesforce OmniStudio Engineer con más de 8 años de experiencia, actualmente 
              completando una Maestría en Creative Writing y Digital Narratives. Mi trabajo 
              explora la intersección entre tecnología y narrativa, con especial interés en 
              la aplicación de IA en storytelling e interactive media.
            </ProfileDescription>
            
            <ProfileDescription>
              Mi journey comenzó en Medellín, Colombia, y me ha llevado hasta Brisbane, Australia. 
              Esta experiencia migratoria no solo cambió mi geografía, sino que transformó 
              profundamente mi perspectiva sobre la identidad, el lenguaje y la tecnología 
              como puentes entre mundos.
            </ProfileDescription>

            <TechStack />
          </ContentSection>

          <ContentSection>
            <SectionTitle>CONTACTO</SectionTitle>
            <ContactGrid>
              {contactInfo.map((contact, index) => (
                <ContactItem 
                  key={index}
                  $isClickable={contact.link || contact.copyable}
                  onClick={() => {
                    if (contact.copyable) {
                      handleCopyToClipboard(contact.value);
                    } else if (contact.link) {
                      window.open(contact.link, '_blank');
                    }
                  }}
                >
                  <ContactIcon>{contact.icon}</ContactIcon>
                  <ContactInfo>
                    <ContactLabel>{contact.label}</ContactLabel>
                    <ContactValue $isActive={contact.link || contact.copyable}>
                      {contact.value}
                    </ContactValue>
                  </ContactInfo>
                </ContactItem>
              ))}
            </ContactGrid>

            <CollaborationBox>
              <CollaborationTitle>
                <Code size={16} />
                // Colaboraciones y proyectos
              </CollaborationTitle>
              <CollaborationText>
                Abierto a colaboraciones en narrativas digitales, proyectos transmedia 
                y exploración de nuevas formas de storytelling interactivo. 
                Si tienes una idea que desafía los límites entre tecnología y humanidad, 
                hablemos.
              </CollaborationText>
              
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                marginTop: '1.5rem',
                flexWrap: 'wrap'
              }}>
                <Button
                  variant="primary"
                  icon={<Mail size={16} />}
                  onClick={() => window.location.href = 'mailto:carlos.rendon.duque@gmail.com'}
                >
                  Iniciar Conversación
                </Button>
                
                <Button
                  variant="secondary"
                  icon={<Calendar size={16} />}
                  onClick={() => window.open('https://calendly.com/carlosrendon', '_blank')}
                >
                  Agendar Call
                </Button>
              </div>
            </CollaborationBox>
          </ContentSection>
        </ContentGrid>

        <Timeline 
          activeItem={activeTimelineItem}
          onItemSelect={setActiveTimelineItem}
        />

        <PersonalStats />
      </MainContent>
    </AboutContainer>
  );
};

export default About;
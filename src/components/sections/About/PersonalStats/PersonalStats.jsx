import React, { useState, useEffect } from 'react';
import { Coffee, Code, Globe, Heart, Calendar, Zap, MapPin, Star } from 'lucide-react';
import {
  StatsContainer,
  StatsTitle,
  StatsGrid,
  StatCard,
  StatIcon,
  StatNumber,
  StatLabel,
  StatDescription,
  FunFactsSection,
  FunFactItem,
  FunFactIcon,
  FunFactText
} from './PersonalStats.styles';

const PersonalStats = () => {
  const [animatedStats, setAnimatedStats] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      id: 'experience',
      icon: <Code size={24} />,
      number: 8,
      suffix: '+',
      label: 'Años Programando',
      description: 'Desde JavaScript vanilla hasta ecosistemas complejos',
      color: '#10b981'
    },
    {
      id: 'projects',
      icon: <Zap size={24} />,
      number: 150,
      suffix: '+',
      label: 'Proyectos Entregados',
      description: 'Entre Salesforce, web development y narrativas digitales',
      color: '#f59e0b'
    },
    {
      id: 'countries',
      icon: <Globe size={24} />,
      number: 2,
      suffix: '',
      label: 'Países',
      description: 'Colombia → Australia: el journey que cambió todo',
      color: '#ef4444'
    },
    {
      id: 'coffee',
      icon: <Coffee size={24} />,
      number: 2847,
      suffix: '+',
      label: 'Cafés Tomados',
      description: 'Combustible principal para la creatividad y el código',
      color: '#8b5cf6'
    },
    {
      id: 'languages',
      icon: <Heart size={24} />,
      number: 2,
      suffix: '',
      label: 'Idiomas',
      description: 'Español nativo, English fluent, Code universal',
      color: '#3b82f6'
    },
    {
      id: 'certifications',
      icon: <Star size={24} />,
      number: 12,
      suffix: '+',
      label: 'Certificaciones',
      description: 'Salesforce, Cloud, y otras tecnologías',
      color: '#06b6d4'
    }
  ];

  const funFacts = [
    {
      icon: <MapPin size={16} />,
      text: 'Nací en Medellín, ciudad de la eterna primavera y cuna de grandes innovadores'
    },
    {
      icon: <Coffee size={16} />,
      text: 'Mi setup perfecto: café colombiano + música instrumental + código limpio'
    },
    {
      icon: <Code size={16} />,
      text: 'Mi primer "Hello World" fue en Python, pero mi corazón se quedó con JavaScript'
    },
    {
      icon: <Globe size={16} />,
      text: 'Brisbane me enseñó que el mejor código surge cuando sales de tu zona de comfort'
    },
    {
      icon: <Heart size={16} />,
      text: 'Creo que la tecnología debe amplificar la humanidad, no reemplazarla'
    },
    {
      icon: <Zap size={16} />,
      text: 'Fragmentado nació de una pesadilla sobre IA controlando humanos'
    }
  ];

  // Efecto de scroll para activar animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('personal-stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Animar números cuando se hace visible
  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat) => {
      let start = 0;
      const increment = stat.number / 50; // 50 pasos para la animación
      const timer = setInterval(() => {
        start += increment;
        if (start >= stat.number) {
          start = stat.number;
          clearInterval(timer);
        }
        setAnimatedStats(prev => ({
          ...prev,
          [stat.id]: Math.floor(start)
        }));
      }, 30);
    });
  }, [isVisible]);

  return (
    <StatsContainer id="personal-stats">
      <StatsTitle>DATOS_PERSONALES</StatsTitle>
      
      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard 
            key={stat.id} 
            $color={stat.color}
            $delay={index * 0.1}
            $isVisible={isVisible}
          >
            <StatIcon $color={stat.color}>
              {stat.icon}
            </StatIcon>
            
            <StatNumber $color={stat.color}>
              {animatedStats[stat.id] || 0}{stat.suffix}
            </StatNumber>
            
            <StatLabel>{stat.label}</StatLabel>
            
            <StatDescription>{stat.description}</StatDescription>
          </StatCard>
        ))}
      </StatsGrid>

      <FunFactsSection>
        <h3 style={{ 
          fontFamily: 'monospace', 
          color: '#10b981', 
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          // Fun Facts
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1rem' 
        }}>
          {funFacts.map((fact, index) => (
            <FunFactItem key={index} $delay={index * 0.1}>
              <FunFactIcon>{fact.icon}</FunFactIcon>
              <FunFactText>{fact.text}</FunFactText>
            </FunFactItem>
          ))}
        </div>
      </FunFactsSection>
    </StatsContainer>
  );
};

export default PersonalStats;
import React, { useState, useEffect } from 'react';
import { Quote, ArrowDown, Sparkles } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import { Button } from '../../common';
import BridgeCard from './BridgeCard/BridgeCard';
import { bridgesData, manifestoQuotes } from '../../../utils/bridgesData';
import {
  ManifestoContainer,
  ManifestoHeader,
  ManifestoTitle,
  ManifestoIntro,
  QuoteSection,
  QuoteContainer,
  QuoteText,
  QuoteAuthor,
  BridgesSection,
  BridgesGrid,
  PhilosophySection,
  PhilosophyCard,
  VisionStatement,
  CallToAction,
  FloatingQuote,
  ScrollProgress
} from './Manifesto.styles';

const Manifesto = () => {
  const { t } = useTranslation();
  const [activeBridge, setActiveBridge] = useState(null);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const bridges = Object.values(bridgesData);

  // Rotar citas cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % manifestoQuotes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Tracking de scroll para la barra de progreso
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBridgeToggle = (bridgeId) => {
    setActiveBridge(activeBridge === bridgeId ? null : bridgeId);
  };

  const expandAllBridges = () => {
    if (activeBridge) {
      setActiveBridge(null);
    } else {
      // Expandir uno por uno con delay
      bridges.forEach((bridge, index) => {
        setTimeout(() => {
          setActiveBridge(bridge.id);
        }, index * 500);
      });
    }
  };

  return (
    <ManifestoContainer>
      <ScrollProgress $progress={scrollProgress} />
      
      <ManifestoHeader>
        <ManifestoTitle>
          LOS_4_PUENTES
        </ManifestoTitle>
        
        <ManifestoIntro>
          Manifiesto creativo donde cada puente conecta mundos que parecían separados. 
          La filosofía detrás de crear, conectar, transformar y expandir como visión del mundo.
        </ManifestoIntro>

        <Button
          variant="secondary"
          icon={<ArrowDown size={20} />}
          onClick={() => document.getElementById('bridges-section').scrollIntoView({ behavior: 'smooth' })}
        >
          Explorar Filosofía
        </Button>
      </ManifestoHeader>

      <QuoteSection>
        <QuoteContainer>
          <Quote size={32} />
          <QuoteText key={currentQuote}>
            {manifestoQuotes[currentQuote]}
          </QuoteText>
          <QuoteAuthor>— Carlos Rendón</QuoteAuthor>
        </QuoteContainer>
      </QuoteSection>

      <BridgesSection id="bridges-section">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '3rem' 
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontFamily: 'monospace', 
            color: '#ffffff',
            margin: 0
          }}>
            // Los Cuatro Puentes
          </h2>
          
          <Button
            variant="ghost"
            size="small"
            icon={<Sparkles size={16} />}
            onClick={expandAllBridges}
          >
            {activeBridge ? 'Colapsar Todo' : 'Expandir Todo'}
          </Button>
        </div>

        <BridgesGrid>
          {bridges.map((bridge, index) => (
            <BridgeCard
              key={bridge.id}
              bridge={bridge}
              isActive={activeBridge === bridge.id}
              onToggle={() => handleBridgeToggle(bridge.id)}
              delay={index * 200}
            />
          ))}
        </BridgesGrid>
      </BridgesSection>

      <PhilosophySection>
        <h2 style={{ 
          fontSize: '2rem', 
          fontFamily: 'monospace', 
          color: '#ffffff',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          // Filosofía en Acción
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          <PhilosophyCard>
            <h3 style={{ color: '#10b981', marginBottom: '1rem' }}>Intersección</h3>
            <p>
              En la intersección de la inteligencia artificial, las narrativas expandidas 
              y la interactividad, construimos puentes hacia futuros posibles.
            </p>
          </PhilosophyCard>

          <PhilosophyCard>
            <h3 style={{ color: '#ef4444', marginBottom: '1rem' }}>Amplificación</h3>
            <p>
              Cada proyecto es una exploración de cómo la tecnología puede amplificar 
              la experiencia humana sin reemplazarla.
            </p>
          </PhilosophyCard>

          <PhilosophyCard>
            <h3 style={{ color: '#f59e0b', marginBottom: '1rem' }}>Resistencia</h3>
            <p>
              Los puentes no son solo conexiones: son actos de resistencia contra 
              la fragmentación del mundo digital.
            </p>
          </PhilosophyCard>
        </div>

        <VisionStatement>
          <h3>$ echo "visión_del_futuro"</h3>
          <p>
            En un mundo donde la tecnología amenaza con fragmentar la experiencia humana, 
            construimos puentes. No cables, no conexiones mecánicas: puentes vivos que 
            respiran, que evolucionan, que transforman tanto el origen como el destino.
          </p>
          <p>
            Cada línea de código es un verso. Cada interacción es una conversación. 
            Cada proyecto es una invitación a imaginar futuros donde la humanidad 
            y la tecnología dansen juntas, sin que una devore a la otra.
          </p>
        </VisionStatement>
      </PhilosophySection>

      <CallToAction>
        <h2>¿Construimos un puente juntos?</h2>
        <p>
          Si estas ideas resuenan contigo, si ves posibilidades donde otros ven problemas, 
          conversemos. Los mejores puentes se construyen en colaboración.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button
            variant="primary"
            size="large"
            onClick={() => window.location.href = 'mailto:carlos.rendon.duque@gmail.com'}
          >
            Iniciar Conversación
          </Button>
          
          <Button
            variant="secondary"
            size="large"
            onClick={() => window.open('https://linkedin.com/in/carlosrendonduque', '_blank')}
          >
            Conectar en LinkedIn
          </Button>
        </div>
      </CallToAction>

      <FloatingQuote>
        <Quote size={24} />
        <span>"Construyo puentes donde otros ven abismos"</span>
      </FloatingQuote>
    </ManifestoContainer>
  );
};

export default Manifesto;
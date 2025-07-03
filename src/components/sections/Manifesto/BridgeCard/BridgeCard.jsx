import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Network, RotateCcw, Sprout } from 'lucide-react';
import { Button } from '../../../common';
import {
  BridgeContainer,
  BridgeHeader,
  BridgeNumber,
  BridgeTitle,
  BridgeSubtitle,
  BridgeContent,
  BridgeDescription,
  BridgeKeywords,
  Keyword,
  BridgeExamples,
  ExampleItem,
  InteractiveArea,
  ExpandButton,
  BridgeAccent,
  IconContainer,
  FullDescription
} from './BridgeCard.styles';

const BridgeCard = ({ bridge, isActive, onToggle, delay = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  const getIcon = (bridgeId) => {
    const icons = {
      crear: <Code size={24} />,
      conectar: <Network size={24} />,
      transformar: <RotateCcw size={24} />,
      expandir: <Sprout size={24} />
    };
    return icons[bridgeId] || <Code size={24} />;
  };

  const renderInteractiveElement = () => {
    switch (bridge.interactiveElement.type) {
      case 'code-generation':
        return (
          <pre style={{ 
            fontFamily: 'monospace', 
            fontSize: '0.875rem',
            color: bridge.color,
            background: 'rgba(0,0,0,0.3)',
            padding: '1rem',
            borderRadius: '0.5rem',
            overflow: 'auto'
          }}>
            {bridge.interactiveElement.placeholder}
          </pre>
        );
      
      case 'network-visualization':
        return (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '0.5rem',
            padding: '1rem'
          }}>
            {bridge.interactiveElement.nodes.map((node, i) => (
              <div key={i} style={{
                padding: '0.5rem',
                background: `${bridge.color}20`,
                border: `1px solid ${bridge.color}`,
                borderRadius: '0.25rem',
                textAlign: 'center',
                fontSize: '0.75rem',
                color: bridge.color
              }}>
                {node}
              </div>
            ))}
          </div>
        );
      
      case 'transformation-demo':
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem' }}>
            {bridge.interactiveElement.stages.map((stage, i) => (
              <React.Fragment key={i}>
                <div style={{
                  padding: '0.5rem',
                  background: i === 1 ? `${bridge.color}40` : `${bridge.color}20`,
                  border: `1px solid ${bridge.color}`,
                  borderRadius: '0.25rem',
                  fontSize: '0.75rem',
                  color: bridge.color,
                  textAlign: 'center',
                  flex: 1
                }}>
                  {stage}
                </div>
                {i < bridge.interactiveElement.stages.length - 1 && (
                  <ChevronRight size={16} style={{ color: bridge.color }} />
                )}
              </React.Fragment>
            ))}
          </div>
        );
      
      case 'growth-simulation':
        return (
          <div style={{ padding: '1rem' }}>
            <div style={{ 
              marginBottom: '1rem', 
              fontSize: '0.875rem',
              color: bridge.color 
            }}>
              💡 {bridge.interactiveElement.seedIdea}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {bridge.interactiveElement.growthStages.map((stage, i) => (
                <div key={i} style={{
                  padding: '0.5rem',
                  background: `${bridge.color}${Math.max(20, 60 - i * 10)}`,
                  border: `1px solid ${bridge.color}`,
                  borderRadius: '0.25rem',
                  fontSize: '0.75rem',
                  color: bridge.color,
                  marginLeft: `${i * 1}rem`,
                  position: 'relative'
                }}>
                  {stage}
                  {i > 0 && (
                    <div style={{
                      position: 'absolute',
                      left: '-1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: bridge.color
                    }}>
                      ↳
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return <div>Interactive element</div>;
    }
  };

  return (
    <BridgeContainer 
      $color={bridge.color}
      $isActive={isActive}
      $hasAnimated={hasAnimated}
      onClick={onToggle}
    >
      <BridgeAccent $color={bridge.color} />
      
      <BridgeHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <BridgeNumber $color={bridge.color}>
            {bridge.number}
          </BridgeNumber>
          
          <div>
            <BridgeTitle>{bridge.title}</BridgeTitle>
            <BridgeSubtitle>{bridge.subtitle}</BridgeSubtitle>
          </div>
        </div>
        
        <IconContainer $color={bridge.color}>
          <span style={{ fontSize: '1.5rem' }}>{bridge.icon}</span>
        </IconContainer>
      </BridgeHeader>

      <BridgeContent $isExpanded={isActive}>
        <BridgeDescription>{bridge.description}</BridgeDescription>
        
        {isActive && (
          <>
            <FullDescription>{bridge.fullDescription}</FullDescription>
            
            <BridgeKeywords>
              {bridge.keywords.map((keyword, i) => (
                <Keyword key={i} $color={bridge.color}>
                  {keyword}
                </Keyword>
              ))}
            </BridgeKeywords>

            <InteractiveArea>
              <h4 style={{ 
                color: bridge.color, 
                marginBottom: '1rem',
                fontFamily: 'monospace',
                fontSize: '0.875rem'
              }}>
                // Elemento interactivo
              </h4>
              {renderInteractiveElement()}
            </InteractiveArea>

            <BridgeExamples>
              <h4 style={{ 
                color: bridge.color, 
                marginBottom: '1rem',
                fontFamily: 'monospace',
                fontSize: '0.875rem'
              }}>
                // Ejemplos en acción
              </h4>
              {bridge.examples.map((example, i) => (
                <ExampleItem key={i} $color={bridge.color}>
                  {example}
                </ExampleItem>
              ))}
            </BridgeExamples>
          </>
        )}
      </BridgeContent>
    </BridgeContainer>
  );
};

export default BridgeCard;
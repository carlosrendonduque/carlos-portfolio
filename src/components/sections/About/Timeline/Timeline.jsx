import React from 'react';
import { MapPin, Calendar, Award, Briefcase, GraduationCap, Plane } from 'lucide-react';
import {
  TimelineContainer,
  TimelineTitle,
  TimelineWrapper,
  TimelineItem,
  TimelineMarker,
  TimelineContent,
  TimelineDate,
  TimelineItemTitle,
  TimelineDescription,
  TimelineLocation,
  TimelineLine
} from './Timeline.styles';

const Timeline = ({ activeItem, onItemSelect }) => {
  const timelineData = [
    {
      id: 'current',
      date: '2023 - Presente',
      title: 'Creative Technologist & Digital Narratives',
      location: 'Brisbane, Australia',
      type: 'work',
      description: 'Maestría en Creative Writing y Digital Narratives mientras desarrollo proyectos que exploran la intersección entre IA y storytelling. Creación de Fragmentado, Form 80 y otros experimentos narrativos.',
      icon: <Award size={20} />
    },
    {
      id: 'migration',
      date: '2022',
      title: 'El Gran Salto: Colombia → Australia',
      location: 'Brisbane, Australia',
      type: 'personal',
      description: 'Migración que transformó no solo mi geografía sino mi perspectiva sobre la identidad, el lenguaje y la tecnología como puentes entre mundos. Esta experiencia se convierte en el núcleo de mis narrativas.',
      icon: <Plane size={20} />
    },
    {
      id: 'salesforce-senior',
      date: '2020 - 2022',
      title: 'Senior Salesforce Developer',
      location: 'Medellín, Colombia',
      type: 'work',
      description: 'Especialización en OmniStudio y desarrollo de soluciones complejas de integración. Liderazgo de proyectos de transformación digital para grandes corporaciones.',
      icon: <Briefcase size={20} />
    },
    {
      id: 'salesforce-start',
      date: '2018 - 2020',
      title: 'Inmersión en el Ecosistema Salesforce',
      location: 'Medellín, Colombia',
      type: 'work',
      description: 'Transición desde desarrollo tradicional hacia el ecosistema Salesforce. Certificaciones múltiples y especialización en Lightning Platform.',
      icon: <GraduationCap size={20} />
    },
    {
      id: 'early-career',
      date: '2016 - 2018',
      title: 'Primeros Pasos en Desarrollo',
      location: 'Medellín, Colombia',
      type: 'work',
      description: 'Inicio en desarrollo web con JavaScript, React y Node.js. Proyectos freelance y pequeñas startups. Descubrimiento de la pasión por crear experiencias digitales.',
      icon: <Briefcase size={20} />
    }
  ];

  const getMarkerColor = (type) => {
    switch (type) {
      case 'work': return '#10b981';
      case 'personal': return '#ef4444';
      case 'education': return '#3b82f6';
      default: return '#10b981';
    }
  };

  return (
    <TimelineContainer>
      <TimelineTitle>JOURNEY</TimelineTitle>
      
      <TimelineWrapper>
        <TimelineLine />
        
        {timelineData.map((item, index) => (
          <TimelineItem
            key={item.id}
            $isActive={activeItem === item.id}
            $delay={index * 0.2}
            onClick={() => onItemSelect(activeItem === item.id ? null : item.id)}
          >
            <TimelineMarker $color={getMarkerColor(item.type)}>
              {item.icon}
            </TimelineMarker>
            
            <TimelineContent $isActive={activeItem === item.id}>
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineItemTitle>{item.title}</TimelineItemTitle>
              
              <TimelineLocation>
                <MapPin size={14} />
                {item.location}
              </TimelineLocation>
              
              {(activeItem === item.id || !activeItem) && (
                <TimelineDescription $isExpanded={activeItem === item.id}>
                  {item.description}
                </TimelineDescription>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineWrapper>
    </TimelineContainer>
  );
};

export default Timeline;
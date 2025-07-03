import React, { useState } from 'react';
import { ExternalLink, Play, Code, Eye } from 'lucide-react';
import { Button } from '../../../common';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  ProjectTitle,
  ProjectSubtitle,
  StatusBadge,
  ProjectDescription,
  TechTags,
  TechTag,
  ProjectYear,
  PreviewArea,
  PreviewContent,
  ActionButtons,
  ColorAccent,
  HoverOverlay
} from './ProjectCard.styles';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderPreview = () => {
    switch (project.preview.type) {
      case 'text':
        return (
          <pre>{project.preview.content}</pre>
        );
      case 'form':
        return (
          <div className="form-preview">
            {project.preview.content.split('\n').map((line, i) => (
              <div key={i} className="form-line">{line}</div>
            ))}
          </div>
        );
      case 'poetry':
        return (
          <div className="poetry-preview">
            {project.preview.content.split('\n').map((line, i) => (
              <div key={i} className="poetry-line">{line}</div>
            ))}
          </div>
        );
      case 'bridges':
        return (
          <div className="bridges-preview">
            <pre>{project.preview.content}</pre>
          </div>
        );
      default:
        return <div>Preview not available</div>;
    }
  };

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $isHovered={isHovered}
      $primaryColor={project.colors.primary}
    >
      <ColorAccent $color={project.colors.primary} />
      
      <CardHeader>
        <div>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
        </div>
        <StatusBadge $status={project.status}>
          {project.status}
        </StatusBadge>
      </CardHeader>

      <CardContent>
        <ProjectDescription>{project.description}</ProjectDescription>
        
        <PreviewArea $isVisible={isHovered}>
          <PreviewContent $previewType={project.preview.type}>
            {renderPreview()}
          </PreviewContent>
        </PreviewArea>

        <TechTags>
          {project.tech.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </TechTags>
      </CardContent>

      <CardFooter>
        <ProjectYear>{project.year}</ProjectYear>
        
        <ActionButtons>
          {project.status === 'LIVE' && (
            <Button
              variant="ghost"
              size="small"
              icon={<Play size={16} />}
              onClick={() => window.open('#', '_blank')}
            >
              Demo
            </Button>
          )}
          
          <Button
            variant="ghost"
            size="small"
            icon={<Eye size={16} />}
            onClick={() => onViewDetails(project)}
          >
            Ver más
          </Button>
          
          {project.status === 'LIVE' && (
            <Button
              variant="primary"
              size="small"
              icon={<ExternalLink size={16} />}
              onClick={() => window.open('#', '_blank')}
            >
              Explorar
            </Button>
          )}
        </ActionButtons>
      </CardFooter>

      <HoverOverlay $isVisible={isHovered} />
    </Card>
  );
};

export default ProjectCard;
import React, { useState, useMemo } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import { Button } from '../../common';
import ProjectCard from './ProjectCard/ProjectCard';
import { projectsData, categories } from '../../../utils/projectsData';
import {
  ProjectsContainer,
  ProjectsHeader,
  ProjectsTitle,
  ProjectsDescription,
  FilterSection,
  CategoryFilters,
  CategoryButton,
  ViewToggle,
  ProjectsGrid,
  ProjectsStats,
  StatsItem,
  LoadingState,
  EmptyState
} from './Projects.styles';

const Projects = ({ onProjectSelect }) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [isLoading, setIsLoading] = useState(false);

  const projects = Object.values(projectsData);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === activeCategory);
  }, [projects, activeCategory]);

  const projectStats = useMemo(() => {
    const stats = {
      total: projects.length,
      live: projects.filter(p => p.status === 'LIVE').length,
      development: projects.filter(p => ['BETA', 'DESARROLLO'].includes(p.status)).length,
      upcoming: projects.filter(p => p.status === 'PRÓXIMAMENTE').length
    };
    return stats;
  }, [projects]);

  const handleCategoryChange = (category) => {
    setIsLoading(true);
    setActiveCategory(category);
    
    // Simular loading para efecto visual
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const handleProjectDetails = (project) => {
    console.log('Ver detalles:', project);
    // Aquí podrías abrir un modal o navegar a una página de detalles
    if (onProjectSelect) {
      onProjectSelect(project);
    }
  };

  return (
    <ProjectsContainer>
      <ProjectsHeader>
        <div>
          <ProjectsTitle>LABORATORIO</ProjectsTitle>
          <ProjectsDescription>
            Espacio experimental donde nacen las ideas que luego se convierten en proyectos. 
            Aquí la narrativa se vuelve laboratorio de posibilidades.
          </ProjectsDescription>
        </div>
        
        <ProjectsStats>
          <StatsItem>
            <span className="number">{projectStats.total}</span>
            <span className="label">Proyectos</span>
          </StatsItem>
          <StatsItem>
            <span className="number">{projectStats.live}</span>
            <span className="label">Live</span>
          </StatsItem>
          <StatsItem>
            <span className="number">{projectStats.development}</span>
            <span className="label">Beta</span>
          </StatsItem>
          <StatsItem>
            <span className="number">{projectStats.upcoming}</span>
            <span className="label">Próximos</span>
          </StatsItem>
        </ProjectsStats>
      </ProjectsHeader>

      <FilterSection>
        <CategoryFilters>
          {Object.entries(categories).map(([key, category]) => (
            <CategoryButton
              key={key}
              $isActive={activeCategory === key}
              onClick={() => handleCategoryChange(key)}
            >
              <span className="icon">{category.icon}</span>
              <span className="name">{category.name}</span>
              <span className="count">
                {key === 'all' 
                  ? projects.length 
                  : projects.filter(p => p.category === key).length
                }
              </span>
            </CategoryButton>
          ))}
        </CategoryFilters>

        <ViewToggle>
          <Button
            variant={viewMode === 'grid' ? 'primary' : 'ghost'}
            size="small"
            icon={<Grid size={16} />}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </Button>
          <Button
            variant={viewMode === 'list' ? 'primary' : 'ghost'}
            size="small"
            icon={<List size={16} />}
            onClick={() => setViewMode('list')}
          >
            Lista
          </Button>
        </ViewToggle>
      </FilterSection>

      {isLoading ? (
        <LoadingState>
          <div className="spinner" />
          <p>Cargando proyectos...</p>
        </LoadingState>
      ) : filteredProjects.length > 0 ? (
        <ProjectsGrid $viewMode={viewMode}>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleProjectDetails}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </ProjectsGrid>
      ) : (
        <EmptyState>
          <Filter size={48} />
          <h3>No hay proyectos en esta categoría</h3>
          <p>Prueba seleccionando otra categoría o explora todos los proyectos.</p>
          <Button
            variant="primary"
            onClick={() => handleCategoryChange('all')}
          >
            Ver todos los proyectos
          </Button>
        </EmptyState>
      )}
    </ProjectsContainer>
  );
};

export default Projects;
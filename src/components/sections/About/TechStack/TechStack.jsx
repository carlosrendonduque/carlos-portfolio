import React, { useState } from 'react';
import { 
  TechStackContainer,
  TechTitle,
  TechCategories,
  CategoryTab,
  TechGrid,
  TechItem,
  TechIcon,
  TechName,
  TechExperience,
  SkillBar,
  SkillProgress
} from './TechStack.styles';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techData = {
    frontend: [
      { name: 'React', experience: 90, years: '5+', icon: '⚛️' },
      { name: 'JavaScript', experience: 95, years: '8+', icon: '🟨' },
      { name: 'TypeScript', experience: 80, years: '3+', icon: '🔷' },
      { name: 'Styled Components', experience: 85, years: '4+', icon: '💅' },
      { name: 'HTML/CSS', experience: 95, years: '8+', icon: '🎨' },
      { name: 'Vue.js', experience: 70, years: '2+', icon: '💚' }
    ],
    backend: [
      { name: 'Node.js', experience: 80, years: '4+', icon: '🟢' },
      { name: 'Python', experience: 75, years: '3+', icon: '🐍' },
      { name: 'APIs REST', experience: 90, years: '6+', icon: '🔗' },
      { name: 'GraphQL', experience: 70, years: '2+', icon: '📊' },
      { name: 'Databases', experience: 80, years: '5+', icon: '🗄️' }
    ],
    salesforce: [
      { name: 'OmniStudio', experience: 95, years: '4+', icon: '☁️' },
      { name: 'Lightning Web Components', experience: 90, years: '4+', icon: '⚡' },
      { name: 'Apex', experience: 85, years: '3+', icon: '🔺' },
      { name: 'SOQL/SOSL', experience: 90, years: '4+', icon: '🔍' },
      { name: 'Flow Builder', experience: 95, years: '4+', icon: '🌊' },
      { name: 'Integration', experience: 85, years: '3+', icon: '🔌' }
    ],
    creative: [
      { name: 'Digital Narratives', experience: 95, years: '2+', icon: '📖' },
      { name: 'Interactive Fiction', experience: 90, years: '2+', icon: '🎮' },
      { name: 'AI Storytelling', experience: 80, years: '1+', icon: '🤖' },
      { name: 'Transmedia', experience: 85, years: '2+', icon: '🌐' },
      { name: 'UX Writing', experience: 80, years: '3+', icon: '✍️' }
    ]
  };

  const categories = {
    frontend: { name: 'Frontend', icon: '🎨' },
    backend: { name: 'Backend', icon: '⚙️' },
    salesforce: { name: 'Salesforce', icon: '☁️' },
    creative: { name: 'Creative Tech', icon: '✨' }
  };

  return (
    <TechStackContainer>
      <TechTitle>TECH STACK</TechTitle>
      
      <TechCategories>
        {Object.entries(categories).map(([key, category]) => (
          <CategoryTab
            key={key}
            $isActive={activeCategory === key}
            onClick={() => setActiveCategory(key)}
          >
            <span className="icon">{category.icon}</span>
            <span className="name">{category.name}</span>
          </CategoryTab>
        ))}
      </TechCategories>

      <TechGrid>
        {techData[activeCategory].map((tech, index) => (
          <TechItem key={tech.name} $delay={index * 0.1}>
            <div className="tech-header">
              <TechIcon>{tech.icon}</TechIcon>
              <div>
                <TechName>{tech.name}</TechName>
                <TechExperience>{tech.years} años</TechExperience>
              </div>
            </div>
            
            <SkillBar>
              <SkillProgress 
                $experience={tech.experience}
                $delay={index * 0.1}
              />
            </SkillBar>
          </TechItem>
        ))}
      </TechGrid>
    </TechStackContainer>
  );
};

export default TechStack;
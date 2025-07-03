import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Layout } from './components/common';
import { Hero, Projects, Manifesto, About } from './components/sections';
import './i18n';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section) => {
    setCurrentSection(section);
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'home':
        return <Hero onNavigate={handleNavigate} />;
      case 'laboratory':
        return <Projects onProjectSelect={(project) => console.log('Selected:', project)} />;
      case 'manifesto':
        return <Manifesto />;
      case 'about':
        return <About />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout 
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      >
        {renderContent()}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
export const projectsData = {
    fragmentado: {
      id: 'fragmentado',
      title: 'FRAGMENTADO',
      subtitle: 'Novela Interactiva',
      description: 'Una historia en tres actos sobre la pérdida de la humanidad. Narrativa interactiva que explora el control, la memoria implantada y el genocidio tecnológico.',
      longDescription: 'Fragmentado es una exploración profunda sobre qué significa ser humano en una era donde la tecnología redefine la existencia. A través de decisiones interactivas, el lector navega un futuro distópico donde las corporaciones han fragmentado la humanidad.',
      status: 'LIVE',
      category: 'interactive-fiction',
      tech: ['React', 'Interactive Fiction', 'AI Themes'],
      year: '2024',
      featured: true,
      colors: {
        primary: '#ef4444',
        secondary: '#dc2626'
      },
      preview: {
        type: 'text',
        content: '> Iniciar sesión...\n> Cargando memoria...\n> ERROR: Fragmento corrupto\n> ¿Continuar?'
      }
    },
    
    form80: {
      id: 'form80',
      title: 'FORM 80',
      subtitle: 'Poema Interactivo',
      description: 'Transformación de un formulario migratorio en poesía interactiva. Los versos emergen de la interacción con campos burocráticos.',
      longDescription: 'Form 80 convierte la experiencia migratoria en una poesía viva. Cada campo del formulario se transforma en verso, cada click revela la humanidad detrás de la burocracia.',
      status: 'BETA',
      category: 'interactive-poetry',
      tech: ['React', 'Interactive Poetry', 'Multimedia'],
      year: '2024',
      featured: false,
      colors: {
        primary: '#f59e0b',
        secondary: '#d97706'
      },
      preview: {
        type: 'form',
        content: 'Nombre: [________]\nApellido: [________]\n> Los espacios en blanco\n> son poemas esperando\n> a ser escritos...'
      }
    },
    
    bridges: {
      id: '4puentes',
      title: '4 PUENTES',
      subtitle: 'Framework Conceptual',
      description: 'Manifiesto creativo donde cada puente conecta mundos: Crear, Conectar, Transformar, Expandir.',
      longDescription: 'Los 4 Puentes es más que un manifiesto: es una filosofía de vida aplicada al arte digital. Cada puente representa una forma de resistencia contra la fragmentación del mundo contemporáneo.',
      status: 'CONCEPT',
      category: 'philosophy',
      tech: ['Philosophy', 'Narrative Framework', 'Transmedia'],
      year: '2024',
      featured: false,
      colors: {
        primary: '#10b981',
        secondary: '#059669'
      },
      preview: {
        type: 'bridges',
        content: 'CREAR → CONECTAR\n   ↑         ↓\nEXPANDIR ← TRANSFORMAR'
      }
    },
    
    merma: {
      id: 'merma',
      title: 'ÍNDICE DE MERMA',
      subtitle: 'Obra Transmedia',
      description: 'Formulario de evaluación residual en un futuro donde la vida se contabiliza por partes. Múltiples finales en diferentes formatos.',
      longDescription: 'Índice de Merma es una experiencia transmedia que cuestiona el valor humano en un sistema que cuantifica la existencia. QR codes llevan a finales alternativos en diferentes medios.',
      status: 'PRÓXIMAMENTE',
      category: 'transmedia',
      tech: ['Transmedia', 'Interactive Fiction', 'QR Integration'],
      year: '2025',
      featured: true,
      colors: {
        primary: '#3b82f6',
        secondary: '#2563eb'
      },
      preview: {
        type: 'form',
        content: 'EVALUACIÓN RESIDUAL\n□ Útil\n□ Parcialmente útil\n□ Sin valor\n> Procesando...'
      }
    },
    
    zonaTrasito: {
      id: 'zona-transito',
      title: 'ZONA DE TRÁNSITO',
      subtitle: 'Poemario Interactivo',
      description: 'Poemas que exploran la experiencia migratoria, el estar entre mundos, la identidad fragmentada.',
      longDescription: 'Zona de Tránsito captura la experiencia del inmigrante en versos interactivos. Cada poema puede ser explorado de múltiples formas, reflejando la naturaleza fragmentaria de la identidad en movimiento.',
      status: 'DESARROLLO',
      category: 'interactive-poetry',
      tech: ['Interactive Poetry', 'Multimedia', 'Animation'],
      year: '2024',
      featured: false,
      colors: {
        primary: '#8b5cf6',
        secondary: '#7c3aed'
      },
      preview: {
        type: 'poetry',
        content: 'En los ojos negros\nde los cuervos\nveo a Medellín...\n\n[Click para continuar]'
      }
    }
  };
  
  export const categories = {
    all: { name: 'Todos', icon: '∀' },
    'interactive-fiction': { name: 'Ficción Interactiva', icon: '📖' },
    'interactive-poetry': { name: 'Poesía Interactiva', icon: '✨' },
    'transmedia': { name: 'Transmedia', icon: '🌐' },
    'philosophy': { name: 'Filosofía', icon: '🧠' }
  };
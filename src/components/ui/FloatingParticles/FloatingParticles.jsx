import React, { useMemo } from 'react';
import { ParticlesContainer, Particle } from './FloatingParticles.styles';

const FloatingParticles = ({ count = 30 }) => {
  const particles = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 15,
      size: 1 + Math.random() * 2,
      left: Math.random() * 100,
      opacity: 0.2 + Math.random() * 0.5
    })), [count]
  );

  return (
    <ParticlesContainer>
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          $delay={particle.delay}
          $duration={particle.duration}
          $size={particle.size}
          $left={particle.left}
          $opacity={particle.opacity}
        />
      ))}
    </ParticlesContainer>
  );
};

export default FloatingParticles;
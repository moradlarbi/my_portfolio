'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectHovered, setIsProjectHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: clientX, y: clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Gestion des hover pour les liens et les projets
  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleProjectEnter = () => setIsProjectHovered(true);
    const handleProjectLeave = () => setIsProjectHovered(false);

    // Sélectionne tous les liens et projets
    const links = document.querySelectorAll('a');
    const projects = document.querySelectorAll('.project-item');

    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    projects.forEach((project) => {
      console.log(project)
      project.addEventListener('mouseenter', handleProjectEnter);
      project.addEventListener('mouseleave', handleProjectLeave);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });

      projects.forEach((project) => {
        project.removeEventListener('mouseenter', handleProjectEnter);
        project.removeEventListener('mouseleave', handleProjectLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center font-semibold text-white`}
      animate={{
        x: position.x - (isProjectHovered ? 50 : 10),
        y: position.y - (isProjectHovered ? 50 : 10),
        scale: isHovered ? 2 : isProjectHovered ? 4 : 1,
        opacity: isHovered || isProjectHovered ? 0.9 : 0.6,
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      style={{
        width: isProjectHovered ? 100 : 20,
        height: isProjectHovered ? 100 : 20,
        backgroundColor: isProjectHovered ? 'transparent' : 'black',
        border: isProjectHovered ? '2px solid white' : 'none',
      }}
    >
      {isProjectHovered && (
        <span className="text-white text-xs pointer-events-none">Découvrir</span>
      )}
    </motion.div>
  );
};

export default CustomCursor;

'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      // Use requestAnimationFrame to reduce the frequency of updates
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

  // Add event listeners for hover effects
  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 bg-black rounded-full"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: isHovered ? 2 : 1,
        opacity: isHovered ? 0.8 : 0.6,
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      style={{ width: 20, height: 20 }}
    />
  );
};

export default CustomCursor;

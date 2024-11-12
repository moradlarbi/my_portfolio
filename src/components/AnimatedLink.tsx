"use client";

import {useState} from 'react';
import { motion } from 'framer-motion';

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, children, className, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.a
      href={href}
      className={`inline-block relative ${className}`}
      initial={{ opacity: 1, rotateX: 0, y: 0 }} // Position initiale
      whileHover={{
        opacity: 0, // Disparition lors du hover
        y: 0, // Se déplace vers le haut
        rotateX: 180, // Effectue un flip
      }}
      animate={{
        opacity: 1, // L'élément reste visible après l'animation
        rotateX: 0, // Retourne à l'angle normal
      }}
      transition={{
        duration: 0.6, // Durée du flip
        ease: "easeInOut", // Transition fluide
        delay: isHovered ? 0 : undefined, // L'animation ne se fait qu'une seule fois au début
      }}
      onHoverStart={() => setIsHovered(true)} // On marque le début du hover
      onHoverEnd={() => setIsHovered(false)} // Quand on quitte le hover
      {...props}
    >
      {children}
    </motion.a>
  );
};

export default AnimatedLink;

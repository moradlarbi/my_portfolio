"use client";
import { motion } from "framer-motion";

interface AnimatedLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  [x: string]: any;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  className,
  children,
  ...props
}) => {
  return (
    <motion.a
      className={`relative inline-block overflow-hidden ${className}`}
      href={href}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Premier texte qui disparaît vers le haut */}
      <motion.span
        className="block"
        variants={{
          rest: { y: 0, opacity: 1 },
          hover: {
            y: -20,
            opacity: 0,
            transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }
          },
        }}
      >
        {children}
      </motion.span>
      
      {/* Deuxième texte qui apparaît depuis le bas */}
      <motion.span
        className="block absolute inset-0"
        variants={{
          rest: { y: 20, opacity: 0 },
          hover: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 0.15, ease: [0.6, -0.05, 0.01, 0.99] }
          },
        }}
      >
        {children}
      </motion.span>
    </motion.a>
  );
};

export default AnimatedLink;

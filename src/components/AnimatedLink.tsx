"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

interface AnimatedLinkProps {
  href: string
  className?: string
  children: React.ReactNode
  target?: string
  rel?: string
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, className, children, target, rel }) => {
  return (
    <Link href={href} target={target} rel={rel} passHref>
      <motion.a
        className={`relative inline-block overflow-hidden ${className}`}
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <motion.span
          className="relative inline-block"
          variants={{
            rest: { y: 0 },
            hover: { y: -20 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.span>
        <motion.span
          className="absolute top-0 left-0"
          variants={{
            rest: { y: 20, opacity: 0 },
            hover: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.span>
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[2px] bg-current"
          variants={{
            rest: { scaleX: 0 },
            hover: { scaleX: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.a>
    </Link>
  )
}

export default AnimatedLink


"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768) // Adjust this breakpoint as needed
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return // Don't add event listeners on mobile

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = () => {
      const target = document.elementFromPoint(position.x, position.y)
      setIsPointer(window.getComputedStyle(target as Element).cursor === "pointer")
    }

    const handleMouseEnter = () => setIsHidden(false)
    const handleMouseLeave = () => setIsHidden(true)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", updateCursorType)
    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", updateCursorType)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [position.x, position.y, isMobile])

  if (isMobile) return null // Don't render the custom cursor on mobile

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        opacity: isHidden ? 0 : 1,
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2" />
        {isPointer && <circle cx="16" cy="16" r="4" fill="white" />}
      </svg>
    </motion.div>
  )
}

export default CustomCursor


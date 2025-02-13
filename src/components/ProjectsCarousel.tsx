"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface Project {
  id: string
  titre: string
  excrept: string
  stack: string[]
  image: string
}

const ProjectsCarousel = ({ projects }: { projects: Project[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection)
      setCurrentIndex((prevIndex) => (prevIndex + newDirection + projects.length) % projects.length)
    },
    [projects.length]
  )

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      paginate(1)
    }, 5000)

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current)
      }
    }
  }, [paginate]) // paginate est stable avec useCallback

  const project = projects[currentIndex]

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h2 className="text-6xl font-bold mb-6">Projects</h2>
            <p className="text-gray-400 text-lg mb-8">
              Explore our portfolio of digital solutions that showcase our expertise in creating immersive and functional web experiences.
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold mb-4">{project.titre}</h3>
                <p className="text-gray-400 mb-6">{project.excrept}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link href={`/projects/${project.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-medium"
                  >
                    View Project
                  </motion.button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative aspect-[4/3] w-full">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction < 0 ? 1000 : -1000, opacity: 0 }}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full"
              >
                <Image
                  src={project.image || "/images/project1.webp"}
                  alt={project.titre}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              onClick={() => paginate(-1)}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              onClick={() => paginate(1)}
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsCarousel

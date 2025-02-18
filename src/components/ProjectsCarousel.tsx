"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"

interface Project {
  id: string
  titre: string
  excrept: string
  image: string
  stack: string[]
}

interface ProjectCarouselProps {
  projects: Project[]
  onProjectClick: (project: Project) => void
}

const ProjectCarousel = ({ projects, onProjectClick }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const previousProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (!isHovered) {
      interval = setInterval(() => {
        nextProject()
      }, 5000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isHovered]) // Removed nextProject from dependencies

  const visibleProjects = [
    projects[(currentIndex - 1 + projects.length) % projects.length],
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
  ]

  return (
    <section className="relative min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Selected Works</h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Explore our portfolio of innovative digital solutions that showcase our expertise in creating immersive and
            functional web experiences.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-[600px] overflow-hidden">
            <div className="flex justify-center items-center gap-8">
              {visibleProjects.map((project, idx) => (
                <motion.div
                  key={`${project.id}-${idx}`}
                  className={`relative w-[800px] h-[500px] ${idx === 1 ? "z-20 scale-110" : "z-10 opacity-50"}`}
                  initial={{ scale: 1, y: 0 }}
                  animate={{
                    scale: idx === 1 ? 1.1 : 1,
                    y: idx === 1 ? -20 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  onClick={() => onProjectClick(project)}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-lg transform perspective-1000 hover:rotate-y-10 transition-transform duration-500 cursor-pointer">
                    <Image
                      src={project.image || "/images/project1.webp"}
                      alt={project.titre}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-2xl font-bold mb-2">{project.titre}</h3>
                      <p className="text-gray-300 mb-4">{project.excrept}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((tech, techIdx) => (
                          <span key={techIdx} className="px-3 py-1 text-sm bg-white/10 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={previousProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectCarousel


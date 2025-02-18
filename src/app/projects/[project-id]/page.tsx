"use client"

import { useParams } from "next/navigation"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react"
import { projects } from "@/data/projects"
import { useState, useEffect, useCallback } from "react"

const ProjectDetail = () => {
  const { "project-id": projectId } = useParams()
  const project = projects.find((p) => p.id === projectId)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const [carouselOpen, setCarouselOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openCarousel = (index: number) => {
    setCurrentImageIndex(index)
    setCarouselOpen(true)
  }

  const closeCarousel = () => {
    setCarouselOpen(false)
  }

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project!.gallery.length)
  }, [project])

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project!.gallery.length) % project!.gallery.length)
  }, [project])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!carouselOpen) return
      if (event.key === "ArrowRight") nextImage()
      if (event.key === "ArrowLeft") prevImage()
      if (event.key === "Escape") closeCarousel()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [carouselOpen, nextImage, prevImage]) // Removed closeCarousel from dependencies

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Project not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.titre}
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <Link href="/projects">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-gray-400 hover:text-white mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </motion.button>
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white text-shadow-lg"
          >
            {project.titre}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mb-8 text-shadow-lg"
          >
            {project.excrept}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {project.stack.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-white/20 rounded-full text-sm text-white">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <h2 className="text-3xl font-bold mb-8">About the Project</h2>
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.description}</p>
          </div>

          {/* Project Gallery */}
          <h3 className="text-2xl font-bold my-8">Project Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * index }}
                className="relative h-64 rounded-lg overflow-hidden bg-gray-900 group cursor-pointer"
                onClick={() => openCarousel(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.titre} screenshot ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Larger
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-300"
              >
                View Live <ExternalLink size={18} className="ml-2" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                GitHub Repo <Github size={18} className="ml-2" />
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Next Project */}
      <div className="bg-gradient-to-b from-black via-purple-900 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to see more?</h2>
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-900 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300"
            >
              Explore More Projects
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Carousel */}
      <AnimatePresence>
        {carouselOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          >
            <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
              <Image
                src={project.gallery[currentImageIndex] || "/placeholder.svg"}
                alt={`${project.titre} screenshot ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="contain"
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
                onClick={closeCarousel}
              >
                <X size={24} />
              </button>
              <button
                className="absolute left-4 text-white hover:text-gray-300 transition-colors duration-300"
                onClick={prevImage}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="absolute right-4 text-white hover:text-gray-300 transition-colors duration-300"
                onClick={nextImage}
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.gallery.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-gray-500"}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectDetail


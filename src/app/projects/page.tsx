"use client"

import { useState } from "react"
import ProjectCarousel from "@/components/ProjectsCarousel"
import { useRouter } from "next/navigation"
import { projects } from "@/data/projects"


const ProjectsPage = () => {
  const router = useRouter()
  const [selectedProject, setSelectedProject] = useState(null)

  const handleProjectClick = (project : any) => {
    setSelectedProject(project)
    router.push(`/projects/${project.id}`)
  }

  return (
    <div className="min-h-screen bg-black">
      <ProjectCarousel projects={projects} onProjectClick={handleProjectClick} />
    </div>
  )
}

export default ProjectsPage


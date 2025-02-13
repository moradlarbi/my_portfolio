"use client"

import ProjectsCarousel from "@/components/ProjectsCarousel"

const projects = [
  {
    id: "fresh-food",
    titre: "Fresh Food",
    excrept: "Progressive Web App pour la gestion de la livraison et de la chaîne d'approvisionnement.",
    description:
      "Fresh Food est une application progressive web (PWA) avec trois interfaces distinctes pour les clients, les fournisseurs et les livreurs. Elle permet une gestion complète des commandes, des stocks et de la trésorerie, offrant une solution intégrée pour optimiser la chaîne d'approvisionnement et les livraisons.",
    stack: ["Refine.js", "Typescript", "MUI", "Figma", "Jira", "GitHub"],
    tag: ["Front-end", "web-development"],
    image: "/images/project1.webp",
  },
  {
    id: "Lamsaty",
    titre: "Restaurant Management App",
    excrept: "Progressive Web App pour la gestion complète des opérations d'un restaurant.",
    description:
      "Cette application progressive web (PWA) permet aux restaurants de gérer efficacement leurs opérations. Elle inclut des fonctionnalités de gestion des stocks, de prise de commande client, de facturation, ainsi que de gestion de la trésorerie et du personnel interne.",
    stack: ["React", "MUI", "TypeScript", "GitHub"],
    tag: ["Front-end", "web-development"],
    image: "/images/project1.webp",
  },
  {
    id: "PFE",
    titre: "Système de Gestion de Collecte des Déchets",
    excrept: "Solution intelligente pour la gestion optimisée des zones de collecte et des trajets des livreurs.",
    description:
      "Projet de fin d'études pour le Master en Génie Logiciel. Ce système comprend une application admin pour la gestion des zones, des points de collecte, et des poubelles, ainsi qu'une application dédiée aux livreurs.",
    stack: ["Express.js", "Python", "Flask", "React", "MUI", "Google Maps API"],
    tag: ["Back-end", "Front-end", "Web-development"],
    image: "/images/project1.webp",
  },
]

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <ProjectsCarousel projects={projects} />
    </div>
  )
}

export default ProjectsPage


// src/app/projects/page.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    "id":"fresh-food",
    "titre": "Fresh Food",
    "excrept": "Progressive Web App pour la gestion de la livraison et de la chaîne d'approvisionnement.",
    "description": "Fresh Food est une application progressive web (PWA) avec trois interfaces distinctes pour les clients, les fournisseurs et les livreurs. Elle permet une gestion complète des commandes, des stocks et de la trésorerie, offrant une solution intégrée pour optimiser la chaîne d'approvisionnement et les livraisons.",
    "stack": ["Refine.js","Typescript", "MUI","Figma","Jira", "GitHub"],
    "tag":["Front-end","web-development"],
    "image": "fresh-food.png"
  }, 
  {
    "id":"Lamsaty",
    "titre": "Restaurant Management App",
    "excrept": "Progressive Web App pour la gestion complète des opérations d'un restaurant.",
    "description": "Cette application progressive web (PWA) permet aux restaurants de gérer efficacement leurs opérations. Elle inclut des fonctionnalités de gestion des stocks, de prise de commande client, de facturation, ainsi que de gestion de la trésorerie et du personnel interne. L'application centralise tous les processus afin d'optimiser la productivité et les opérations du restaurant.",
    "stack": ["React", "MUI", "TypeScript", "GitHub"],
    "tag":["Front-end","web-development"],
    "image": "restaurant-management.png"
  }, 
  {
    "id":"PFE",
    "titre": "Système de Gestion de Collecte des Déchets",
    "excrept": "Solution intelligente pour la gestion optimisée des zones de collecte et des trajets des livreurs.",
    "description": "Projet de fin d'études pour le Master en Génie Logiciel. Ce système comprend une application admin pour la gestion des zones, des points de collecte, et des poubelles, ainsi qu'une application dédiée aux livreurs. Grâce à un algorithme de recherche opérationnelle (RO) intégré avec l'API Google Maps, l'application optimise les trajets pour les livreurs. De plus, un modèle de prédiction basé sur l'historique des déchets générés dans chaque zone permet de planifier l'installation des points de collecte de manière plus efficace.",
    "stack": [
      "Express.js",
      "Python",
      "Flask",
      "Pandas",
      "NumPy",
      "React",
      "MUI",
      "Google Maps API"
    ],
    "tag":["Back-end","Front-end","recherche operationnelle","Web-development","machine-learning"],
    "image": "waste-management-system.png"
  },
  {
    "id":"Gantt_Frappe",
    "titre": "Gantt_Frappe",
    "excrept": "Contribution à un projet open source de génération de diagrammes de Gantt.",
    "description": "Participation à un projet open source visant à améliorer une application web de génération de diagrammes de Gantt. La contribution consistait à rendre la vue du Gantt dynamique en permettant de choisir l'unité de temps (jour, semaine, mois, etc.) ainsi que le pas d'affichage. De plus, j'ai ajouté la fonctionnalité d'export des diagrammes dans divers formats (Excel, CSV, etc.) pour une utilisation flexible et adaptée aux besoins des utilisateurs.",
    "stack": ["JavaScript", "HTML", "CSS", "GitHub"],
    "tag":["Front-end","Web-development"],
    "image": "gantt-frappe.png"
  },
  {
    "id":"Schedaut",
    "titre": "SchedAut",
    "excrept": "Application intelligente pour la génération automatisée de plannings d'études.",
    "description": "SchedAut est une application de planification d'études qui génère des emplois du temps basés sur la disponibilité des salles, des professeurs, et le nombre d'heures par matière. Elle utilise un algorithme de résolution de problèmes NP-complets pour optimiser la répartition des ressources. L'application comprend également une interface admin pour la gestion des ressources et intègre un pipeline CI pour automatiser l'intégration.",
    "stack": [
      "Express.js",
      "React",
      "GitHub Actions",
      "REST API",
      "Python"
    ],
    "tag":["Front-end","Back-end","Web-development","recherche opérationnelle"],
    "image": "schedaut.png"
  },
  {
    "id":"etic-bot",
    "titre": "ETIC Discord Bot",
    "excrept": "Bot Discord pour automatiser les tâches internes du club étudiant ETIC.",
    "description": "Développement d'un bot Discord pour assister les membres internes du club étudiant ETIC. Le bot propose diverses fonctionnalités, notamment la génération de templates de procès-verbaux de réunion, la lecture de musique dans les salons vocaux, la sélection aléatoire de membres pour des tâches spécifiques, et l'attribution automatique des rôles. Il vise à faciliter la coordination et à automatiser des tâches répétitives pour les membres du club.",
    "stack": ["Discord.js", "JavaScript","HTML","Github"],
    "tag":["Automatisation"],
    "image": "etic-discord-bot.png"
  }
 
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 lg:px-24">
      <h1 className="text-4xl font-bold text-center mb-12">Our Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <motion.div
              className="project-item relative overflow-hidden  rounded-lg shadow-lg cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/images/project1.webp"
                alt={project.titre}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold">{project.titre}</h2>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

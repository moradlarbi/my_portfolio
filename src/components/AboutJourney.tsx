'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import Image from 'next/image';

const experiences = [
  {
    poste: 'Membre actif puis Lead du département Tech',
    entreprise: 'ETIC (club étudiant)',
    periode: '2020 - 2023',
    missions: [
      'Développement des sites web pour les événements du club',
      'Présentation de workshops (Git, React) et formations aux membres',
      'Mentorat lors des hackathons pour les nouveaux membres',
    ],
    stack: ['Front-end'],
    image: '/images/etic.webp',
  },
  {
    poste: 'Stagiaire en développement web puis Développeur Web Front-end',
    entreprise: 'KB Dev (Oran)',
    periode: 'Mai 2022 - Décembre 2023',
    missions: [
      'Développement avec des technologies modernes : Strapi.js, Refine.js, React, Next.js, Tailwind CSS, MUI',
      'Exécution de tests d\'applications avec SonarQube et Selenium',
      'Collaboration en utilisant Scrum, Git, et Jira pour une approche Agile',
      'Participation au déploiement continu (CI/CD) avec GitHub Actions et Docker',
    ],
    stack: ['React', 'Next.js', 'Strapi.js', 'Refine.js', 'Tailwind CSS'],
    image: '/images/kbdev.webp',
  },
  {
    poste: 'Stagiaire puis Alternant Chef de Projet',
    entreprise: 'SFR',
    periode: 'Avril 2024 - Septembre 2025',
    missions: [
      'Conception d\'un outil de gestion de projets',
      'Modélisation des processus de gestion de projets',
      'Création de rapports à l\'aide de Tableau',
      'Développement d\'ETL pour le reporting avec Pentaho',
    ],
    stack: ['Tableau', 'Pentaho', 'Gestion de projet'],
    image: '/images/kbdev.webp',
  },
];
const formations = [
  {
    formation: 'Ingénieur en Génie Logiciel',
    école: 'École Nationale Supérieure d\'Informatique (ESI) d\'Alger',
    periode: '2019 - 2023',
    modules_majeurs: ['Algorithmique', 'Programmation orientée objet', 'Statistiques', 'Bases de données', 'Machine Learning'],
    modules_mineurs: ['Réseaux', 'Analyse et algèbre', 'Électronique'],
  },
  {
    formation: 'Master MIAGE - Ingénierie du Web',
    école: 'Université Paris-Saclay (Évry)',
    periode: '2023 - 2025',
    modules_majeurs: ['Développement web', 'Gestion de projet', 'Architecture logicielle', 'Bases de données'],
    modules_mineurs: ['Gestion financière', 'Droit numérique', 'Recherche opérationnelle', 'Analyse de données'],
  },
];

const AboutJourney = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative max-w-5xl mx-auto py-20 px-4">
      {/* Timeline */}
      <div className="relative border-l-4 border-gray-300 pl-8 space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`relative group cursor-pointer`}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Point on the timeline */}
            <span className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></span>
            
            {/* Experience Card */}
            <div className={`p-6 bg-white shadow-lg rounded-lg transition-all ${hoveredIndex === index ? 'scale-105' : ''}`}>
              <h3 className="text-2xl font-semibold">{exp.poste}</h3>
              <p className="text-gray-500">{exp.entreprise} - {exp.periode}</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                {exp.missions.map((mission, idx) => (
                  <li key={idx}>{mission}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.stack.map((tech, idx) => (
                  <span key={idx} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Image on Hover */}
            {hoveredIndex === index && (
              <motion.div
                className="fixed top-1/2 right-10 transform -translate-y-1/2 z-50"
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, rotate: -10 }}
              >
                <Image
                  src={exp.image}
                  alt={exp.poste}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
       {/* Section Formations Académiques */}
       <h2 className="text-4xl font-bold mt-20 mb-12 text-center">Mon Parcours Académique</h2>
      <div className="space-y-12">
        {formations.map((formation, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <h3 className="text-2xl font-semibold">{formation.formation}</h3>
            <p className="text-gray-500">{formation.école} - {formation.periode}</p>
            <div className="mt-4">
              <h4 className="font-semibold">Modules Majeurs:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {formation.modules_majeurs.map((module, idx) => (
                  <span key={idx} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {module}
                  </span>
                ))}
              </div>
              <h4 className="font-semibold mt-4">Modules Mineurs:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {formation.modules_mineurs.map((module, idx) => (
                  <span key={idx} className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">
                    {module}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutJourney;

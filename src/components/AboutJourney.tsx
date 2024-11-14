"use client";

import { motion } from "framer-motion";

const modules = [
  "Développement Web",
  "Bases de données",
  "Algorithmique",
  "Machine Learning",
  "Sécurité Informatique",
  "Gestion de projets",
];

const experiences = [
  {
    title: "Développeur Front-End",
    company: "Entreprise A",
    period: "2021 - 2023",
    description: "Développement d'applications web en React et Next.js.",
  },
  {
    title: "Ingénieur Logiciel",
    company: "Entreprise B",
    period: "2023 - Présent",
    description: "Conception et déploiement de solutions cloud avec AWS.",
  },
];

const AboutJourney = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Section Titre */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Mon Parcours
        </motion.h2>

        {/* Parcours Académique */}
        <div className="mb-16">
          <motion.h3
            className="text-3xl font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            🎓 Parcours Académique
          </motion.h3>
          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              hidden: { opacity: 0 },
            }}
          >
            {modules.map((module, index) => (
              <motion.span
                key={index}
                className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm"
                variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}
              >
                {module}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Parcours Professionnel */}
        <div>
          <motion.h3
            className="text-3xl font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            💼 Parcours Professionnel
          </motion.h3>
          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h4 className="text-2xl font-semibold">{experience.title}</h4>
                <p className="text-gray-600">{experience.company}</p>
                <p className="text-sm text-gray-500">{experience.period}</p>
                <p className="mt-4 text-gray-700">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;

"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"

const experiences = [
  {
    poste: "Dev Department Manager",
    entreprise: "ETIC (student club)",
    periode: "2020 - 2023",
    missions: [
      "Website development for club events",
      "Workshops presentation (Git, React) and member training",
      "Mentoring during hackathons for new members",
    ],
    stack: ["Javascript", "Python", "Management", "Automation"],
    image: "/images/training1.webp",
  },
  {
    poste: "Web Development Internship",
    entreprise: "ASCA: Algerian Civil Society Association(Algiers)",
    periode: "May - September 2021",
    missions: [
      "Development with modern technologies: PHP Symphony, Vue js,Bootstrap",
      "Database management with Postgresql",
      "Collaboration with team members using Git/Github",
    ],
    stack: ["PHP", "Vue.js", "Bootstrap", "Refine.js", "Github","Postgresql"],
    image: "/images/morad.webp",
  },
  {
    poste: "Intern -> Front-end Web Developer",
    entreprise: "KB Dev (Oran)",
    periode: "May 2022 - December 2023",
    missions: [
      "Development with modern technologies: Strapi.js, Refine.js, React, Next.js, Tailwind CSS, MUI",
      "Application testing with SonarQube and Selenium",
      "Collaboration using Scrum, Git, and Jira for an Agile approach",
      "Participation in continuous deployment (CI/CD) with GitHub Actions and Docker",
    ],
    stack: ["React", "Next.js", "Strapi.js", "Refine.js", "Github", "Agile", "Figma", "Jira", "Wordpress","MySQL"],
    image: "/images/kb.jpg",
  },
  {
    poste: "Intern -> Project Manager Apprentice",
    entreprise: "SFR",
    periode: "April 2024 - September 2025",
    missions: [
      "Design of a project management tool",
      "Modeling of project management processes",
      "Report creation using Tableau",
      "ETL development for reporting with Pentaho",
    ],
    stack: ["Unix shell","rsyslog","Tableau", "Pentaho", "Project Management", "Sharepoint", "Excel"],
    image: "/images/sfr-logo.png",
  },
]

const formations = [
  {
    formation: "Software Engineering",
    école: "National School of Computer Science (ESI) Algiers",
    periode: "2019 - 2023",
    modules_majeurs: [
      "Algorithms and data structures",
      "Object-oriented programming",
      "Statistics",
      "Databases",
      "Machine Learning",
    ],
    modules_mineurs: ["Networks", "Analysis and algebra", "Electronics"],
    logo: "/images/esi.png",
  },
  {
    formation: "MIAGE Master - Web Engineering",
    école: "Paris-Saclay University (Évry)",
    periode: "2023 - 2025",
    modules_majeurs: ["Web development", "Project management", "Software architecture", "Databases"],
    modules_mineurs: ["Financial management", "Digital law", "Operational research", "Data analysis"],
    logo: "/images/paris-saclay.png",
  },
]

const ExperienceCard = ({ experience, index }: { experience: (typeof experiences)[0]; index: number }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/5 rounded-xl p-8 backdrop-blur-sm"
    >
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">{experience.poste}</h3>
        <p className="text-purple-400">
          {experience.entreprise} - {experience.periode}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          {experience.missions.map((mission, idx) => (
            <li key={idx}>{mission}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.stack.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 text-sm bg-white/10 rounded-full text-purple-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="relative h-[200px] md:h-full rounded-xl overflow-hidden">
        <Image
          src={experience.image || "/placeholder.svg"}
          alt={experience.entreprise}
          layout="fill"
          objectFit="contain"
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>
    </motion.div>
  )
}

const EducationCard = ({ formation, index }: { formation: (typeof formations)[0]; index: number }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white/5 rounded-xl p-8 backdrop-blur-sm"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{formation.formation}</h3>
          <p className="text-purple-400">
            {formation.école} - {formation.periode}
          </p>
        </div>
        <div className="relative w-20 h-20 bg-white rounded-full p-2 flex items-center justify-center">
          <Image
            src={formation.logo || "/placeholder.svg"}
            alt={`${formation.école} logo`}
            width={60}
            height={60}
            objectFit="contain"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Major Modules</h4>
          <div className="flex flex-wrap gap-2">
            {formation.modules_majeurs.map((module, idx) => (
              <span key={idx} className="px-3 py-1 text-sm bg-purple-500/20 rounded-full text-purple-300">
                {module}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Minor Modules</h4>
          <div className="flex flex-wrap gap-2">
            {formation.modules_mineurs.map((module, idx) => (
              <span key={idx} className="px-3 py-1 text-sm bg-blue-500/20 rounded-full text-blue-300">
                {module}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const AboutJourney = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  return (
    <section className="relative min-h-screen bg-black text-white py-20 overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-bl from-purple-600 via-blue-600 to-transparent opacity-20 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute top-0 left-0 w-1/3 h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-transparent opacity-20 blur-3xl"
        style={{ y: y2 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Experience</h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            A journey through my professional experiences and growth in the tech industry.
          </p>
        </motion.div>

        <div className="space-y-8 mb-32">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Education</h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            My academic journey and the knowledge I've acquired along the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formations.map((formation, index) => (
            <EducationCard key={index} formation={formation} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutJourney

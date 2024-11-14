// src/app/projects/page.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "project-one",
    title: "Project One",
    description: "A beautiful design project.",
    imageUrl: "/images/project1.webp",
  },
  {
    id: "project-two",
    title: "Project Two",
    description: "An amazing development project.",
    imageUrl: "/images/project1.webp",
  },
  {
    id: "project-three",
    title: "Project Three",
    description: "A creative branding project.",
    imageUrl: "/images/project1.webp",
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 lg:px-24">
      <h1 className="text-4xl font-bold text-center mb-12">Our Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/images/project1.webp"
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold">{project.title}</h2>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

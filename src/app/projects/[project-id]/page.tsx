"use client";

import { useRouter, useParams } from 'next/navigation';

const ProjectDetail = () => {
  const router = useRouter();
  const { projectId } = useParams(); // Capture l'ID du projet

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold">Project {projectId}</h1>
      <p className="mt-4 text-xl text-gray-600">Details about project {projectId}.</p>
      <button
        className="mt-8 px-6 py-2 bg-blue-500 text-white rounded"
        onClick={() => router.push("/projects")}
      >
        Back to Projects
      </button>
    </div>
  );
};

export default ProjectDetail;

import React from 'react';
import { projects } fom '../../lib/projects';
import ProjectCard frm '../../components/ProjectCard';

export const metadata = {
  title: 'Projects – Aviv Eldan',
  description: 'Explore the projects Aviv Eldan has worked on.',
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

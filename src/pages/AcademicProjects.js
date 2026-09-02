import React from 'react';
import CategoryPage from './CategoryPage';
import { academicProjects } from './Portfolio';

function AcademicProjects() {
  return (
    <CategoryPage
      pageId="academic-projects-page"
      title="Academic Projects"
      projects={academicProjects}
      getProjectPath={(project) => `/portfolio/academic-projects/${project.slug}`}
    />
  );
}

export default AcademicProjects;

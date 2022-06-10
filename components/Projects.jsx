import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import carhub from '../public/assets/projects/CarHub.png';
import stockz from '../public/assets/projects/project2.PNG'
import gainZ from '../public/assets/projects/project1.PNG'
import llc from '../public/assets/projects/project3.PNG'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What Ive Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Car Parts '
            backgroundImg={carhub}
            projectUrl='/carhub'
          />
          <ProjectItem
            title='gainZ'
            backgroundImg={stockz}
            projectUrl='/gainz'
          />
          <ProjectItem
            title='stockZ'
            backgroundImg={gainZ}
            projectUrl='/stockz'
          />
          <ProjectItem
            title='LLC'
            backgroundImg={llc}
            projectUrl='/llc'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
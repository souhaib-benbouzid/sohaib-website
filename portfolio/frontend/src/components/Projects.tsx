'use client';
import { Project } from '@/types';
import { BeakerIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Pagination from './Pagination';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

const Projects = () => {
  const data: {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    projects: Project[];
  } = {
    title: 'Projects',
    subtitle: 'Personal projects, open source contributions and more.',
    icon: <BeakerIcon />,
    projects: [
      {
        id: '1',
        primary: {
          title: 'GitHub Repository',
          href: '',
        },
        secondary: {
          href: '',
          title: 'View Project',
        },
        subtitle:
          'A set of suggested solution for Leetcode problems using TypeScript.',
        technologies: [
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png',
            tag: 'react',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/reactivex-logo-png-transparent.png',
            tag: 'rxjs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png',
            tag: 'nodejs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/reactivex-logo-png-transparent.png',
            tag: 'rxjs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png',
            tag: 'nodejs',
          },
        ],
        title: 'leetcode',
      },
      {
        id: '1',
        primary: {
          title: 'GitHub Repository',
          href: '',
        },
        secondary: {
          href: '',
          title: 'View Project',
        },
        subtitle:
          'A set of suggested solution for Leetcode problems using TypeScript.',
        technologies: [
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png',
            tag: 'react',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/reactivex-logo-png-transparent.png',
            tag: 'rxjs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png',
            tag: 'nodejs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/reactivex-logo-png-transparent.png',
            tag: 'rxjs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png',
            tag: 'nodejs',
          },
        ],
        title: 'leetcode',
      },
      {
        id: '1',
        primary: {
          title: 'GitHub Repository',
          href: '',
        },
        secondary: {
          href: '',
          title: 'View Project',
        },
        subtitle:
          'A set of suggested solution for Leetcode problems using TypeScript.',
        technologies: [
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png',
            tag: 'react',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/reactivex-logo-png-transparent.png',
            tag: 'rxjs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png',
            tag: 'nodejs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/reactivex-logo-png-transparent.png',
            tag: 'rxjs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png',
            tag: 'nodejs',
          },
        ],
        title: 'leetcode',
      },
      {
        id: '1',
        primary: {
          title: 'GitHub Repository',
          href: '',
        },
        secondary: {
          href: '',
          title: 'View Project',
        },
        subtitle:
          'A set of suggested solution for Leetcode problems using TypeScript.',
        technologies: [
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png',
            tag: 'react',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/reactivex-logo-png-transparent.png',
            tag: 'rxjs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png',
            tag: 'nodejs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/reactivex-logo-png-transparent.png',
            tag: 'rxjs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png',
            tag: 'nodejs',
          },
        ],
        title: 'leetcode',
      },
      {
        id: '1',
        primary: {
          title: 'GitHub Repository',
          href: '',
        },
        secondary: {
          href: '',
          title: 'View Project',
        },
        subtitle:
          'A set of suggested solution for Leetcode problems using TypeScript.',
        technologies: [
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png',
            tag: 'react',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/reactivex-logo-png-transparent.png',
            tag: 'rxjs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png',
            tag: 'nodejs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/reactivex-logo-png-transparent.png',
            tag: 'rxjs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png',
            tag: 'nodejs',
          },
        ],
        title: 'leetcode',
      },
      {
        id: '1',
        primary: {
          title: 'GitHub Repository',
          href: '',
        },
        secondary: {
          href: '',
          title: 'View Project',
        },
        subtitle:
          'A set of suggested solution for Leetcode problems using TypeScript.',
        technologies: [
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png',
            tag: 'react',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/reactivex-logo-png-transparent.png',
            tag: 'rxjs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png',
            tag: 'nodejs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/reactivex-logo-png-transparent.png',
            tag: 'rxjs',
          },
          {
            icon: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png',
            tag: 'nodejs',
          },
        ],
        title: 'leetcode',
      },
    ],
  };
  const [active, setActive] = useState(1);
  const handleOpen = (value: number) => {
    setActive(value);
  };

  return (
    <div className='pb-20'>
      <SectionHeader
        title={data.title}
        subtitle={data.subtitle}
        icon={data.icon}
      />
      <div className='flex flex-wrap items-center justify-center max-w-screen-lg m-auto mt-6'>
        {data.projects.map((project) => (
          <ProjectCard className='m-4' key={project.id} {...project} />
        ))}
        <Pagination
          handleUpdate={handleOpen}
          className='my-12'
          total={data.projects.length}
          active={active}
        />
      </div>
    </div>
  );
};

export default Projects;

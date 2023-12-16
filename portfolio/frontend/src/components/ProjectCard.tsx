import { Technology } from '@/types';
import {
  CodeBracketIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  technologies: Technology[];
  primary: {
    title: string;
    href: string;
  };
  secondary: {
    title: string;
    href: string;
  };
}

const ProjectCard = ({
  title,
  subtitle,
  technologies,
  primary,
  secondary,
  className,
  ...props
}: Props) => {
  return (
    <div
      className={`w-72 bg-black bg-opacity-90 px-4 py-8 rounded-lg ${className}`}
      {...props}
    >
      <h1 className='text-4xl font-extrabold text-center mb-4'>{title}</h1>
      <p className='text-base opacity-80 mb-8 text-center'>{subtitle}</p>
      <h2 className='text-xl font-bold mb-4'># Tech-Stack</h2>
      <div className='flex flex-wrap gap-4 mb-8'>
        {technologies.map((item) => (
          <Image
            key={item.tag}
            src={item.icon}
            width={36}
            height={36}
            alt={item.tag}
          />
        ))}
      </div>
      <div className='flex flex-col md:flex-wrap md:flex-row'>
        <Link
          href={primary.href}
          className='btn btn-primary text-base w-full mb-2'
        >
          <InformationCircleIcon className='w-6' />
          {primary.title}
        </Link>
        <Link
          href={secondary.href}
          className='btn btn-secondary text-base w-full'
        >
          <CodeBracketIcon className='w-6' />
          {secondary.title}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

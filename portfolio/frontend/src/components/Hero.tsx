import {
  CodeBracketIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';
import { Grid } from './Grid';

const Hero = () => {
  const data = {
    name: 'souhaib',
    job: 'Software Engineer',
    subtitle:
      'Punctual, Versatile and Simplicity focused. I worked on enterprise, open-source, and freelance projects from conception to deployment, and maintenance.',
    primary: {
      title: 'Contact Me',
      href: '#contact',
    },
    secondary: {
      title: 'View Projects',
      href: '#projects',
    },
  };

  return (
    <Grid className='px-4 md:px-0'>
      <div className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-auto'>
        <h1 className='text-5xl font-black  mb-8 text-white text-opacity-75'>
          Hi,
          <br /> I&apos;m{' '}
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
            {data.name}
          </span>
          ,<br /> A{' '}
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
            {data.job}
          </span>
        </h1>
        <p className='mb-12 max-w-prose text-lg font-medium text-white text-opacity-40'>
          {data.subtitle}
        </p>
        <div className='flex flex-col md:flex-wrap md:flex-row'>
          <a
            href={data.primary.href}
            className='btn btn-primary w-full md:w-1/3 mb-4 md:mr-4'
          >
            <InformationCircleIcon className='w-6' />
            {data.primary.title}
          </a>
          <a
            href={data.secondary.href}
            className='btn btn-secondary w-full md:w-1/3'
          >
            <CodeBracketIcon className='w-6' />
            {data.secondary.title}
          </a>
        </div>
      </div>
    </Grid>
  );
};

export default Hero;

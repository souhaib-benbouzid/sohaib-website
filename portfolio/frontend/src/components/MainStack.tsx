import { Technology } from '@/types';
import { CubeTransparentIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

type Props = {};

const MainStack = (props: Props) => {
  const technologies: Technology[] = [
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
  ];

  const data = {
    title: 'Main Stack',
    subtitle: 'Technologies I use in my projects',
    icon: <CubeTransparentIcon />,
    technologies,
  };
  return (
    <div className='bg-base-300 py-16'>
      <SectionHeader
        title={data.title}
        subtitle={data.subtitle}
        icon={data.icon}
      />
      <div className='flex flex-wrap items-center justify-center max-w-screen-lg m-auto'>
        {technologies.map((item) => (
          <Image
            src={item.icon}
            alt={item.tag}
            key={item.tag}
            width={48}
            height={48}
            className='w-14 m-4 md:w-16  lg:m-6 lg:w-24'
          />
        ))}
      </div>
    </div>
  );
};

export default MainStack;

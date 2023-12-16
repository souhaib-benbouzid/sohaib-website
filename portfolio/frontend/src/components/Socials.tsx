import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
import EasyInfo from './EasyInfo';
import { Grid } from './Grid';
import SectionHeader from './SectionHeader';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Socials = (props: Props) => {
  const data = {
    title: 'let’s have a chat',
    subtitle: 'Reach out and check out my latest updates',
    icon: <ChatBubbleOvalLeftEllipsisIcon />,
    socials: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/souhaib-benbouzid/',
        value: 'https://www.linkedin.com/in/souhaib-benbouzid/',
      },
      {
        label: 'Email',
        href: 'souhaib.benbouzid@gmail.com',
        value: 'souhaib.benbouzid@gmail.com',
      },
      {
        label: 'twitter',
        href: 'https://twitter.com/souhaib_bb',
        value: 'https://twitter.com/souhaib_bb',
      },
      {
        label: 'Github',
        href: 'https://github.com/souhaib-benbouzid',
        value: 'https://github.com/souhaib-benbouzid',
      },
    ],
  };

  return (
    <div className={`bg-base-300 ${props.className}`} {...props}>
      <Grid>
        <div className='m-auto col-span-4 md:col-span-8 lg:col-span-12'>
          <SectionHeader
            title={data.title}
            subtitle={data.subtitle}
            icon={data.icon}
          />
          <div className='mt-6 md:mx-auto md:flex max-w-screen-lg flex-wrap items-center justify-center xl:max-w-none'>
            {data.socials.map((item) => (
              <EasyInfo
                key={item.label}
                className='w-72 m-auto mb-4 md:m-2 md:w-1/3 lg:w-1/5 '
                label={item.label}
                href={item.href}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Socials;

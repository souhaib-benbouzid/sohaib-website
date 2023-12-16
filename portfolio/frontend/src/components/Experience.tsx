import { PuzzlePieceIcon } from '@heroicons/react/24/solid';
import SectionHeader from './SectionHeader';

type Props = {};

const Experience = (props: Props) => {
  const data = {
    title: 'Experience',
    subtitle: 'Chronological representation of my career and expertise',
    icon: <PuzzlePieceIcon />,
  };

  return (
    <div className='py-20'>
      <SectionHeader
        title={data.title}
        subtitle={data.subtitle}
        icon={data.icon}
      />
    </div>
  );
};

export default Experience;

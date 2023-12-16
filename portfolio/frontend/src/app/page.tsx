import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MainStack from '@/components/MainStack';
import Projects from '@/components/Projects';
import Socials from '@/components/Socials';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Socials className='bg-base-300 w-full py-20' />
      <MainStack className='bg-base-300 w-full pb-20' />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

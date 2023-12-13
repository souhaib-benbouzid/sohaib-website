import { routes } from '@/constant';
import { AdjustmentsVerticalIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Grid } from './Grid';
import Logo from './Logo';
import { SearchBar } from './SearchBar';
import { ThemeChanger } from './ThemeChanger';

const Header = () => {
  const items: { Component: React.ReactNode; href: string }[] = [
    {
      Component: <>Projects</>,
      href: routes.projects,
    },
    {
      Component: <>Blog</>,
      href: routes.blog,
    },
  ];

  const Drawer = () => (
    <div className='drawer '>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <label htmlFor='my-drawer' className='cursor-pointer drawer-button'>
          <AdjustmentsVerticalIcon className='w-9' />
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
          <li className='font-semibold text-lg my-2 mx-4 flex flex-row'>
            English
          </li>
          <li className='mb-4'>
            <ThemeChanger />
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className='bg-base-300 w-full text-content h-14 shadow-sm'>
      <Grid className='px-2 py-3 place-content-center'>
        <div className='flex col-span-4 md:col-span-8 lg:col-span-12 items-center'>
          <Link
            href={routes.home}
            className='text-lg font-semibold link link-hover '
          >
            <Logo className='w-8' />
          </Link>

          <ul className='flex ml-auto'>
            {items.map((item, index) => (
              <li className='ml-6 flex items-center' key={index}>
                <Link
                  href={item.href}
                  className='text-lg font-semibold link link-hover '
                >
                  {item.Component}
                </Link>
              </li>
            ))}
            <li className='ml-6 flex items-center cursor-pointer'>
              <SearchBar />
            </li>
            <li className='ml-3 flex items-center'>
              <Drawer />
            </li>
          </ul>
        </div>
      </Grid>
    </div>
  );
};

export default Header;

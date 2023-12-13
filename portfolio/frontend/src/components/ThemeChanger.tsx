'use client';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

export const ThemeChanger = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <select data-choose-theme className='font-md text-lg font-semibold'>
      <option value=''>Default</option>
      <option value='dark'>Dark</option>
      <option value='light'>Light</option>
    </select>
  );
};

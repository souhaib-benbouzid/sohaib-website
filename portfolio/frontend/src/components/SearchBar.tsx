'use client';

import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';

export const SearchBar = () => {
  return (
    <>
      <MagnifyingGlassCircleIcon
        className='w-9'
        onClick={() =>
          (document as any).getElementById('search_modal').showModal()
        }
      />
      <dialog id='search_modal' className='modal'>
        <div className='modal-box'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>

          <label className='form-control w-full '>
            <div className='label'>
              <span className='label-text text-lg font-bold text-base-content pb-2'>
                Search Projects and Articles
              </span>
            </div>

            <div className='flex flex-col md:flex-row'>
              <input
                type='text'
                placeholder='Type here'
                className='input input-bordered input-primary w-full mb-2'
              />
              <button className='btn btn-primary  md:ml-2 w-full md:w-auto'>
                Search
              </button>
            </div>
          </label>

          <p className='pt-4  text-sm'>
            Press <kbd className='kbd'>ESC</kbd> to close
          </p>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

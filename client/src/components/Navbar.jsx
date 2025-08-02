import React from 'react';
import { MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { UserAvatar } from './UserAvatar';
import { setOpenSidebar } from "../redux/slices/authSlice";
import NotificationPanel from './NotificationPanel.jsx';

export const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className='flex justify-between items-center bg-white dark:bg-[#1f1f1f] px-4 py-3 2xl:py-4 sticky z-10 top-0 shadow-sm border-b border-gray-200 dark:border-gray-800'>
      <div className='flex items-center gap-4'>
        <button
          onClick={() => dispatch(setOpenSidebar(true))}
          className='text-2xl text-gray-500 block md:hidden'
        >
          ☰
        </button>

        <div className='w-full flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6] dark:bg-gray-800'>
          <MdOutlineSearch className='text-gray-500 text-xl' />
          <input
            type='text'
            placeholder='Search...'
            className='flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800 dark:text-white'
          />
        </div>
      </div>

      <div className='flex gap-2 items-center'>
        <NotificationPanel />
        <UserAvatar />
      </div>
    </div>
  );
};

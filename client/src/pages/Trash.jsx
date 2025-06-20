import React, { useState } from 'react';
import {
  MdDelete,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
  MdOutlineRestore,
  MdAttachFile
} from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import { Title } from '../components/Title';
import Button from '../components/Button'; // Keep your local Button
import clsx from 'clsx';
import { BGS, formatDate, PRIOTITYSTYELS, TASK_TYPE } from '../utils';
import {UserInfo} from '../components/UserInfo'; // Assuming you have this component

const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
};

const Trash = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState(null);
  const [type, setType] = useState("delete");
  const [selected, setSelected] = useState("");

  const TableHeader = () => (
    <thead className='border-b border-gray-300'>
      <tr className='text-black text-left'>
        <th className='py-2'>Task Title</th>
        <th className='py-2'>Priority</th>
        <th className='py-2'>Stage</th>
        <th className='py-2 line-clamp-1'>Modified On</th>
      </tr>
    </thead>
  );

  const TableRow = ({ task }) => (
    <tr className='border-b border-gray-200 text-gray-600 hover:bg-gray-300/10'>
      <td className='py-2'>
        <div className='flex items-center gap-2'>
          <div className={clsx("w-4 h-4 rounded-full", TASK_TYPE[task.stage])} />
          <p className='w-full line-clamp-2 text-base text-black'>{task?.title}</p>
        </div>
      </td>
      <td className='py-2'>
        <div className={"flex gap-1 items-center"}>
          <span className={clsx("text-lg", PRIOTITYSTYELS[task?.priority])}>{ICONS[task?.priority]}</span>
        </div>
      </td>
      <td className='py-2'>
        <span className='text-sm text-gray-600'>{formatDate(new Date(task?.date))}</span>
      </td>
      <td className='py-2'>
        <div className="flex items-center gap-3">
          <div className="flex gap-1 items-center text-sm text-gray-600">
            <BiMessageAltDetail />
            <span>{task?.activities?.length}</span>
          </div>
          <div className="flex gap-1 items-center text-sm text-gray-600">
            <MdAttachFile />
            <span>{task?.assets?.length}</span>
          </div>
          <div className="flex gap-1 items-center text-sm text-gray-600">
            <FaList />
            <span>0/{task?.subTask?.length}</span>
          </div>
        </div>
      </td>
      <td className='py-2'>
        <div className='flex'>
          {task?.team?.map((m, index) => (
            <div
              key={m._id}
              className={clsx("flex w-7 h-7 rounded-full text-white items-center justify-center text-sm mr-1", BGS[index % BGS.length])}
            >
              <UserInfo user={m} />
            </div>
          ))}
        </div>
      </td>
      <td className='py-2 flex gap-2 md:gap-4 justify-end'>
        <Button
          className='text-blue-600 hover:text-blue-500 sm:px-0 text-sm md:text-base'
          label='Edit'
          type='button'
        />
        <Button
          className='text-red-700 hover:text-red-500 sm:px-0 text-sm md:text-base'
          label='Delete'
          type='button'
        />
      </td>
    </tr>
  );

  return (
    <>
      <div className='w-full md:px-1 px-0 mb-6'>
        <div className='flex items-center justify-between mb-8'>
          <Title title='Trashed Tasks' />
          <div className='flex gap-2 md:gap-2 items-center'>
            <Button
              label='Restore All'
              icon={<MdOutlineRestore className='text-lg hidden md:flex' />}
            />
            <Button
              label='Delete All'
              icon={<MdDelete className='text-lg hidden md:flex' />}
              className='flex flex-row-reverse gap-1 items-center text-red-600 text-sm md:text-base rounded-md 2xl:py-2.5'
            />
          </div>
        </div>
        <table className="w-full text-left">
          <TableHeader />
        </table>
      </div>
    </>
  );
};

export default Trash;

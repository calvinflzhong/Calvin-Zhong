import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1 } from 'react-icons/di';
import { SiReact, SiJava, SiLinux, SiTailwindcss, SiPhp } from 'react-icons/si';
import { ImGit } from 'react-icons/im';
import { IoLogoNodejs } from 'react-icons/io';
import { GrMysql } from 'react-icons/gr';

export const skillsList = [
  {
    title: 'CSS',
    icon: <DiCss3 className='w-auto h-10' />,
    text: 'text-[#ffffff]',
    background: 'bg-[#264DE4]',
  },
  {
    title: 'Git',
    icon: <ImGit className='w-auto h-10' />,
    text: 'text-[#ffffff]',
    background: 'bg-[#E44D26]',
  },
  {
    title: 'HTML',
    icon: <AiFillHtml5 className='w-auto h-10' />,
    text: 'text-[#ffffff]',
    background: 'bg-[#E44D26]',
  },
  {
    title: 'Java',
    icon: <SiJava className='w-auto h-10' />,
    text: 'text-[#ffffff]',
    background: 'bg-[#000000]',
  },
  {
    title: 'JavaScript',
    icon: <DiJavascript1 className='w-auto h-10' />,
    text: 'text-[#ffffff]',
    background: 'bg-[#e8cd00]',
  },
  {
    title: 'Linux',
    icon: <SiLinux className='w-auto h-10' />,
    text: 'text-[#ffffff]',
    background: 'bg-[#000000]',
  },
  {
    title: 'NodeJS',
    icon: <IoLogoNodejs className='w-auto h-10' />,
    text: 'text-[#91F086]',
    background: 'bg-[#000000]',
  },
  {
    title: 'PHP',
    icon: <SiPhp className='w-auto h-10' />,
    text: 'text-[#FFFFFF]',
    background: 'bg-[#9000FF]',
  },
  {
    title: 'React',
    icon: <SiReact className='w-auto h-10' />,
    text: 'text-[#15ebd9]',
    background: 'bg-[#000000]',
  },
  {
    title: 'TailwindCSS',
    icon: <SiTailwindcss className='w-auto h-10' />,
    text: 'text-[#15B4C1]',
    background: 'bg-[#151C2B]',
  },
  {
    title: 'MySQL',
    icon: <GrMysql className='w-auto h-10' />,
    text: 'text-[#000000]',
    background: 'bg-[#FFFFFF]',
  },
];

import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsPersonLinesFill} from 'react-icons/bs'
import { AiOutlineMail} from 'react-icons/ai'
const Main = () => {
  return (
    <div id='home'  className='w-full h-screen text-center'>
        <div className='max-w-[1248px] w-full h-full mx-auto p-3 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LETS BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>Hi,I'm <span className='text-red-400'>Mohiuddin</span></h1>

                <h1 className='py-2 text-gray-700'>
                    A Front-End Web developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I am a passionate web developer specialized in building websites. Currently, i am focused on building mern projects that includes both the frontend and backend.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <a href="https://github.com/DevMohi" target='_blank' rel="noreferrer">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-duration-300'>
                        <FaGithub />
                    </div>
                    </a>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-duration-300'>
                        <AiOutlineMail />
                    </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-duration-300'>
                                <BsPersonLinesFill />
                        </div> 
                </div>
                <a href="https://drive.google.com/u/3/uc?id=114NC8CTkSaxDa7TheaSlDjuRSpzQYhfX&export=download"><button className='px-8 py-2 mt-4 '>Resume</button></a>
            </div>
        </div>
    </div>
  )
}

export default Main
import React from 'react'

import HTML from '../asset/html.png';
import CSS from '../asset/css.png';
import JavaScript from '../asset/javascript.png';
import Reactjs from '../asset/react js.png';
import Nodejs from '../asset/node js.png';
import GitiHub from '../asset/github.png';
import Mongodb from '../asset/mongo db.png' ;
import Tailwindcss from '../asset/tailwindcss.png';


const Skills = () => {
  return (
    <div name="Skills" className='w-full h-screen bg-[#0a192f] text-gray-300' >
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>Skills</p>
                <p className='py-4'>// These are the technology i've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="javaScript icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Reactjs} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Nodejs} alt="Node icon" />
                    <p className='my-4'>NodeJs</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitiHub} alt="Github icon" />
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwindcss} alt="Tailwind icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongodb} alt="Mongodb icon" />
                    <p className='my-4'>Mongo db</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills
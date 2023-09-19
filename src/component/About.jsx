import React from 'react'

const About = () => {
    return (
        <div name='About' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, call me Ike, nice to meet you. Please take a look around</p>
                    </div>
                    <div>
                        <p>I am passionate about building excellence softares that improves
                            the lives of those around me. i specialize in creating sofwares
                            for clients ranging from individuals to small-business all the
                            way to large enterprise corporations. what would you do if you had
                            a software expert avalable at your fingertip?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About
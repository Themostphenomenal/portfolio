import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-[#0a192f] flex justify-center pt-[100px] items-center p-4'>
        <form method='POST' action='https://getform.io/f/08535b80-67d0-4677-90e6-d0c4fa5b514a' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an e-mail - budesoniyke@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'></input>
            <input className='my-4 p-2 bg-[#ccd6f6]' type='E-mail' placeholder='E-mail' name='E-mail'></input>
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Colaborate</button>
        </form>

    </div>
  )
}

export default Contact
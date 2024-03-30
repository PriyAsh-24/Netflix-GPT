import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] md:px-24 px-6 absolute   bg-gradient-to-r from-black'>
      <h1 className='text-2xl  md:text-5xl font-bold p-4 text-white'>{title}</h1>
      <p className='hidden md:inline-block w-5/12  p-4 mb-4 text-white'>{overview}</p>
      <div>
        <button className='mx-5 p-2 md:p-5 bg-white md:w-36 rounded-lg font-bold hover:bg-opacity-80 md:bg-opacity-100 bg-opacity-55'> ▷ PlayNow</button>
        <button className='hidden md:inline-block p-5 bg-zinc-500  w-36 rounded-lg font-bold hover:bg-opacity-95'>🛈 More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle

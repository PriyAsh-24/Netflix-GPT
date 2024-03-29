import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute   bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold p-4 text-white'>{title}</h1>
      <p className='w-5/12  p-4 mb-4 text-white'>{overview}</p>
      <div>
        <button className='mx-5 p-5 bg-white  w-36 rounded-lg font-bold hover:bg-opacity-70'> ▷ PlayNow</button>
        <button className='p-5 bg-zinc-500  w-36 rounded-lg font-bold hover:bg-opacity-95'>🛈 More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle

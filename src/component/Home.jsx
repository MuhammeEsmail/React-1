import React from 'react'
import person from "../assets/avataaars.svg"
export default function Home() {
  return (
    <div className='text-center text-white bg-home-bg pb-4'>
      <img src={person} alt='person' className='w-72 m-auto' />
      <h1 className='my-3 text-5xl font-bold'>START FRAMEWORK</h1>
      <div className='my-3 home-icon-box relative'><i className="home-icon text-3xl fa-solid fa-star relative bg-transparent mx-4"></i></div>
      <p className='my-4'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}

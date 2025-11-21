import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import image from '../../../public/female-customer-places-items-counter 2.png'

const WatchTutorial = () => {
  return (
    <div className='max-w-6xl mx-auto pb-10'>
      <Link href="video">Watch Tutorial Here</Link>

      <Image 
        src={image} 
        alt="video-placeholder"
        className="w-full h-full object-cover"
        width={800}
        height={800}
      />
    </div>
  )
}

export default WatchTutorial
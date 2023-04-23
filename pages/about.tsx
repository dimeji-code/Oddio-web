import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='md:px-[15%] pt-[10vh]'>
        <h1 className='max-md:px-7 text-3xl md:text-4xl font-semibold py-2'>About</h1>
        <p className='max-md:px-7 text-sm md:text-base'>Oddio is an e-commerce simulation of an audio store with a range of electronic devices including Speakers, Headphones and Vinyl. </p>
   
        <div className="max-md:px-7 py-10 grid grid-cols-2 gap-6">
            <div>
                <div className='w-[95px]'>
                <Image src="/style.png" alt="style" width={95} height={90}/>

                </div>
                <h2 className='text-xl py-2'>Amazing Style</h2>

                <p className='text-base'>Aesthetically pleasing designs and well crafted features for optimum comfort and usability. </p>
            </div>
            <div>
                <div className='w-[95px]'>
                <Image src="/quality.png" alt="quality" width={95} height={90}/>
                </div>
                <h2 className='text-xl py-2'>Sound Quality</h2>

                <p className='text-base'>High quality noise cancelling headphones on display. Immense sound quality features and wireless options with amazing battery life.</p>
            </div>


        </div>

    </div>
  )
}

export default About
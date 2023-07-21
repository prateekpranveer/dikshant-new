import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Plus } from 'react-feather'


//variants

const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        }
    }
}

const item = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    show: {
        opacity: 1,
        y: 0,
        trasition: {
            ease: [.6, .01, -.05, .95],
            duration: 1.6,
        }
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: 'easeInOut',
            duration: 0.8,
        }
    }
}


const images = [
    {
        img: '/12.jpg'
    },
    {
        img: '/13.jpg'
    },
    {
        img: '/14.jpg'
    },
    {
        img: '/15.jpg'
    }
]

const Top = ({ mode }: any) => {
    return (
        <div>
            {
                mode ? <>
                    <motion.div
                        className='flex gap-x-6'>
                        {
                            images.map((p, id) => (
                                <div key={id} className='w-28 h-28 overflow-hidden bg-gray-50 rounded-lg'>
                                    <Image width={100} height={100} className='h-full w-full object-cover' src={p.img} alt="" />
                                </div>
                            ))
                        }
                    </motion.div>
                </> : <>
                <div className='flex w-1/3 hover:bg-gray-300 cursor-pointer gap-x-6 mt-8 bg-gray-100 rounded-lg h-32'><button className='ml-12 flex space-x-4 font-pop-300 tracking-widest items-center'><span>SELECT ALBUM</span><span><Plus size={20} color='gray'/></span></button></div>
                </>
            }

        </div>
    )
}

export default Top
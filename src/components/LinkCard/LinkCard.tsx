import Image from 'next/image'
import React from 'react'

interface Props {
  url: string
  title: string
  image: string
}

const LinkCard = ({ url, title, image }: Props) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='min-h-[40px] flex items-center w-full rounded-md overflow-hidden bg-white px-2 py-3 text-gray-700 hover:scale-105 transition-all text-center font-semibold will-change-transform'
    >
      <div className='w-10 h-10 rounded-md overflow-hidden'>
        {image && <Image src={image} alt={title} width={40} height={40} />}
      </div>
      <div className='w-full -ml-10'>{title}</div>
    </a>
  )
}

export default LinkCard

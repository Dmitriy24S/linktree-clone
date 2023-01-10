import React from 'react'

interface Props {
  url: string
  title: string
}

const LinkCard = ({ url, title }: Props) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='min-h-[40px] block w-full  rounded-md overflow-hidden bg-white px-4 py-2 text-gray-700 hover:scale-105 transition-all text-center font-semibold'
    >
      {title}
    </a>
  )
}

export default LinkCard

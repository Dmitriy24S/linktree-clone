import React from 'react'
import GitHubIcon from '../svgs/GithubIcon'
import TwitterIcon from '../svgs/TwitterIcon'

interface Props {
  url: string
  title: string
}

const SocialLink = ({ url, title }: Props) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={`${title} link`}
      className='hover:scale-110 transition-transform h-[30px] w-[30px] flex items-center'
    >
      {url.includes('twitter') && <TwitterIcon />}
      {url.includes('github') && <GitHubIcon />}
    </a>
  )
}

export default SocialLink

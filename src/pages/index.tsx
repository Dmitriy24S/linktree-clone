import Head from 'next/head'
import Image from 'next/image'
import LinkCard from '../components/LinkCard/LinkCard'
import SocialLink from '../components/SocialLink/SocialLink'
// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })
import data from '../data/data.json'

interface Data {
  name: string
  avatar: string
  links: Link[]
  socials: Social[]
}

interface Link {
  href: string
  title: string
  image?: string
}

interface Social {
  href: string
  title: string
}

export default function Home() {
  // console.log(data)
  // {
  //   name: 'Dmitri Sh',
  //   avatar: 'https://pbs.twimg.com/profile_images/458696405846994945/TA3TSEM8_400x400.png',
  //   links: [
  //     { title: 'Personal Website', url: 'https://github.com/Dmitriy24S' },
  //     { title: 'Github', url: 'https://github.com/Dmitriy24S' },
  //     { title: 'Twitter', url: 'https://twitter.com/DevilInside/' }
  //   ],
  //   socials: [
  //     { title: 'Twitter', url: 'https://twitter.com/DevilInside/' },
  //     { title: 'Github', url: 'https://github.com/Dmitriy24S' }
  //   ]
  // }

  return (
    <>
      <Head>
        <title>Linktree Clone - Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col items-center px-8 min-h-screen text-white'>
        {/* bg-gradient-to-r from-violet-600 to-indigo-600 */}
        <Image
          src={data.avatar}
          alt={data.name}
          width={96}
          height={96}
          priority
          className='rounded-full mt-16'
        />
        <h1 className='mt-4 font-semibold text-xl tracking-wider'>@{data.name}</h1>
        <ul className='flex flex-col gap-5 mt-8 w-full max-w-3xl mx-auto'>
          {data.links.map((link) => (
            <li key={link.url}>
              <LinkCard {...link} />
            </li>
          ))}
        </ul>
        <ul className='flex gap-4 items-center mt-12'>
          {data.socials.map((social) => (
            <li key={social.url}>
              <SocialLink {...social} />
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

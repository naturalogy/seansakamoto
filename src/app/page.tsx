import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_NAME,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    type: 'website',
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: process.env.NEXT_PUBLIC_SITE_NAME,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  },
}

/** Social profile links with Bootstrap Icon class and accessible label */
const SOCIALS = [
  { href: 'https://github.com/naturalogy', icon: 'bi-github', label: 'GitHub' },
  {
    href: 'https://www.instagram.com/sean_singing_sound/',
    icon: 'bi-instagram',
    label: 'Instagram',
  },
  {
    href: 'https://www.threads.com/@sean_singing_sound',
    icon: 'bi-threads',
    label: 'Threads',
  },
  {
    href: 'https://pixabay.com/users/583455/',
    icon: 'bi-images',
    label: 'Pixabay',
  },
] as const

/** Home — digital business card */
export default function Home() {
  return (
    <div
      id='page'
      className='flex min-h-screen items-center justify-center p-6'>
      <main className='card bg-base-100 w-full max-w-sm overflow-hidden shadow-2xl'>
        {/* Gradient accent bar */}
        <div className='from-secondary via-accent to-success h-1 bg-linear-to-r' />

        <div className='card-hero'>
          <Image
            src='images/fukuoka.jpg'
            width={1080}
            height={540}
            alt='Fukuoka'
          />
        </div>

        <div className='-mt-28 flex flex-col items-center gap-6 p-8'>
          <div className='avatar'>
            <figure className='ring-offset-base-100 w-40 rounded-full ring-2 ring-white ring-offset-2'>
              <Image
                src='https://avatars.githubusercontent.com/u/11969648'
                width={460}
                height={460}
                alt='Sean Sakamoto'
              />
            </figure>
          </div>

          {/* Name */}
          <h1 className='flex flex-col items-center gap-2 font-medium'>
            <span className='font-ephesis text-5xl'>Sean Sakamoto</span>
            <span className='font-serif text-2xl' lang='ja'>
              坂本 唱音
            </span>
            <small className='text-base-content/60 font-serif text-sm'>
              /sɑkɑmoto ʃɔːn/
            </small>
          </h1>

          {/* Greeting */}
          <p className='text-center leading-relaxed'>
            Brand designer, front-end developer,
            <br />
            UX strategist, music coach/player,
            <br />
            translator, photographer, naturalist,
            <br />
            husband, father and your mate.
          </p>

          {/* Location */}
          <div className='flex items-center gap-2'>
            <i className='bi-geo-alt-fill' />
            <span>Fukuoka, Japan</span>
          </div>

          {/* Social links */}
          <nav className='flex gap-4' aria-label='Social links'>
            {SOCIALS.map(({ href, icon, label }) => (
              <Link
                key={href}
                href={href}
                className='btn btn-circle btn-neutral btn-lg'
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}>
                <i className={`${icon}`} />
              </Link>
            ))}
          </nav>
        </div>
      </main>
    </div>
  )
}

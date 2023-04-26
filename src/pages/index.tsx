import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Link
        href={{
          pathname: '/[username]',
          query: { username: 'reneg75' },
        }}
      >
      
      </Link>
      <div>Home</div>
    </main>
  )
}

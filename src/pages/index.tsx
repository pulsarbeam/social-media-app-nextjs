import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Loader from '../components/Loader'
import toast from 'react-hot-toast'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <button onClick={() => toast.success('hello!')}>ToastME</button>
    </div>
  )
}

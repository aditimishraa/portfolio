import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar/>

      <div className='container mt-24 mx-auto px-12 py-4'>
      <HeroSection/>
      </div>
    </main>
  )
}

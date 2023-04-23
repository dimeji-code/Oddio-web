import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Sidemenu from '@/components/Sidemenu'
import Landing from './landing'
import Footer from '@/components/Footer'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className="flex min-h-screen  flex-col ">
      {/* <Header/> */}
      <Landing/>
      <Footer/>
      {/* <Sidemenu /> */}
    </main>
  )
}

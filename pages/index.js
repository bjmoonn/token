import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from './components/navigation'
import Featured from './components/featured'

function Home() {
  return (
    <div className="w-full space-y-10">
      <Head>
        <title>Token</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Featured />
    </div>

  )
}


export default Home
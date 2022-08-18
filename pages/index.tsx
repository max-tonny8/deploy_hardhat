import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeContainer } from '../components/home/HomeContainer'



const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Whitelist Dapp</title>
        <meta name="description" content="Whitelist Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-[80%] my-2 mx-auto'>
        <HomeContainer />
      </section>
    </div>
  )
}

export default Home

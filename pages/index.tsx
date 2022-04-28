import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header";
import Hero from "../components/Hero";
import {useWeb3} from "@3rdweb/hooks"



// styling  with utilitiy classes using tailwind

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

const Home: NextPage = () => {
  const{address, connectWallet} = useWeb3()
  return (
    <div className=" ">
      <Head>
        <title>Open Sea clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <Header/>
       {/* hero section */}
       <Hero/>
    </div>
  )
}

export default Home

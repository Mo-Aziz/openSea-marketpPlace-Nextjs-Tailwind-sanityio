import React from 'react'

// styling classes with tailwind.
const styles = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper:  `  flex h-screen relative justify-center flex-wrap items-center `,
  copyContainer: ` md:m-4 w-1/2` ,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: ` md:p-4 flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
   < div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.copyContainer}>
            <div className={styles.title}>
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className={styles.description}>
              OpenSea is the world&apos;s first and largest NFT marketplace
            </div>
            <div className={styles.ctaContainer}>
              <button className={styles.accentedButton}>Explore</button>
              <button className={styles.button}>Create</button>
            </div>
          </div>
          {/* right section */}
          <div className={styles.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://lh3.googleusercontent.com/51ADjK-OruSkpYwOhLbW5bjc4nCwgMJG_qVx8-NbWpyUJLz_DjHZ9_1zEDTzeWTXqWa2IEJrSEOfbN02u_SJagDEpN2igIUGHtRBzA=s550"
              alt=" hero card image"
            />
            <div className={styles.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/a-/AOh14GiLCj8TEBzPWVYZYFEOWTR4WdJL-yibbVzYMosI=s96-c-rg-br100"
                alt="card info"
              />
              <div className={styles.author}>
                  <div className={styles.name}> Mad Max</div>
                  <a className='text-[#1868b7]'
                  href="https://opensea.io/assets/0xd25508dab0b8fa88e783ee065d8f78b10745dd21/3">nintendo-hero</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

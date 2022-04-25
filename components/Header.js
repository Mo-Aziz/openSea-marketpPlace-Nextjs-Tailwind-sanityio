import Image from 'next/image'
import Link from 'next/link'
import opensea from '../assets/opensea.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

// styles components with tailwind
const styles = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[1.2rem] flex h-[80px] `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

function Header() {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image src={opensea} height={40} width={40} alt="logo" />
          <div className={styles.logoText}>OpenSea</div>
        </div>
      </Link>
      <div className={styles.searchBar}>
        <div className={styles.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={styles.searchInput}
          placeholder="Search items, collection, and accounts"
        />
      </div>
      <div className={styles.headerItems}>
          <Link href="/collections">
          <div className={styles.headerItem}>Collections</div>
          </Link>
    
        <div className={styles.headerItem}>Stats</div>
        <div className={styles.headerItem}>Resources</div>
        <div className={styles.headerItem}>Create</div>
        <div className={styles.headerIcon}>
          <CgProfile />
          </div>
          <div className={styles.headerIcon}>
            <MdOutlineAccountBalanceWallet />
          </div>
        
      </div>
    </div>
  )
}

export default Header

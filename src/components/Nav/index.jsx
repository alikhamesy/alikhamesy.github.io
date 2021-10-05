import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ExternalLink from '../ExternalLink'
import Image from '../Image'
import classNames from '../../utils/classNames'
import { ScrollContext } from '../../contexts/ScrollLock'

import styles from './Nav.module.scss'

import logo from '../../assets/logo.svg'
import { ReactComponent as MenuSVG } from '../../assets/menu.svg'

const Menu = ({ onClick = () => {} }) => {
  return (
    <>
      <Link to='/'>
        <Image src={logo} className={styles.logo} alt="Ali's Logo" />
      </Link>
      <div className={styles.links}>
        <Link onClick={onClick} to='/'>
          Home
        </Link>
        <Link onClick={onClick} to='/about'>
          About
        </Link>
        <Link onClick={onClick} to='/work'>
          Work
        </Link>
        <ExternalLink href='/Ali Khamesy Resume.pdf'>Resume</ExternalLink>
        <Link onClick={onClick} to='/gallery'>
          Gallery
        </Link>
      </div>
    </>
  )
}

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false)
  const { dispatch } = useContext(ScrollContext)

  useEffect(() => {
    dispatch({ type: isOpen ? 'LOCK' : 'UNLOCK' })
  }, [isOpen])

  return (
    <div className={classNames(styles.mobile, isOpen && styles.open)}>
      <div className={styles.background} onClick={() => setOpen(false)}></div>
      <div className={styles.menu}>
        <Menu onClick={() => setOpen(false)} />
      </div>
      <button onClick={() => setOpen(!isOpen)} className={styles.button}>
        <MenuSVG className={styles.icon} />
      </button>
    </div>
  )
}

const DesktopNav = () => {
  return (
    <div className={styles.desktop}>
      <Menu />
    </div>
  )
}

const Nav = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 900px)').matches
  )

  useEffect(() => {
    const checkWidth = e => {
      const mobileCheck = window.matchMedia('(max-width: 900px)').matches
      if (isMobile !== mobileCheck) setIsMobile(mobileCheck)
    }

    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [isMobile])

  return isMobile ? <MobileNav /> : <DesktopNav />
}

export default Nav

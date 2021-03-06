import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ExternalLink from '../ExternalLink'
import Image from '../Image'
import classNames from '../../utils/classNames'
import { ScrollContext } from '../../contexts/ScrollLock'

import styles from './Nav.module.scss'

import logo from '../../assets/logo.svg'
import { ReactComponent as MenuSVG } from '../../assets/menu.svg'
import { LINKS } from '../../assets/data'

const Menu = ({ onClick = () => {}, showSocials }) => {
  return (
    <>
      <Link onClick={onClick} to='/'>
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
        <Link onClick={onClick} to='/gallery'>
          Gallery
        </Link>
        <ExternalLink href={LINKS.resume.href}>
          {LINKS.resume.display}
        </ExternalLink>
        {showSocials && (
          <>
            <ExternalLink href={LINKS.email.href}>
              {LINKS.email.display}
            </ExternalLink>
            <ExternalLink href={LINKS.linkedin.href}>
              {LINKS.linkedin.display}
            </ExternalLink>
            <ExternalLink href={LINKS.github.href}>
              {LINKS.github.display}
            </ExternalLink>
          </>
        )}
      </div>
    </>
  )
}

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false)
  const { dispatch } = useContext(ScrollContext)

  useEffect(() => {
    dispatch({ type: isOpen ? 'LOCK' : 'UNLOCK' })
    // eslint-disable-next-line
  }, [isOpen])

  const onNavigate = () => {
    setOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className={classNames(styles.mobile, isOpen && styles.open)}>
      <div className={styles.background} onClick={() => setOpen(false)}></div>
      <div className={styles.menu}>
        <Menu onClick={onNavigate} showSocials />
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
    window.matchMedia('(max-width: 875px)').matches
  )

  useEffect(() => {
    const checkWidth = e => {
      const mobileCheck = window.matchMedia('(max-width: 875px)').matches
      if (isMobile !== mobileCheck) setIsMobile(mobileCheck)
    }

    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [isMobile])

  return isMobile ? <MobileNav /> : <DesktopNav />
}

export default Nav

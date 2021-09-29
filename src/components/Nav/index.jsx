import { Link } from 'react-router-dom'
import ExternalLink from '../ExternalLink'
import Image from '../Image'

import styles from './Nav.module.scss'

import logo from '../../assets/logo.svg'

const Nav = () => {
  return (
    <div className={styles.container}>
      <Link to='/'>
        <Image src={logo} className={styles.logo} alt="Ali's Logo" />
      </Link>
      <div className={styles.links}>
        <Link to='/about'>About</Link>
        <Link to='/work'>Work</Link>
        <ExternalLink href='/Ali Khamesy Resume.pdf'>Resume</ExternalLink>
        <Link to='/gallery'>Gallery</Link>
      </div>
    </div>
  )
}

export default Nav

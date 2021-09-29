import { Link } from 'react-router-dom'

import Image from '../Image'

import styles from './Nav.module.scss'

import logo from '../../assets/logo.svg'

const Nav = ({ className }) => {
  return (
    <div className={styles.container}>
      <Link to='/'>
        <Image src={logo} alt="Ali's Logo" />
      </Link>
      <div className={styles.links}>
        <Link to='/about'>About</Link>
        <Link to='/work'>Work</Link>
        <Link to='/resume'>Resume</Link>
        <Link to='/gallery'>Gallery</Link>
      </div>
    </div>
  )
}

export default Nav

import { Link } from 'react-router-dom'

import styles from './Nav.module.scss'

import logo from '../../assets/logo.svg'

const Projects = ({ className }) => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Ali's Logo" />
      <div className={styles.links}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/work'>Work</Link>
        <Link to='/resume'>Resume</Link>
        <Link to='/gallery'>Gallery</Link>
      </div>
    </div>
  )
}

export default Projects

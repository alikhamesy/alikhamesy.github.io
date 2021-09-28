import Projects from '../../components/Projects'

import styles from './Home.module.css'

import wts from '../../assets/wts 1.png'

const projects = [
  {
    src: wts,
    name: 'Internship @ Microsoft',
    description:
      'Reduced overhead in creating full stack web apps by creating Web Template Studio.'
  },
  {
    src: wts,
    name: 'Internship @ Microsoft',
    description:
      'Reduced overhead in creating full stack web apps by creating Web Template Studio.'
  },
  {
    src: wts,
    name: 'Internship @ Microsoft',
    description:
      'Reduced overhead in creating full stack web apps by creating Web Template Studio.'
  }
]

const Home = () => {
  return (
    <div className={styles.container}>
      <Projects projects={projects} />
    </div>
  )
}

export default Home

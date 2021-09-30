import Projects from '../../components/Projects'

import styles from './Work.module.scss'

import { projects } from '../../assets/data'

const Work = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projects}>All the projects I've worked on.</div>
      <Projects projects={projects} />
    </div>
  )
}

export default Work

import Projects from '../../components/Projects'

import styles from './Work.module.scss'

import { selectedProjects } from '../../assets/data'

const Work = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projects}>All the projects I've worked on.</div>
      <Projects projects={selectedProjects} />
    </div>
  )
}

export default Work

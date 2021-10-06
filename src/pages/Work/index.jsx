import Projects from '../../components/Projects'

import styles from './Work.module.scss'

import { PROJECTS } from '../../assets/data'

const Work = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projects}>{PROJECTS.title}</div>
      <Projects projects={PROJECTS.list} />
    </div>
  )
}

export default Work

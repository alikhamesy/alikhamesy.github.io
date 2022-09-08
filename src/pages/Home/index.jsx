import Projects from '../../components/Projects'
import Break from '../../components/Break'

import styles from './Home.module.scss'

import { HOME, selectedProjects } from '../../assets/data'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.splash}>
        <div className={styles.title}>{HOME.header}</div>
        <div className={styles.subtitle}>{HOME.subHeader}</div>
      </div>
      <Break />
      <div className={styles.projects}>{HOME.work}</div>
      <Projects projects={selectedProjects} />
      <Break />
      {HOME.lookingForWork && (
        <div className={styles.workTogether}>
          <div className={styles.subject}>{HOME.workTogether}</div>
          <div className={styles.message}>{HOME.lookingFor}</div>
        </div>
      )}
    </div>
  )
}

export default Home

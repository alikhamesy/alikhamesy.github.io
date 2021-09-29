import Projects from '../../components/Projects'
import Break from '../../components/Break'

import styles from './Home.module.scss'

import { selectedProjects } from '../../assets/data'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.splash}>
        <div className={styles.title}>
          Hi I’m Ali, a 4th Year Computer Science Student based out of Vancouver
          who’s interested in Software Development.
        </div>
        <div className={styles.subtitle}>
          Previously at Microsoft & SAP maybe there are more things you want to
          say here.
        </div>
      </div>
      <Break />
      <div className={styles.projects}>Selected Work</div>
      <Projects projects={selectedProjects} />
      <Break />
      <div className={styles.workTogether}>
        <div className={styles.subject}>Want to Work Together?</div>
        <div className={styles.message}>
          Currently looking for software developer positions at companies who
          want to revolutionize and innovate for tomorrow.
        </div>
      </div>
    </div>
  )
}

export default Home

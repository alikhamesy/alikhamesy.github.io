import Project from '../Project'
import styles from './Projects.module.css'

const Projects = ({ projects }) => {
  return (
    <div className={styles.container}>
      {projects.map(project => (
        <div className={styles.project} key={project.description}>
          <Project {...project} />
        </div>
      ))}
    </div>
  )
}

export default Projects

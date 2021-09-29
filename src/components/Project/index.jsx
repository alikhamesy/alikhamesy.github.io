import Image from '../Image'
import styles from './Project.module.scss'
import Break from '../Break'

const Project = ({ name, src, description }) => {
  return (
    <div className={styles.container}>
      <Image src={src} className={styles.banner} />
      <Break className={styles.break} />
      <div className={styles.text}>
        <div className={styles.title}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  )
}

export default Project

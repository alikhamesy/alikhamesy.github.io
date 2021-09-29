import Image from '../Image'
import styles from './Project.module.scss'
import Break from '../Break'
import TechChip from '../TechChip'

const Project = ({ name, src, description, chips = [] }) => {
  return (
    <div className={styles.container}>
      <Image src={src} className={styles.banner} />
      <Break className={styles.break} />
      <div className={styles.text}>
        <div className={styles.title}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.chips}>
        {chips.map(chip => (
          <TechChip>{chip}</TechChip>
        ))}
      </div>
    </div>
  )
}

export default Project

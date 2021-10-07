import Image from '../Image'
import styles from './Project.module.scss'
import Break from '../Break'
import TechChip from '../TechChip'
import ExternalLink from '../ExternalLink'

const Project = ({ name, href, src, description, chips = [] }) => {
  return (
    <ExternalLink href={href} className={styles.container}>
      <div className={styles.splash}>
        <Image src={src} className={styles.banner} />
        <div className={styles.chips}>
          {chips.map(chip => (
            <TechChip key={chip}>{chip}</TechChip>
          ))}
        </div>
      </div>
      <Break className={styles.break} />
      <div className={styles.text}>
        <div className={styles.title}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </ExternalLink>
  )
}

export default Project

import styles from './TechChip.module.scss'

const TechChip = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default TechChip

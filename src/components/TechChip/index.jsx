import styles from './TechChip.module.scss'

const TechChip = ({ children }) => {
  // TODO: context dispatch for chip filtering

  return <div className={styles.container}>{children}</div>
}

export default TechChip

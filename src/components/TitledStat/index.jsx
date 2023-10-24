import styles from './TitledStat.module.scss'

const TitledStat = ({ title, stat }) => {
  return (
    <div className={styles.container}>
      <div className={styles.stat}>{stat}</div>
      <div className={styles.title}>{title}</div>
    </div>
  )
}

export default TitledStat

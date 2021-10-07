import Break from '../../components/Break'
import Image from '../../components/Image'

import styles from './OrgCard.module.scss'

const OrgCard = ({ src, name, description }) => {
  return (
    <>
      <div className={styles.container}>
        <Image className={styles.logo} src={src} alt={`logo of ${name}`} />
        <Break className={styles.break} />
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </>
  )
}

export default OrgCard

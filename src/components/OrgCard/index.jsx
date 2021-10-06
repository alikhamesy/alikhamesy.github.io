import Break from '../../components/Break'
import Image from '../../components/Image'

import styles from './OrgCard.module.scss'

const OrgCard = ({ src, name, description }) => {
  return (
    <>
      <div className={styles.container}>
        <Image className={styles.logo} src={src} alt={`logo of ${name}`} />
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
        <Break className={styles.break} />
      </div>
    </>
  )
}

export default OrgCard

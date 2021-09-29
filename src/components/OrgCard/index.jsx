import Break from '../../components/Break'
import Image from '../../components/Image'

import styles from './OrgCard.module.scss'

const OrgCard = ({ src, name, description, breaks }) => {
  return (
    <>
      {breaks && <Break />}
      <div className={styles.container}>
        <Image className={styles.logo} src={src} alt={`logo of ${name}`} />
        <div className={styles.text}>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
      {breaks && <Break />}{' '}
    </>
  )
}

export default OrgCard

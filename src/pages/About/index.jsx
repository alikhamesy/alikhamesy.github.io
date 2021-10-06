import Break from '../../components/Break'
import { COMPANIES, STORY } from '../../assets/data'
import Image from '../../components/Image'
import OrgCard from '../../components/OrgCard'

import styles from './About.module.scss'

import profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.splash}>
        <Image src={profile} className={styles.profile} alt='Image of Ali' />
        <div className={styles.intro}>
          <Break />
          <div className={styles.title}>{STORY.title}</div>
          <div className={styles.text}>{STORY.body}</div>
        </div>
      </div>
      <Break />
      <div className={styles.activity}>
        <div className={styles.title}>{STORY.activity}</div>
        <div className={styles.text}>
          {COMPANIES.map(props => (
            <OrgCard key={props.name} {...props} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About

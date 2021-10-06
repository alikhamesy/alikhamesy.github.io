import Break from '../Break'
import ExternalLink from '../ExternalLink'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <Break />
      <div className={styles.footer}>
        <div className={styles.message}>
          I made this website alone using React, Scss, GitHub Actions.
        </div>
        <div className={styles.links}>
          <ExternalLink href='mailto:alikhamesy0@gmail.com'>Email</ExternalLink>
          <ExternalLink href='/Ali Khamesy Resume.pdf'>Resume</ExternalLink>
          <ExternalLink href='https://www.linkedin.com/in/ali-khamesy/'>
            Linkedin
          </ExternalLink>
          <ExternalLink href='https://github.com/alikhamesy'>
            GitHub
          </ExternalLink>
        </div>
      </div>
    </div>
  )
}

export default Footer

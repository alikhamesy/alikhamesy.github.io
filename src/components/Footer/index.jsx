import Break from '../Break'
import ExternalLink from '../ExternalLink'
import { FOOTER, LINKS } from '../../assets/data'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <Break />
      <div className={styles.footer}>
        <div className={styles.message}>{FOOTER.message}</div>
        <div className={styles.links}>
          <ExternalLink href={LINKS.email.href}>
            {LINKS.email.display}
          </ExternalLink>
          <ExternalLink href={LINKS.resume.href}>
            {LINKS.resume.display}
          </ExternalLink>
          <ExternalLink href={LINKS.linkedin.href}>
            {LINKS.linkedin.display}
          </ExternalLink>
          <ExternalLink href={LINKS.github.href}>
            {LINKS.github.display}
          </ExternalLink>
        </div>
      </div>
    </div>
  )
}

export default Footer

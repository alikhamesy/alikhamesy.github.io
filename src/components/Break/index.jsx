import classNames from '../../utils/classNames'

import styles from './Break.module.scss'

const Break = ({ className }) => (
  <span className={classNames(styles.break, className)} />
)

export default Break

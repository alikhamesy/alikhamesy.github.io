import { useState } from 'react'
import classNames from '../../utils/classNames'

import styles from './Image.module.css'

const Fallback = props => {
  return (
    <span
      title='loading...'
      {...props}
      className={classNames(props.className, styles.fallback)}
    />
  )
}

const Image = (props = {}) => {
  const [loaded, setLoaded] = useState(false)

  const loadHandler = () => {
    setLoaded(true)
  }

  return (
    <>
      <img
        decoding='async'
        alt=''
        onLoad={loadHandler}
        {...props}
        className={classNames(props.className, !loaded && styles.loading)}
      />
      {!loaded && <Fallback {...props} />}
    </>
  )
}

export default Image

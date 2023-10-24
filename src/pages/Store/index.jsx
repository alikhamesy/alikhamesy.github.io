import styles from './Store.module.scss'

import { ARRIVAL } from '../../assets/data'
import { useContext, useEffect, useState } from 'react'
import TitledStat from '../../components/TitledStat'
import { NavContext } from '../../contexts/Nav'

const formatCountdown = countdown => {
  let time = Math.round(countdown / 1000)
  const days = Math.floor(time / 86400)
  time -= days * 86400
  const hours = Math.floor(time / 3600)
  time -= hours * 3600
  const minutes = Math.floor(time / 60)
  time -= minutes * 60
  const seconds = time % 60
  return { days, hours, minutes, seconds }
}

const digitFormat = num => num.toString().padStart(2, '0')

const Store = () => {
  const [countdown, setCountdown] = useState(ARRIVAL - Date.now())
  const { dispatch } = useContext(NavContext)

  const formattedCountdown = formatCountdown(countdown)

  useEffect(() => {
    dispatch({ type: 'HIDE' })
    const interval = setInterval(() => {
      setCountdown(ARRIVAL - Date.now())
    }, [1000])

    return () => clearImmediate(interval) || dispatch({ type: 'SHOW' })
    // eslint-disable-next-line
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.title}>Wuv will 🛫 home in</div>
      <div className={styles.time}>
        {Object.entries(formattedCountdown).map(([k, v]) => (
          <TitledStat key={k} title={k} stat={digitFormat(v)} />
        ))}
      </div>
    </div>
  )
}

export default Store

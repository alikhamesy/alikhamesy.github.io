import styles from './Store.module.scss'

import plane from '../../assets/plane-final.png'

import { EVENTS } from '../../assets/data'
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

let currentEvent
for (currentEvent = 0; currentEvent < EVENTS.length; currentEvent++) {
  if (EVENTS[currentEvent].time > Date.now()) {
    break
  }
}

const Store = () => {
  const [event, setEvent] = useState(currentEvent)
  const { time, type } = EVENTS[event] ?? {
    time: Number.MAX_SAFE_INTEGER,
    type: 'END'
  }
  const [countdown, setCountdown] = useState(time - Date.now())
  const { dispatch } = useContext(NavContext)

  const formattedCountdown = formatCountdown(countdown)

  useEffect(() => {
    dispatch({ type: 'HIDE' })
    const interval = setInterval(() => {
      if (time > Date.now()) {
        setCountdown(time - Date.now())
      } else {
        setEvent(event + 1)
      }
    }, [1000])

    return () => clearImmediate(interval)
    // eslint-disable-next-line
  }, [event])

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {type === 'UNION' && (
          <>
            Wuv will <img src={plane} className={styles.plane} alt='' /> home in
          </>
        )}
        {type === 'SPLIT' && <>Wuv leaving 😭 in</>}
        {type === 'TOGETHER' && <>💞 Wuv are currently together 💞</>}
        {type === 'END' && <>🤷 What's going on here?</>}
      </div>
      {type !== 'TOGETHER' && type !== 'END' && (
        <div className={styles.time}>
          {Object.entries(formattedCountdown).map(([k, v]) => (
            <TitledStat key={k} title={k} stat={digitFormat(v)} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Store

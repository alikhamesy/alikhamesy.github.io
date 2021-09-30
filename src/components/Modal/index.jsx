import { useEffect, useRef } from 'react'
import { ReactComponent as Close } from '../../assets/close.svg'

import styles from './Modal.module.scss'

const Modal = ({ children, onClose }) => {
  const ref = useRef(null)

  useEffect(() => {
    //TODO: dispatch scroll lock
    ref.current.focus()
    return () => {
      //TODO: dispatch scroll unlock
      //Note: observer-producer pattern, dispatcher must keep track on number of lockers, unlock on 0.
    }
  }, [])

  const escCloser = ({ key }) => key === 'Escape' && onClose()

  return (
    <div
      ref={ref}
      className={styles.container}
      onClick={onClose}
      onKeyDown={escCloser}
      tabIndex={1}
    >
      <div
        className={styles.modal}
        onClick={e => e.stopPropagation()}
        onKeyDown={escCloser}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          <Close className={styles.close} />
        </button>
        <div className={styles.content} onKeyDown={escCloser}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal

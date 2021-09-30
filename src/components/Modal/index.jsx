import { useContext, useEffect, useRef } from 'react'
import { ReactComponent as Close } from '../../assets/close.svg'
import { ScrollContext } from '../../contexts/ScrollLock'

import styles from './Modal.module.scss'

const Modal = ({ children, onClose }) => {
  const ref = useRef(null)

  const { dispatch } = useContext(ScrollContext)

  useEffect(() => {
    dispatch({ type: 'LOCK' })
    ref.current.focus()

    return () => dispatch({ type: 'UNLOCK' })
  }, [dispatch])

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

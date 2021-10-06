import { useState } from 'react'
import { GALLERY } from '../../assets/data'
import Image from '../../components/Image'
import Modal from '../../components/Modal'

import styles from './Gallery.module.scss'

const Gallery = () => {
  const [openPhoto, setOpenPhotos] = useState(-1)

  return (
    <div className={styles.container}>
      {openPhoto >= 0 && (
        <Modal onClose={() => setOpenPhotos(-1)}>
          <Image
            src={GALLERY.sources[openPhoto].highRes}
            className={styles.modalImg}
          />
        </Modal>
      )}
      <div className={styles.title}>{GALLERY.title}</div>
      <div className={styles.gallery}>
        {GALLERY.sources.map(({ thumb: src }, index) => (
          <button
            key={src}
            className={styles.button}
            onClick={() => setOpenPhotos(index)}
          >
            <Image src={src} className={styles.img} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Gallery

import { useState } from 'react'
import { gallery } from '../../assets/data'
import Image from '../../components/Image'
import Modal from '../../components/Modal'

import styles from './Gallery.module.scss'

const Gallery = () => {
  const [openPhoto, setOpenPhotos] = useState(-1)

  return (
    <div className={styles.container}>
      {openPhoto >= 0 && (
        <Modal onClose={() => setOpenPhotos(-1)}>
          <Image src={gallery[openPhoto]} className={styles.modalImg} />
        </Modal>
      )}
      <div className={styles.title}>
        In my spare time, I like to take random pictures, here are a few.
      </div>
      <div className={styles.gallery}>
        {gallery.map((src, index) => (
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

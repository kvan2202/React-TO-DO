import styles from './modal.module.css'

export const Modal = ({children}) => {
  return (
    <>
        <div className={styles.modalbackdrop}>
            <div className={styles.modal}>
              {children}
            {/* <h1 style={{textDecoration:"underline"}}>10% off</h1>
            <p className={styles.Title}>Use code: KEVIN</p> */}
            {/* <button onClick={}>X</button> */}
            </div>
        </div>
    </>
  )
}
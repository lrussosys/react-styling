import styles from "./Modal.module.css";

const Modal = (props) => {
    const closeModal = () => {
        console.log("click overlay");
        const closeModal = true;
        props.onCloseModal(closeModal);
    };

    const stopPropagation = (event) => {
        event.stopPropagation();
    };
    return (
        <div className={styles.overlay} onClick={closeModal}>
            <div className={styles.modal} onClick={stopPropagation}>
                <p>{props.modalText}</p>
            </div>
        </div>
    );
};

export default Modal;

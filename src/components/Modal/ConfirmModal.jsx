import Modal from "react-modal"
import s from "./Modal.module.css";

Modal.setAppElement('#root');

const ConfirmModal = ({ isOpen, onClose, onConfirm, contact}) => {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            shouldCloseOnOverlayClick={true}
            overlayClassName={s.overlay}
            className={s.modal}
        >
            <div className={s.confirmModal}>
                <p className={s.request}>Are you sure you want to delete the contact <span className={s.contactName}>{contact.name}</span>?</p>
                <button className={s.delBtn} onClick={ onConfirm }>
                    Delete
                </button>
                <button onClick={onClose}>
                    Cancel
                </button>
            </div>
        </Modal>
    )
}

export default ConfirmModal;
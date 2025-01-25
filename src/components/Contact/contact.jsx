import { useDispatch } from 'react-redux';
import { contactCard, contactInfo, contactName, contactNumber, deleteBtn, person, telephone } from './contact.module.css';
import { deleteContact } from '../../redux/contactsOps';


const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    return (
        <div className={contactCard}>
            <div className={contactInfo}>
                <div className={contactName}>
                <svg className={person}>
                    <use href='/src/assets/symbol-defs.svg#icon-user'></use>
                </svg>
                <p>{contact.name}</p>
                </div>
                <div className={contactNumber}>
                    <svg className={telephone}>
                        <use href='/src/assets/symbol-defs.svg#icon-phone'></use>
                    </svg>
                    <p>{contact.number}</p>
                </div>
            </div>
            
            <button className={deleteBtn} onClick={() => {dispatch(deleteContact(contact.id))}}>
                Delete
            </button>
        </div>
    )
}

export default Contact;


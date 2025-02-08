import { useSelector } from 'react-redux'
import Contact from '../Contact/contact'
import { contactList, contactItem } from './contactList.module.css'
import { selectFilteredContacts } from '../../redux/contacts/slice'

export const ContactList = () => {
    const visibleContacts = useSelector(selectFilteredContacts);
    
    return (
        <ul className={contactList}>
            {visibleContacts.map((contact) =>
                <li className={contactItem} key={contact.id}>
                    <Contact contact={contact}/>
                </li>
            )}
        </ul>
    )
}
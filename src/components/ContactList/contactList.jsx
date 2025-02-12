import { useSelector } from 'react-redux'
import Contact from '../Contact/contact'
import { contactList, contactItem } from './contactList.module.css'
import { createSelector } from '@reduxjs/toolkit';
import { currentContactsArray } from '../../redux/contacts/selectors'
import { selectNameFilter } from '../../redux/filters/selectors';


const selectFilteredContacts = createSelector([currentContactsArray, selectNameFilter], (contacts, filters) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase()||"")||contact.number.includes(filters))
})

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
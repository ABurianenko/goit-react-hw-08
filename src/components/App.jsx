import s from './App.module.css'

import ContactForm from './ContactForm/contactForm'
import SearchBox from './SearchBox/searchBox'
import ContactList from './ContactList/contactList'
import { useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from '../redux/contactsOps'

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
  return (
    
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <p>Request in progress...</p>}
      <ContactList />
      
    </div>
  )
}

export default App;

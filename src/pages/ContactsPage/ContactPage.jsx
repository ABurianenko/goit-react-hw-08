import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import DocumentTitle from "../../components/DocumentTitle";
import { SearchBox } from "../../components/SearchBox/searchBox";
import {ContactList} from "../../components/ContactList/contactList"
import {ContactForm} from "../../components/ContactForm/contactForm"
export default function ContactPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <DocumentTitle>Your contacts</DocumentTitle>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </>
    )
}
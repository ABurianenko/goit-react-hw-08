import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { contactCard, contactInfo, contactName, contactNumber,  person, telephone } from './contact.module.css';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import ConfirmModal from '../Modal/ConfirmModal';
import EditForm from '../Modal/EditModal';
import { Button, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Contact = ({ contact}) => {
    const dispatch = useDispatch();
    const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);

    const openConfirmModal = () => setConfirmModalIsOpen(true);
    const closeConfirmModal = () => setConfirmModalIsOpen(false);

    const openEditModal = () => setEditModalIsOpen(true);
    const closeEditModal = () => setEditModalIsOpen(false);

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
        closeConfirmModal();
    };

    const handleUpdate = (values) => {
        dispatch(updateContact({
            id: contact.id,
            name: values.username,
            number: values.tel, }));
        closeEditModal();
    }

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

            <Stack
                direction="column"
                spacing={1}
                sx={{
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
                >
                    <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    size="small"
                    onClick={openConfirmModal}>
                    Delete
                </Button>

                <Button
                    variant="outlined"
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={openEditModal}>
                    Edit
                </Button>
            </Stack>
            
            

            <ConfirmModal 
                isOpen={confirmModalIsOpen}
                onClose={closeConfirmModal}
                onConfirm={handleDelete}
                contact={contact} />
            
            <EditForm 
                isOpen={editModalIsOpen}
                onClose={closeEditModal}
                onSave={handleUpdate}
                contact={contact} />
        </div>
    )
}

export default Contact;


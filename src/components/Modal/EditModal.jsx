import Modal from "react-modal";
// import { useDispatch } from "react-redux";
// import { updateContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { form, input, label, formBtn, error } from '../ContactForm/contactForm.module.css';
import s from "./Modal.module.css";

Modal.setAppElement('#root');

const EditForm = ({ isOpen, onClose, onSave, contact }) => {
    // const dispatch = useDispatch();

    const handleSubmit = (values) => {
        onSave(values)
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
        .min(3, 'Name is too short!')
        .max(50, 'Name is too long!')
        .required('Name is required'),
        tel: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, 'Phone number must match the format 123-45-67')
        .required('Phone number is required'),
    });

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            shouldCloseOnOverlayClick={true}
            overlayClassName={s.overlay}
            className={s.modal}
        >
            <Formik
                initialValues={{
                username: contact.name,
                tel: contact.number,
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >

                <Form className={form} >
                    <label className={label}>
                        <span>Name</span>
                        <Field className={input} type="text" name="username" />
                        <ErrorMessage className={error} name="username" component='span' />
                    </label>
                    <label className={label}>
                        <span>Number</span>
                        <Field className={input} type="tel" name="tel" />
                        <ErrorMessage className={error} name="tel" component='span' />
                    </label>
                    
                    <button className={formBtn} type="submit">Save</button>

                    <button type="button" onClick={onClose}>
                    Cancel
                    </button>
                </Form>

            </Formik>
        </Modal>
    )
}

export default EditForm;
import { contactForm, userName, telephone, label, searchBtn, error} from './contactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import * as Yup from 'yup';


const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(
            addContact({
                name: values.username,
                number: values.tel,
                }))
        
        actions.resetForm();
    }

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
        <Formik
            initialValues={{
                username: '',
                tel: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <Form className={contactForm} >
                <label className={label}>
                    <span>Name</span>
                    <Field className={userName} type="text" name="username" />
                    <ErrorMessage className={error} name="username" component='span' />
                </label>
                <label className={label}>
                    <span>Number</span>
                    <Field className={telephone} type="tel" name="tel" />
                    <ErrorMessage className={error} name="tel" component='span' />
                </label>
                
                <button className={searchBtn} type="submit">Add contact</button>
            </Form>
        </Formik>
        
    )
}

export default ContactForm;
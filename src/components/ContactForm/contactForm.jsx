import { form, input, label, formBtn, error} from './contactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import * as Yup from 'yup';


export const ContactForm = () => {
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
                
                <button className={formBtn} type="submit">Add contact</button>
            </Form>
        </Formik>
        
    )
}

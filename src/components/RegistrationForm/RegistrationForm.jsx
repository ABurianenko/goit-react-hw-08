import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operations";
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "../ContactForm/contactForm.module.css"

export const RegistrationForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(
            register({
                name: values.name,
                email: values.email,
                password: values.password,
            })
        )
        actions.resetForm();
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .email('Must be a valid email')
            .required('Email is required'),
        password: Yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            )
            .required('Password is required'),
            });

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <Form className={s.form}>
                <label className={s.label}>
                    <span>Username</span>
                    <Field className={s.input} type="text" name="name" />
                    <ErrorMessage className={s.error} name="name" component='span' />
                </label>
                <label className={s.label}>
                    <span>Email</span>
                    <Field className={s.input} type="email" name="email" />
                    <ErrorMessage className={s.error} name="email" component='span' />
                </label>
                <label className={s.label}>
                    <span>Password</span>
                    <Field className={s.input} type="password" name="password" />
                    <ErrorMessage className={s.error} name="password" component='span' />
                </label>
                <button className={s.formBtn} type="submit">Register</button>
            </Form>  
        </Formik>
    )
}
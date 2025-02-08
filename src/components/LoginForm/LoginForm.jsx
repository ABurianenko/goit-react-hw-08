import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "../ContactForm/contactForm.module.css";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(
            logIn({
                email: values.email,
                password: values.password,
            })
        )
            
        actions.resetForm();
    };

    const validationSchema = Yup.object().shape({
            email: Yup.string()
                .email('Must be a valid email')
                .required('Email is required'),
        password: Yup.string()
                .required('Password is required'),
        });

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <Form className={s.form}>
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
                <button className={s.formBtn} type="submit">Log In</button>
            </Form>  
        </Formik>
    )
}
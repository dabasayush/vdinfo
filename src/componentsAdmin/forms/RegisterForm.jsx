'use client';
import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import styles from './styles.module.scss'
import { Col, Row } from 'react-bootstrap';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(5, 'Minimum 5 characters length')
        .required('Password is required'),
    username: yup
        .string('Enter your username')
        .required('username is required'),
});



const Register = () => {

    const router = useRouter()

    //register user
    const registerUser = async (user) => {
        try {
            const res = await fetch("/api/user", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(user),
            });
            // Throw error with status code in case Fetch API req failed
            if (!res.ok) {
                throw new Error('req failed');
            }

            const response = await res.json();
            // console.log('response', response)
            if (response?.success === true) toast.success('register successfully!');

            router.push("/login");

        } catch (error) {
            console.log(error);
        }
    }

    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
    } = useFormik({
        initialValues: {
            email: '',
            password: '',
            username: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            //alert(JSON.stringify(values, null, 2));
            registerUser(values);
        }

    });

    return (
        <>
            <div className={styles.loginform}>
                <Row className="w-100">
                    <Col xs={12} md={6} lg={4} className="mx-auto">
                        <form className={styles.loginform__form}>
                            <h3 className={styles.title}>Login</h3>

                            <div className={styles.formGroup}>
                                <input
                                    id="email"
                                    label="E-mail"
                                    name='email'
                                    placeholder='E-mail'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}
                                    helpertext={touched.email && errors.email}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <input
                                    id="password"
                                    label="Password"
                                    name='password'
                                    placeholder='Password'
                                    type="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.password && Boolean(errors.password)}
                                    helpertext={touched.password && errors.password}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <input
                                    id="username"
                                    label="Username"
                                    name='username'
                                    placeholder='User Name'
                                    type="password"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.username && Boolean(errors.username)}
                                    helpertext={touched.username && errors.username}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <button type="submit" className={styles.submitButton}>
                                    Log in
                                </button>
                            </div>
                        </form>
                    </Col>
                </Row>
        </div>
        </>
    )
}

export default Register
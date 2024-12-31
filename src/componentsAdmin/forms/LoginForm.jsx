import React from 'react'
import styles from './styles.module.scss';
import { Col, Row } from 'react-bootstrap';

import { useFormik} from 'formik';
import * as yup from 'yup'


export default function LoginForm() {

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(5, 'Minimum 5 characters length')
            .required('Password is required'),
    });

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
            error: null
        },
        validationSchema: validationSchema,
        onSubmit: async (values, actions) => {
            // alert(JSON.stringify(values, null, 2));
            const signInValue = await signIn('credentials',
                {
                    email: values.email,
                    password: values.password,
                    redirect: false,
                })
            setFieldValue('error', JSON.stringify(signInValue?.error))
        }

    });


  return (
    <div className={styles.loginform}>
        <Row className="w-100">
            <Col xs={12} md={6} lg={4} className="mx-auto">
                <form className={styles.loginform__form}>
                    <h3 className={styles.title}>Login</h3>

                    <div className={styles.formGroup}>
                        <input
                            type='email'
                            name="email"
                            id="email"
                            placeholder="Enter Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email && Boolean(errors.email)}
                            helpertext={touched.email && errors.email}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            type="password"
                            name='password'
                            id="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.password && Boolean(errors.password)}
                            helpertext={touched.password && errors.password}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <button onSubmit={handleSubmit} type="submit" className={styles.submitButton}>
                            Login
                            {
                                JSON.parse(values.error) === "CredentialsSignin" &&
                                <div className="error-wrapper">
                                    <p style={{ color: '#ccc' }}> *Invalid email or password</p>
                                </div>
                            }
                        </button>
                    </div>
                </form>
                </Col>
        </Row>
    </div>
  )
}

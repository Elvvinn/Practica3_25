import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
function AddPage() {
    return (
        <>

            <Formik
                initialValues={{ name: '', title: '', iconUrl: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    title: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    iconUrl: Yup.string().required('Required'),
                })}
                onSubmit={(values) => {
                    axios.post("http://localhost:5000/users", values)
                }}
            >
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <label htmlFor="title"> Title</label>
                    <Field name="title" type="text" />
                    <ErrorMessage name="title" />

                    <label htmlFor="iconUrl">iconUrl </label>
                    <Field name="iconUrl" type="imageUrl" />
                    <ErrorMessage name="iconUrl" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

        </>
    )
}

export default AddPage
import { useFormik } from 'formik';
import React from 'react';
import { signUpSchema } from './Schemas';

const Form = () => {

    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirm_password: ''
        },
        validationSchema: signUpSchema,
        onSubmit: (values, actions) => {
            console.log(values);
            actions.resetForm();
            window.location.href = 'https://www.google.com';
        }
    });

    return (
        <form
            className='rounded-xl shadow-2xl border border-black p-6 bg-gray-900 flex flex-col'
            onSubmit={handleSubmit}
        >
            <label className='text-white items-center' htmlFor='name'>
                Name
            </label>
            <input
                className='w-80 border border-black p-2 m-4 rounded-lg'
                type='text'
                placeholder='Name'
                name='name'
                autoComplete='off'
                value={values.name}
                onChange={handleChange}
            />
            {
                errors.name && touched.name ? (
                    <p className='text-red-600 text-lg pl-3'>{errors.name}</p>
                ) : null
            }

            <label className='text-white items-center' htmlFor='email'>
                Email
            </label>
            <input
                className='w-80 border border-black p-2 m-4 rounded-lg'
                type='email'
                placeholder='Email'
                name='email'
                autoComplete='off'
                value={values.email}
                onChange={handleChange}
            />
            {
                errors.email && touched.email ? (
                    <p className='text-red-600 text-lg pl-3'>{errors.email}</p>
                ) : null
            }

            <label className='text-white items-center' htmlFor='password'>
                Password
            </label>
            <input
                className='w-80 border border-black p-2 m-4 rounded-lg'
                type='password'
                placeholder='Password'
                name='password'
                autoComplete='off'
                value={values.password}
                onChange={handleChange}
            />

            <label className='text-white items-center' htmlFor='confirm_password'>
                Confirm Password
            </label>
            <input
                className='w-80 border border-black p-2 m-4 rounded-lg'
                type='password'
                placeholder='Confirm Password'
                name='confirm_password'
                autoComplete='off'
                value={values.confirm_password}
                onChange={handleChange}
            />

            <button type='submit' className='mt-6 bg-green-500 rounded-xl text-white p-2'>
                Submit
            </button>
        </form>
    );
};

export default Form;

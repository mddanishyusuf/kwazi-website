import React from 'react';
import { Formik } from 'formik';

function ContactUs({ work, hideEvent }) {
    function hideBox() {
        hideEvent();
    }
    return (
        <div>
            {work !== undefined && (
                <div className="container modal">
                    <div className="contact-us-page-head">
                        <div className="contact-title" />
                        <div className="close-layer" onClick={hideBox} role="presentation">
                            X
                        </div>
                    </div>
                    <div className="contact-us-content">
                        <div className="page-section work-page-section">
                            <h3>Contact Us</h3>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validate={values => {
                                    const errors = {};
                                    if (!values.email) {
                                        errors.email = 'Required';
                                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                        errors.email = 'Invalid email address';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    /* and other goodies */
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                        {errors.name && touched.name && errors.name}
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        {errors.email && touched.email && errors.email}
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder="Phone"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone}
                                        />
                                        {errors.phone && touched.phone && errors.phone}
                                        <input
                                            type="text"
                                            name="service"
                                            placeholder="Service"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                        {errors.service && touched.service && errors.service}
                                        <button type="submit" disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContactUs;

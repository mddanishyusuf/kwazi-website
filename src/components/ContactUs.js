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
                                initialValues={{ email: '', name: '', phone: '', service: '' }}
                                validate={values => {
                                    const errors = {};
                                    if (!values.email) {
                                        errors.email = 'Required';
                                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                        errors.email = 'Invalid email address';
                                    }
                                    if (!values.name) {
                                        errors.name = 'Required';
                                    }
                                    if (!values.phone) {
                                        errors.phone = 'Required';
                                    }
                                    if (!values.service) {
                                        errors.service = 'Required';
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
                                        <div className="input-field">
                                            <label id="name">Name</label>
                                            <br />
                                            <input
                                                type="text"
                                                name="name"
                                                onChange={handleChange}
                                                value={values.name}
                                            />
                                            <br />
                                            <span>{errors.name && touched.name && errors.name}</span>
                                        </div>
                                        <div className="input-field">
                                            <label id="name">Email</label>
                                            <br />
                                            <input
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                value={values.email}
                                            />
                                            <br />
                                            <span>{errors.email && touched.email && errors.email}</span>
                                        </div>
                                        <div className="input-field">
                                            <label id="name">Phone</label>
                                            <br />
                                            <input
                                                type="text"
                                                name="phone"
                                                onChange={handleChange}
                                                value={values.phone}
                                            />
                                            <br />
                                            <span>{errors.phone && touched.phone && errors.phone}</span>
                                        </div>
                                        <div className="input-field">
                                            <label id="name">Service</label>
                                            <br />
                                            <input
                                                type="text"
                                                name="service"
                                                onChange={handleChange}
                                                value={values.password}
                                            />
                                            <br />
                                            <span>{errors.service && touched.service && errors.service}</span>
                                        </div>
                                        <button type="submit" disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </form>
                                )}
                            </Formik>
                            <h3>Follow Us</h3>

                            <div className="social-icons">
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener">
                                    <img src={require(`../static/images/LinkedIn Icon@2x.png`)} alt="LinkedIn" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener">
                                    <img src={require(`../static/images/Instagram Icon@2x.png`)} alt="Instagram" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener">
                                    <img src={require(`../static/images/Spotify_Icon@2x.png`)} alt="Spotify" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContactUs;

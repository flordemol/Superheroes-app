import { useState } from "react";
import { Formik, Field, Form } from 'formik';

function FormLogin() {

    const [user, setUser] = useState({
        email : "",
        password : ""
    });

    const validation = values => {
        let errors = {};
       
        if (!values.email) {
          errors.email = 'Email is required!';
        }
        if (!values.password) {
            errors.password = 'Password is required!';
        }
        return errors;
    }

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={ async (values) => {
                    setUser({ ...values });
                }}
                validate={validation}
            >
            {
                ({ errors }) => (
                <Form>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <Field
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Ingresá tu email"
                        />
                    </div>
                    <small className="text-danger mb-1" style={{display: 'block', minHeight: '20px'}}>{errors.email}</small>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <Field
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="*****"
                        />
                    </div>
                    <small className="text-danger mb-3" style={{display: 'block', minHeight: '20px'}}>{errors.password}</small>
                    <div className="d-grid gap-2 ">
                        <button className="btn btn-primary" type="submit">Enviar</button>
                    </div>
                </Form>

                )
            }
            </Formik>
        </>
    );
  }
  
  export default FormLogin;

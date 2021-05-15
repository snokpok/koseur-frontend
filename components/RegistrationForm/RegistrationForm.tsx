import React, { ReactElement, useEffect } from "react";
import { Formik, Field, Form, FormikProps } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./RegistrationForm.module.sass";

export let accountExists = false;

export interface IRegistrationFormResponse {
    username: string;
    email: string;
    password: string;
    password_verify: string;
}

export function RegistrationForm(): ReactElement | null {
    const router = useRouter();

    const RegistrationSchema = Yup.object().shape({
        username: Yup.string().required("Please enter your username"),
        email: Yup.string()
            .email("Not a valid email!")
            .required("Please enter your email"),
        password: Yup.string().required("Please enter your password"),
        password_verify: Yup.string().required("Please re-enter your password"),
    });

    function validate(values: IRegistrationFormResponse) {
        const errors = {};
        if (
            values.password_verify &&
            values.password_verify !== values.password
        ) {
            Object.assign(errors, {
                password_verify: "Passwords are not identical",
            });
        }
        return errors;
    }

    useEffect(() => {
        router.prefetch("/document");
    }, []);
    return (
        <div>
            <Formik
                initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    password_verify: "",
                }}
                validationSchema={RegistrationSchema}
                validate={validate}
                onSubmit={async (values: IRegistrationFormResponse, _) => {
                    let response = await axios({
                        method: "post",
                        url: `${process.env.api}/auth/register`,
                        data: {
                            ...values,
                        },
                        validateStatus: (status) => status < 500,
                    });

                    switch (response.status) {
                        case 200:
                            router.push("/document");
                        case 400:
                            router.push("/register");
                        case 409:
                            router.push("/login");
                            accountExists = true;
                    }
                }}
            >
                {({
                    errors,
                    touched,
                }: FormikProps<IRegistrationFormResponse>) => (
                    <Form>
                        <Field name="username" placeholder="Username" />
                        {touched.username && errors.username && (
                            <li>{errors.username}</li>
                        )}
                        <Field type="email" name="email" placeholder="Email" />
                        {touched.email && errors.email && (
                            <li>{errors.email}</li>
                        )}
                        <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        {touched.password && errors.password && (
                            <li>{errors.password}</li>
                        )}
                        <Field
                            type="password"
                            name="password_verify"
                            placeholder="Re-enter password"
                        />
                        {touched.password_verify && errors.password_verify && (
                            <li>{errors.password_verify}</li>
                        )}
                        <button type="submit">Register</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

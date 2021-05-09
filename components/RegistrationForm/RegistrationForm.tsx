import React, { ReactElement, useEffect } from "react";
import { Formik, Field, Form, FormikProps, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios, { AxiosResponse } from "axios";
import devConfigs from "../../configs/api";
import { useRouter } from "next/router";
import styles from "./RegistrationForm.module.sass";
import { ILoginFormResponse } from "../LoginForm/LoginForm";

export let accountExists = false;
const { api } = devConfigs;

export interface RegistrationFormProps {}

export interface IRegistrationFormResponse {
    username: string;
    email: string;
    password: string;
    password_verify: string;
}

export function RegistrationForm(
    props: RegistrationFormProps
): ReactElement | null {
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
                PasswordsNotEqual: "Passwords are not identical",
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
                        url: `${api}/auth/register`,
                        data: {
                            ...values,
                        },
                        validateStatus: (status) => status < 500,
                    });

                    console.log(response);
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
                {({ errors }: FormikProps<any>) => (
                    <Form>
                        <Field name="username" placeholder="Username" />
                        <Field type="email" name="email" placeholder="Email" />
                        <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <Field
                            type="password"
                            name="password_verify"
                            placeholder="Re-enter password"
                        />
                        {Object.keys(errors).map((errMsgKey) => (
                            <li key={errMsgKey} className={styles.formError}>
                                {errors[errMsgKey]}
                            </li>
                        ))}
                        <button type="submit">Register</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

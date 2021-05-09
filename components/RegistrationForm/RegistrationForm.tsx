import React, { ReactElement, useEffect } from "react";
import { Formik, Field, Form, FormikProps, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import devConfigs from "../../configs/api";
import { useRouter } from "next/router";
import styles from "./RegistrationForm.module.sass";
import { ILoginFormResponse } from "../LoginForm/LoginForm";

export let accountExists = false;
const { api } = devConfigs;

export interface RegistrationFormProps {}

export interface IRegistrationFormResponse extends ILoginFormResponse {
    passwordVerify: string;
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
        passwordVerify: Yup.string().required("Please re-enter your password"),
    });

    function validate(values: IRegistrationFormResponse) {
        const errors = {};
        if (
            values.passwordVerify &&
            values.passwordVerify !== values.password
        ) {
            Object.assign(errors, {
                PasswordsNotEqual:
                    "Passwords are not identical",
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
                    passwordVerify: "",
                }}
                validationSchema={RegistrationSchema}
                validate={validate}
                onSubmit={(values: IRegistrationFormResponse, _) => {
                    setTimeout(async () => {
                        // const response = await axios({
                        //     method: "post",
                        //     url: `${api}/auth/register`,
                        //     data: {
                        //         ...values,
                        //     },
                        // });
                        const response = { status: 409 };

                        switch (response.status) {
                            case 200:
                                router.push("/document");
                            case 400:
                                router.push("/register");
                            case 409:
                                router.push("/login");
                                accountExists = true;
                        }
                    }, 2000);
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
                            name="passwordVerify"
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

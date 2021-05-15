import React, { ReactElement, useEffect, useState } from "react";
import { Formik, Field, Form, FormikProps } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./LoginForm.module.sass";
import { accountExists } from "../RegistrationForm/RegistrationForm";

export interface ILoginFormResponse {
    username_or_email: string;
    password: string;
}

const formFieldsMetadata = {
    username_or_email: {
        required_message: "Please enter your username or email",
        placeholder: "Username or email",
    },
    password: {
        required_message: "Please enter your password",
        placeholder: "Password",
    },
};

export function LoginForm(): ReactElement | null {
    const [flashMessage, setFlashMessage] = useState<string>("");
    const [extraErrors, setExtraErrors] = useState<{ invalidEmail: string }>({
        invalidEmail: "",
    });

    const router = useRouter();
    const LoginSchema = Yup.object().shape({
        username_or_email: Yup.string().required(
            formFieldsMetadata.username_or_email.required_message
        ),
        password: Yup.string().required(
            formFieldsMetadata.password.required_message
        ),
    });

    useEffect(() => {
        router.prefetch("/document");
        if (accountExists)
            setFlashMessage(
                "An account with this username has already been created; please login"
            );
    }, []);

    return (
        <div>
            <div>{flashMessage}</div>
            <Formik
                initialValues={{
                    username_or_email: "",
                    password: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={(values: ILoginFormResponse) => {
                    setTimeout(async () => {
                        const response = await axios({
                            method: "post",
                            url: `${process.env.api}/auth/login`,
                            data: {
                                ...values,
                            },
                            withCredentials: true,
                            validateStatus: (status) => status < 500,
                        });

                        switch (response.status) {
                            case 200:
                                router.push("/document");
                            case 404:
                                setExtraErrors({
                                    ...extraErrors,
                                    invalidEmail: response.data?.detail,
                                });
                        }
                    }, 1000);
                }}
            >
                {({ errors, touched }: FormikProps<any>) => (
                    <Form>
                        <Field
                            name="username_or_email"
                            placeholder={
                                formFieldsMetadata.username_or_email.placeholder
                            }
                        />
                        {touched.username_or_email &&
                            errors.username_or_email && (
                                <li>{errors.username_or_email}</li>
                            )}
                        <Field
                            name="password"
                            type="password"
                            placeholder={
                                formFieldsMetadata.password.placeholder
                            }
                        />
                        {touched.password && errors.password && (
                            <li>{errors.password}</li>
                        )}
                        <button type="submit">Login</button>
                        {extraErrors.invalidEmail && (
                            <li>{extraErrors.invalidEmail}</li>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

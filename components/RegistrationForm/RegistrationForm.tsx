import React, { ReactElement } from "react"
import {Formik, Field, Form, FormikProps, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import devConfigs from '../../configs/api'
import {useRouter} from 'next/router'
import styles from './LoginForm.module.sass'
import {ILoginFormResponse} from '../LoginForm/LoginForm'

const {api} = devConfigs

export interface RegistrationFormProps {
  
}

export interface IRegistrationFormResponse extends ILoginFormResponse {
  passwordVerify: string
}


export default function RegistrationForm(props: RegistrationFormProps): ReactElement | null {

  const RegistrationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter your username"),
    email: Yup.string().email('Not a valid email!').required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
    passwordVerify: Yup.string().required("Please re-enter your password")
  })

  function validate(values: IRegistrationFormResponse) {
    const errors = {}
    if (!(values.password === values.passwordVerify)) {
      Object.assign(errors, {PasswordsNotEqual: "Passwords are not identical. Please re-enter your password"})
    }
  }

  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          passwordVerify: ''
        }}
        validationSchema={RegistrationSchema}
        validate={validate}
        onSubmit={(values, _) => {
          setTimeout(async () => {
            const response = await axios({
              method: 'post',
              url: `${api}/auth/register`,
              data: {
                ...values
              }
            })

            const router = useRouter()
            if (response.status === 200)  {
              router.push('/document')
            }
            if (response.status === 400) {
              router.push('/register')
            }
          }, 2000)
        }}
      >
        {({errors}: FormikProps<any>) => (
          <Form>
            <Field name="username" placeholder="Username"/>
            <Field type="email" name="email" placeholder="Email" />
            <Field type='password' name='password' placeholder='Password' />
           <Field type='password' name='password' placeholder='Re-enter password' />
            {Object.keys(errors).map((errMsgKey) => <li key={errMsgKey} className={styles.formError}>{errors[errMsgKey]}</li>)}
            <button type='submit'>Login</button>
          </Form>
        )}
      </Formik>
    </div>
  ) 
}

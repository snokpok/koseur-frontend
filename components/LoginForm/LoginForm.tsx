import React, { ReactElement } from "react"
import {Formik, Field, Form, FormikProps, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import devConfigs from '../../configs/api'
import {useRouter} from 'next/router'
import styles from './LoginForm.module.sass'

const {api} = devConfigs

export interface LoginFormProps {
  
}

export interface ILoginFormResponse {
  username: string;
  email: string;
  password: string;
}

export default function LoginForm(props: LoginFormProps): ReactElement | null {

  const LoginSchema = Yup.object().shape({
    username: Yup.string(),
    email: Yup.string().email('Not a valid email!'),
    password: Yup.string().required("Please enter your password")
  })

  function validate(values: ILoginFormResponse) {
    const errors = {}
    if (!values.email && !values.username) {
      Object.assign(errors, {EmailUsernameEmailMissing:"Please provide your email or your password"})
    }
  }

  
  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        validate={validate}
        onSubmit={(values, _) => {
          setTimeout(async () => {
            const response = await axios({
              method: 'get',
              url: `${api}/auth/login`,
              data: {
                ...values
              }
            })

            const router = useRouter()
            if (response.status === 200)  {
              router.push('/document')
            }
            if (response.status === 400) {
              router.push('/login')
            }
          }, 2000)
        }}
      >
        {({errors}: FormikProps<any>) => (
          <Form>
            <Field name="username" placeholder="Username"/>
            <Field type="email" name="email" placeholder="email" />
            <Field type='password' name='password' placeholder='password' />
            {Object.keys(errors).map((errMsgKey) => <li key={errMsgKey} className={styles.loginError}>{errors[errMsgKey]}</li>)}
            <button type='submit'>Login</button>
          </Form>
        )}
      </Formik>
    </div>
  ) 
}

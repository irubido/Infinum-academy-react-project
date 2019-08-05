import React from 'react';
import { observer } from 'mobx-react';
import useForm from 'react-hook-form';

import styles from './Login.module.css';

import { postRegister } from '../services';

function Register(props) {

  const { register, handleSubmit, errors } = useForm();

  async function onRegister(submitData) {

    const data = await postRegister('users', submitData.email, submitData.fullName, submitData.password);

    alert(`Your registration was successful! email:${data.user.email} `);
    if (data.user.email) {
      props.history.push('/login');
    }
  }

  return (
    <div className={styles.logincontainer}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onRegister)}>
        <div className="input-form">
          <input
            type="text" name="fullName" ref={register({
              required: 'Full name required!',
            })} placeholder="Full name"
          />
          <div><p>{errors.fullName && errors.fullName.message}</p></div>
        </div>
        <div>
          <input
            type="email" name="email" ref={register({
              required: 'Email required!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i,
                message: 'This is not an email format!',
              },
            })} placeholder="Email"
          />
        </div>
        <div><p>{errors.email && errors.email.message}</p></div>
        <div>
          <input
            type="password" name="password" ref={register({
              validate: (value) => value.length > 3 || 'Use a stronger password!',
            })} placeholder="Password"
          />
        </div>
        <div><p>{errors.password && errors.password.message}</p></div>
        <div><p>{errors.password2 && errors.password2.message}</p></div>
        <button type="submit" className={styles.loginbutton}>Register</button>
      </form>
    </div>
  );
}
export default observer(Register);

import React from 'react'
import { Link } from 'wouter'
import styles from './Form.module.css'
interface Props {
  signUp: boolean
}
const Form: React.FC<Props> = ({ signUp }) => {
  return (
    <form className={styles.form}>
      {signUp && (
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' />
        </div>
      )}
      <div>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' />
      </div>
      <div>
        <Link href='/'>
          <button type='submit'>{signUp ? 'Sign up' : 'Log in'}</button>
        </Link>
      </div>
    </form>
  )
}
export default Form

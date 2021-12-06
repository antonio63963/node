import style from './Signin.module.css';

export default function SignIn() {
  return (
    <form className={style.signInForm} name="SignIn">
      <h1 className={style.formTile}>Sign in</h1>
      <input type="text" name="name" placeholder="Enter your name"/>
      <input type="email" name="email" placeholder="Enter your email"/>
      <input type="password" name="pwd" placeholder="Enter your password"/>
      <input type="password" name="confirm-pwd" placeholder="Confirm your password"/>
      <button type="submit" className={`${style.btn} ${style.btnSubmit}`}>Confirm</button>
      <button type="submit" className={`${style.btn} ${style.btnLogin}`}>Login</button>
    </form>
  )
}
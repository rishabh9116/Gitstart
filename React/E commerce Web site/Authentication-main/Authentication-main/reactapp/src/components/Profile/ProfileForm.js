import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
 const authCtx = useContext(AuthContext);

  const submitHandler = event => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDW2eQx6V9JvNmLY5lrvNFn6Fc1D0cmU5Y',{
      method: "POST",
      body:JSON.stringify({
       idToken: authCtx.token,
       password:enteredNewPassword,
       returnSecureToken:true
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => {
      //assumption: Always succeeds!
      console.log(res);

    })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;

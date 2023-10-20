import { useRef, useState } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoader, setIsLoader] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = async(e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    //optional: Add validation

   setIsLoader(true);
   try{
    if(isLogin){

    }else{
    const response = await fetch(
       "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDW2eQx6V9JvNmLY5lrvNFn6Fc1D0cmU5Y",
       {
         method: "POST",
         body: JSON.stringify({
           email: enteredEmail,
           password: enteredPassword,
           returnSecureToken: true,
         }),
         headers: {
           "Content-Type": "application/json",
         },
       }
     );
    const data = await response.json();
     if(response.ok){

     } else{
     
      throw new Error("Authentication failed");
             
     }
   }
    
      
  } catch(error){
   alert(error);
  }
   setIsLoader(false);   
    //   .then((res)=>{
    //     if(res.ok){
    //       //...
    //     } else{
    //       return res.json().then((data) => {
    //         let errorMessage = 'Authentication failed';
    //         if(data && data.error && data.error.message){
    //           errorMessage = data.error.message;
    //         }
    //        alert(errorMessage);
    //       })
    //     }
    //   });
   
    //  }  

      setIsLoader(false);
    
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            required
          />
          {isLoader && <div>Sending Request...</div>}
        </div>
       
       
     
      <div className={classes.actions}>
      <button>{isLogin ? "Login" : "Sign Up"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
        </form>
    </section>
  );
};

export default AuthForm;
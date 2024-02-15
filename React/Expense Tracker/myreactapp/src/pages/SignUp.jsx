import React, { useState } from 'react';
import './SignUp.css'; // Import your CSS file for styling

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;
    let errors = {};

    if (!email) {
      errors.email = 'Email is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      try{

        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDTS5r_pJkteiVMfSGXcpIUbnhGaWF_YNo',{
          method:'POST',
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        var data = await response.json();
        if(response.ok) {
          console.log('User has successfully signed up', data);
          setSuccessMessage('User has successfully signed up');
        } else{
          throw new Error('SignUp Failed');
        }

      } catch(error) {
        if (data && data.error && data.error.message) {
          alert(data.error.message);
        }
      }
   
    
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        </div>
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

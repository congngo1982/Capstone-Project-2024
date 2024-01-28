import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import ErrorMsg from './error-msg';
import { registerSchema } from './validation-schema';

const RegisterForm = () => {
    // register form
    const handleOnSubmit = (values, { resetForm }) => {
      alert(`${values.name + "\n" + values.email + "\n" + values.password}`);
      resetForm()
    }
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
      initialValues: { name: '', email: '', password: '',passwordConfirmation: '' },
      validationSchema: registerSchema,
      onSubmit: handleOnSubmit,
    })

  return (
    <form onSubmit={handleSubmit}>
      <div className="sign__input-wrapper mb-25">
        <h5>Full Name</h5>
        <div className="sign__input">
          <input value={values.name} onChange={handleChange} onBlur={handleBlur} type="text"
           placeholder="Full name" name='name' />
          <i className="fal fa-user"></i>
        </div>
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>

      <div className="sign__input-wrapper mb-25">
        <h5>Work email</h5>
        <div className="sign__input">
          <input value={values.email} onChange={handleChange} onBlur={handleBlur} 
          type="email" placeholder="e-mail address" name='email' />
          <i className="fal fa-envelope"></i>
        </div>
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>

      <div className="sign__input-wrapper mb-25">
        <h5>Password</h5>
        <div className="sign__input">
          <input value={values.password} onChange={handleChange} onBlur={handleBlur} 
          type="password" placeholder="Password" name='password' />
          <i className="fal fa-lock"></i>
        </div>
        {touched.password && <ErrorMsg error={errors.password} />}
      </div>

      <div className="sign__input-wrapper mb-10">
        <h5>Re-Password</h5>
        <div className="sign__input">
          <input value={values.passwordConfirmation} onChange={handleChange} onBlur={handleBlur}  
          type="password" placeholder="Re-Password" name='passwordConfirmation' />
          <i className="fal fa-lock"></i>
        </div>
        {touched.passwordConfirmation && <ErrorMsg error={errors.passwordConfirmation} />}
      </div>

      <div className="sign__action d-flex justify-content-between mb-30">
        <div className="sign__agree d-flex align-items-center">
          <input className="m-check-input" type="checkbox" id="m-agree" />
          <label className="m-check-label" htmlFor="m-agree">I agree to the <a href="#">Terms & Conditions</a>
          </label>
        </div>
      </div>
      <button className="e-btn w-100"> <span></span> Sign Up</button>
      <div className="sign__new text-center mt-20">
        <p>Already in Educal ? <Link to="/sign-in"> Sign In</Link></p>
      </div>
    </form>
  );
};

export default RegisterForm;
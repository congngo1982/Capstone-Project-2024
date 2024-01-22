import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import ErrorMsg from './error-msg';
import { loginSchema } from './validation-schema';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { https } from '../../../api/config';
import { setLogin } from '../../../redux/features/user-slice';
import { userLocalStorage } from '../../../api/localService';

const LoginForm = () => {

  let dispatch = useDispatch();
  let navigate = useNavigate();
  
  // contact form
  const handleOnSubmit = (values) => {
    //Call api
    // console.log(values);
    https.post("/login", values).then((res) => {
      dispatch(setLogin(res.data));
      userLocalStorage.set(res.data);
      navigate("/");
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
    
  }
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: handleOnSubmit,
  })
  return (
    <form onSubmit={handleSubmit}>
      <div className="sign__input-wrapper mb-25">
        <h5>Nhập email</h5>
        <div className="sign__input">
          <input type="text" value={values.email} onChange={handleChange}
            onBlur={handleBlur} placeholder="e-mail address" name='email' />
          <i className="fal fa-envelope"></i>
        </div>
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className="sign__input-wrapper mb-10">
        <h5>Nhập password</h5>
        <div className="sign__input">
          <input value={values.password} onChange={handleChange}
            onBlur={handleBlur} name="password" type="text" placeholder="Password" />
          <i className="fal fa-lock"></i>
        </div>
        {touched.password && <ErrorMsg error={errors.password} />}
      </div>
      <div className="sign__action d-sm-flex justify-content-between mb-30">
        <div className="sign__agree d-flex align-items-center">
          <input className="m-check-input" type="checkbox" id="m-agree" />
          <label className="m-check-label" htmlFor="m-agree">Keep me signed in
          </label>
        </div>
        <div className="sign__forgot">
          <a href="#">Forgot your password?</a>
        </div>
      </div>
      <button className="e-btn  w-100"> <span></span>Đăng nhập</button>
      <div className="sign__new text-center mt-20">
        <p>New to Educal? <Link to="/sign-up">Sign Up</Link></p>
      </div>
    </form>
  );
};

export default LoginForm;
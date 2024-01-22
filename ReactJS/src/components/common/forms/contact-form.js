import { useFormik } from 'formik';
import ErrorMsg from './error-msg';
import { contactSchema } from './validation-schema';

const ContactForm = () => {
    // contact form
    const handleOnSubmit = (values, { resetForm }) => {
      alert(`${values.name + "\n" + values.email + "\n" + values.sub + "\n" + values.msg }`);
      resetForm()
    }
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
      initialValues: { name: '', email: '',sub:'', msg: ''},
      validationSchema: contactSchema,
      onSubmit: handleOnSubmit,
    })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-md-6">
            <div className="contact__form-input">
              <input type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} 
              placeholder="Your Name" name="name" />
              {touched.name && <ErrorMsg error={errors.name} />}
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-md-6">
            <div className="contact__form-input">
              <input type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} 
              placeholder="Your Email" name="email" />
              {touched.email && <ErrorMsg error={errors.email} />}
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="contact__form-input">
              <input value={values.sub} onChange={handleChange} onBlur={handleBlur} type="text" 
              placeholder="Subject" name="sub" />
              {touched.sub && <ErrorMsg error={errors.sub} />}
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="contact__form-input">
              <textarea value={values.msg} onChange={handleChange} onBlur={handleBlur} 
              placeholder="Enter Your Message" name="msg"></textarea>
              {touched.msg && <ErrorMsg error={errors.msg} />}
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="contact__form-agree  d-flex align-items-center mb-20">
              <input className="e-check-input" type="checkbox" id="e-agree" />
              <label className="e-check-label" htmlFor="e-agree">I agree to the<a href="#">Terms & Conditions</a></label>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="contact__btn">
              <button type="submit" className="e-btn">Send your message</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
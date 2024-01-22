import { useFormik } from 'formik';
import ErrorMsg from './error-msg';

import { blogSchema } from './validation-schema';

const BlogForm = () => {
  // blog form
  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email + "\n" + values.subject + "\n" + values.msg}`);
    resetForm()
  }
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', subject: '', msg: '' },
    validationSchema: blogSchema,
    onSubmit: handleOnSubmit,
  })

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="blog__comment-input">
            <input value={values.name} onChange={handleChange} onBlur={handleBlur}
              type="text" placeholder="Your Name" name='name' />
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="blog__comment-input">
            <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="email"
              placeholder="Your Email" name='email' />
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="blog__comment-input">
            <input value={values.subject} onChange={handleChange} onBlur={handleBlur} type="text"
              placeholder="Subject" name='subject' />
            {touched.subject && <ErrorMsg error={errors.subject} />}
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="blog__comment-input">
            <textarea value={values.msg} onChange={handleChange} onBlur={handleBlur}
              placeholder="Enter your comment ..."></textarea>
            {touched.msg && <ErrorMsg error={errors.msg} />}
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="blog__comment-agree d-flex align-items-center mb-20">
            <input className="e-check-input" type="checkbox" id="e-agree" />
            <label className="e-check-label" htmlFor="e-agree">Save my name, email, and website in this browser for the next time I comment.</label>
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="blog__comment-btn">
            <button type="submit" className="e-btn">Post Comment</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BlogForm;
import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../common/forms/register-form';

const SignUpArea = () => {
  return (
    <>
      <section className="signup__area po-rel-z1 pt-100 pb-145">
        <div className="sign__shape">
          <img className="man-1" src="/assets/img/icon/sign/man-3.png" alt="" />
          <img className="man-2 man-22" src="/assets/img/icon/sign/man-2.png" alt="" />
          <img className="circle" src="/assets/img/icon/sign/circle.png" alt="" />
          <img className="zigzag" src="/assets/img/icon/sign/zigzag.png" alt="" />
          <img className="dot" src="/assets/img/icon/sign/dot.png" alt="" />
          <img className="bg" src="/assets/img/icon/sign/sign-up.png" alt="" />
          <img className="flower" src="/assets/img/icon/sign/flower.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
              <div className="section__title-wrapper text-center mb-55">
                <h2 className="section__title">Create a free <br />  Account</h2>
                <p>I'm a subhead that goes with a story.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="sign__wrapper white-bg">
                <div className="sign__header mb-35">
                  <div className="sign__in text-center">
                    <a href="#" className="sign__social g-plus text-start mb-15">
                      <i className="fab fa-google-plus-g"></i>Sign Up with Google
                    </a>
                    <p> <span>........</span> Or, <Link to="/sign-up">sign up</Link> with your email<span> ........</span> </p>
                  </div>
                </div>
                <div className="sign__form">
                  {/* register form */}
                  <RegisterForm/>
                  {/* register form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpArea;
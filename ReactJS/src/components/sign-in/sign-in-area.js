import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../common/forms/login-form';

const SignInArea = () => {
  return (
    <>
      <section className="signup__area po-rel-z1 pt-100 pb-145">
        <div className="sign__shape">
          <img className="man-1" src="/assets/img/icon/sign/man-1.png" alt="" />
          <img className="man-2" src="/assets/img/icon/sign/man-2.png" alt="" />
          <img className="circle" src="/assets/img/icon/sign/circle.png" alt="" />
          <img className="zigzag" src="/assets/img/icon/sign/zigzag.png" alt="" />
          <img className="dot" src="/assets/img/icon/sign/dot.png" alt="" />
          <img className="bg" src="/assets/img/icon/sign/sign-up.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
              <div className="section__title-wrapper text-center mb-55">
                <h2 className="section__title">Sign in to <br />  recharge direct.</h2>
                {/* <p>it you don't have an account you can <a href="#">Register here!</a></p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="sign__wrapper white-bg">
                <div className="sign__header mb-35">
                  <div className="sign__in text-center">
                    {/* <a href="#" className="sign__social text-start mb-15">
                      <i className="fab fa-facebook-f"></i>Sign in with Facebook
                    </a> */}
                    <p> <span>........</span> Or, <Link to="/sign-in">sign in</Link> with your email<span> ........</span> </p>
                  </div>
                </div>
                <div className="sign__form">
                  {/* login form */}
                  <LoginForm/>
                  {/* login form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInArea;
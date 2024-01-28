import React from 'react';
import { Link } from 'react-router-dom';

const social_links = ['social_facebook','social_twitter','social_pinterest'];

const footer_widget = [
  {
    col:'col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0 col-md-2 offset-md-1 col-sm-5 offset-sm-1',
    title:'Company',
    footer__link:['About','Courses','Events','Instructor','Career','Become a Teacher','Contact']
  },
  {
    col:'col-xxl-2 col-xl-2 col-lg-2 offset-lg-0 col-md-3 offset-md-1 col-sm-6',
    title:'Platform',
    footer__link:['Browse Library','Library','Partners','News & Blogs','FAQs','Tutorials']
  },
]

const Footer = ({gray_bg,pt = "pt-190"}) => {
  return (
    <>
      <footer>
        <div className={`footer__area ${gray_bg ? 'grey-bg-2' : 'footer-bg'}`}>
          <div className={`footer__top ${pt} pb-40`}>
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <div className="footer__logo">
                        <Link to="/">
                          <img src={gray_bg ? "/assets/img/logo/logo.png" : "/assets/img/logo/logo-2.png"} alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className={`footer__widget-body ${gray_bg ? 'footer__widget-body-2' : ''}`}>
                      <p>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
                      <div className="footer__social">
                        <ul>
                          {social_links.map((link,index) => (
                          <li key={link}>
                          <a href="#" className={`${index === 1 && 'tw'} ${index === 2 && 'pin'}`}>
                          <i className={link}></i></a></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {footer_widget.map((widget,index) => (
                <div key={index} className={widget.col}>
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className={`footer__widget-title ${gray_bg ? 'footer__widget-title-2' : ''}`}>
                        {widget.title}
                      </h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className={`footer__link ${gray_bg ? 'footer__link-2' : ''}`}>
                        <ul>
                          {widget.footer__link.map((link,index) => (
                          <li key={index}><a href="#">{link}</a></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-6">
                  <div className="footer__widget footer__pl-70 mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className={`footer__widget-title ${gray_bg ? 'footer__widget-title-2' : ''}`}>
                        Subscribe
                      </h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className={`footer__subscribe ${gray_bg ? 'footer__subscribe-2' : ''}`}>
                        <form onSubmit={e => e.preventDefault()}>
                          <div className="footer__subscribe-input mb-15">
                            <input type="email" placeholder="Your email address" />
                            <button type="submit">
                              <i className="far fa-arrow-right"></i>
                              <i className="far fa-arrow-right"></i>
                            </button>
                          </div>
                        </form>
                        <p>Get the latest news and updates right at your inbox.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`footer__bottom ${gray_bg ? 'footer__bottom-2' : ''}`}>
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className={`footer__copyright ${gray_bg ? 'footer__copyright-2' : ''} text-center`}>
                    <p>© {new Date().getFullYear()} Educal, All Rights Reserved. Design By 
                    <Link to="/">Theme Pure</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
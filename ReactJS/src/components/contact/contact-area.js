import React from 'react';
import { Email, Location, Phone } from '../../svg';
import ContactForm from '../common/forms/contact-form';

const social_links = ['social_facebook', 'social_twitter', 'social_pinterest'];

const contact_info_items = [
  {
    icon:<Location />,
    title:'New York Office',
    link:'https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873',
    target:'_blank',
    text:'Maypole Crescent 70-80 Upper St Norwich NR2 1LT'
  },
  {
    icon:<Email />,
    title:'Email us directly',
    link:'mailto:support@educal.com',
    link_2:'mailto:info@educal.com',
    text:'support@educal.com',
    text_2:'info@educal.com',
  },
  {
    icon:<Phone />,
    title:'Phone',
    link:'tel:+(426)-742-26-44',
    link_2:'tel:+(224)-762-442-32',
    text:'+(426) 742 26 44',
    text_2:'+(224) 762 442 32',
  },
]

const contact_info = {
  title : 'Get in',
  shape_text: 'touch',
  sm_text:"Have a question or just want to say hi? We'd love to hear from you."
}

const ContactArea = () => {
  return (
    <>
      <section className="contact__area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="contact__wrapper">
                <div className="section__title-wrapper mb-40">
                  <h2 className="section__title">{contact_info.title}<span className="yellow-bg yellow-bg-big">
                   {' '} {contact_info.shape_text} <img src="/assets/img/shape/yellow-bg.png" alt="" /></span></h2>
                  <p>{contact_info.sm_text}</p>
                </div>
                <div className="contact__form">
                  {/* contact form start */}
                  <ContactForm />
                  {/* contact form end */}
                </div>
              </div>
            </div>
            <div className="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1">
              <div className="contact__info white-bg p-relative z-index-1">
                <div className="contact__shape">
                  <img className="contact-shape-1" src="/assets/img/contact/contact-shape-1.png" alt="" />
                  <img className="contact-shape-2" src="/assets/img/contact/contact-shape-2.png" alt="" />
                  <img className="contact-shape-3" src="/assets/img/contact/contact-shape-3.png" alt="" />
                </div>
                <div className="contact__info-inner white-bg">
                  <ul>
                    {contact_info_items.map((item,i) => (
                    <li key={i}>
                      <div className="contact__info-item d-flex align-items-start mb-35">
                        <div className="contact__info-icon mr-15">
                          {item.icon}
                        </div>
                        <div className="contact__info-text">
                          <h4>{item.title}</h4>
                          <p><a target={item.target ? item.target : ''} rel="noreferrer" href={`${item.link}`}>{item.text}</a></p>
                          {item.text_2 && <p><a href={`${item.link_2}`}>{item.text_2}</a></p>}
                        </div>
                      </div>
                    </li>
                    ))}
  
                  </ul>
                  <div className="contact__social pl-30">
                    <h4>Follow Us</h4>
                    <ul>
                      {social_links.map((link, i) => (
                        <li key={i}>
                          <a href="#" className={i === 0 ? 'fb' : i === 1 ? 'tw' : 'pin'} >
                            <i className={link}></i></a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
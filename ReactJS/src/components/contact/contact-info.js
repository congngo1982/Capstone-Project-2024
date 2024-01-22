import { Link } from 'react-router-dom';
import { Knowledge, OnlineSupport } from '../../svg';

const contact_items = [
  {
    col: 'offset-xxl-1 offset-xl-1 offset-lg-1',
    icon: <Knowledge />,
    title: 'Knowledge Base',
    desc: 'My good sir plastered cuppa barney cobblers mush argy bargy ruddy.',
    link_text: 'Visit Documentation',
  },
  {
    icon: <OnlineSupport />,
    title: 'Online Support',
    desc: 'My good sir plastered cuppa barney cobblers mush argy bargy ruddy.',
    link_text: 'Send a Ticket',
  },
]

const ContactInfo = () => {
  return (
    <>
      <section className="contact__area grey-bg-2 pt-120 pb-90 p-relative fix">
        <div className="contact__shape">
          <img className="contact-shape-5" src="/assets/img/contact/contact-shape-5.png" alt="" />
          <img className="contact-shape-4" src="/assets/img/contact/contact-shape-4.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            {contact_items.map((item, i) => (
              <div key={i} className={`col-xxl-5 col-xl-5 col-lg-5 col-md-6 ${item.col ? item.col : ''}`}>
                <div className="contact__item text-center mb-30 transition-3 white-bg">
                  <div className="contact__icon d-flex justify-content-center align-items-end">
                    {item.icon}
                  </div>
                  <div className="contact__content">
                    <h3 className="contact__title">{item.title}</h3>
                    <p>{item.desc}</p>
                    <Link to="/contact" className="e-btn e-btn-border">{item.link_text}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
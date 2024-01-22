import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({title,subtitle,img}) => {
  return (
    <>
      <section className="page__title-area page__title-height page__title-overlay d-flex align-items-center" 
      style={{background:`url(/assets/img/page-title/page-title${img ? img:''}.jpg)`,backgroundSize:'cover',
      backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page__title-wrapper mt-110">
                <h3 className="page__title">{title}</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{subtitle}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
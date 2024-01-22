import React from 'react';

const BlogBreadcrumb = ({category,title,author,authorName,date,img}) => {
  return (
    <>
      <section className="page__title-area page__title-height-2 page__title-overlay d-flex align-items-center" 
      style={{background:`url(${img}) center center / cover no-repeat` }}>
        <div className="page__title-shape">
          <img className="page-title-shape-1" src="/assets/img/page-title/page-title-shape-1.png" alt="" />
          <img className="page-title-shape-2" src="/assets/img/page-title/page-title-shape-2.png" alt="" />
          <img className="page-title-shape-3" src="/assets/img/page-title/page-title-shape-3.png" alt="" />
          <img className="page-title-shape-4" src="/assets/img/page-title/page-title-shape-4.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-10 ">
              <div className="page__title-wrapper mt-110">
                <span className="page__title-pre">{category}</span>
                <h3 className="page__title-2">{title}</h3>
                <div className="blog__meta d-flex align-items-center">
                  <div className="blog__author d-flex align-items-center mr-40">
                    <div className="blog__author-thumb mr-10">
                      <img src={author} alt="" />
                    </div>
                    <div className="blog__author-info blog__author-info-2">
                      <h5>{authorName}</h5>
                    </div>
                  </div>
                  <div className="blog__date blog__date-2 d-flex align-items-center">
                    <i className="fal fa-clock"></i>
                    <span>{date}</span>
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

export default BlogBreadcrumb;
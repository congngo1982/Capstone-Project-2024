import { Link } from 'react-router-dom';

import { blog_data } from "../../../data";

const blog_content = {
  title_b_s: <>We share <br /> Our</>,
  shape_text: 'thoughts',
  title_a_s: 'on design',
  subtitle: "You don't have to struggle alone, you've got our assistance and help."
}

const BlogArea = () => {
  return (
    <>
      <section className="blog__area pt-115 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3">
              <div className="section__title-wrapper text-center mb-60">
                <h2 className="section__title">{blog_content.title_b_s} <span className="yellow-bg yellow-bg-big">
                  {blog_content.shape_text} <img src="/assets/img/shape/yellow-bg.png" alt="" /></span>
                  {blog_content.title_a_s}</h2>
                <p>{blog_content.subtitle}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {blog_data.slice(0, 3).map((blog, index) => (
              <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="blog__item white-bg mb-30 transition-3 fix">
                  <div className="blog__thumb w-img fix">
                    <Link to={`/blog-details/${blog.id}`}>
                      <img src={blog.blogImg} alt="" />
                    </Link>
                  </div>
                  <div className="blog__content">
                    <div className="blog__tag">
                      <a href="#" className={blog.color ? blog.color : ''}>{blog.category}</a>
                    </div>
                    <h3 className="blog__title">
                      <Link to={`/blog-details/${blog.id}`}>{blog.title}</Link>
                    </h3>

                    <div className="blog__meta d-flex align-items-center justify-content-between">
                      <div className="blog__author d-flex align-items-center">
                        <div className="blog__author-thumb mr-10">
                          <img src={blog.author} alt="" />
                        </div>
                        <div className="blog__author-info">
                          <h5>{blog.authorName}</h5>
                        </div>
                      </div>
                      <div className="blog__date d-flex align-items-center">
                        <i className="fal fa-clock"></i>
                        <span>{blog.date}</span>
                      </div>
                    </div>
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

export default BlogArea;
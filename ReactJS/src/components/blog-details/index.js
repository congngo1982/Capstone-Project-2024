import React from 'react';
import useBlogs from '../../hooks/use-blogs';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import BlogDetailsArea from '../common/blog/blog-details-area';
import BlogBreadcrumb from '../common/breadcrumb/blog-breadcrumb';

const Index = () => {
  const { blogs } = useBlogs();
  return (
    <>
      {/* header start */}
      <Header header_white={true} />
      {/* header end */}

      {/* breadcrumb start */}
      <BlogBreadcrumb category={blogs[0].category} title={blogs[0].title} img={blogs[0].blogImg}
        author={blogs[0].author} authorName={blogs[0].authorName} date={blogs[0].date} />
      {/* breadcrumb end */}

      {/* blog details area start */}
      <BlogDetailsArea blog={blogs[0]} />
      {/* blog details area end */}

      {/* footer area start */}
      <Footer pt="pt-90" />
      {/* footer area end */}
    </>
  );
};

export default Index;
import { useParams } from 'react-router-dom';
import BlogDetailsArea from '../components/common/blog/blog-details-area';

import BlogBreadcrumb from '../components/common/breadcrumb/blog-breadcrumb';
import SEO from '../components/seo';
import useBlogs from '../hooks/use-blogs';
import Footer from '../layout/footers/footer';
import Header from '../layout/headers/header';
import Wrapper from '../layout/wrapper';

const DynamicBlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useBlogs();
  const blog = blogs.find(blog => Number(blog.id) === Number(id));
  return (
    <Wrapper>

      {/* seo start */}
      <SEO pageTitle={'Blog Details'} />
      {/* seo end */}

      {/* header start */}
      <Header header_white={true} />
      {/* header end */}

      {/* breadcrumb start */}
      <BlogBreadcrumb category={blog.category} title={blog.title} img={blog.blogImg}
        author={blog.author} authorName={blog.authorName} date={blog.date} />
      {/* breadcrumb end */}

      {/* blog details area start */}
      <BlogDetailsArea blog={blog} />
      {/* blog details area end */}

      {/* footer area start */}
      <Footer pt="pt-90" />
      {/* footer area end */}

    </Wrapper>
  );
};

export default DynamicBlogDetails;
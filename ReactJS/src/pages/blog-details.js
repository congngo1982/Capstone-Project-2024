import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import BlogDetailsMain from '../components/blog-details';

const BlogDetails = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Details'} />
      <BlogDetailsMain/>
    </Wrapper>
  );
};

export default BlogDetails;
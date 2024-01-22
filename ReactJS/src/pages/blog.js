import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import BlogMain from '../components/blog';

const Blog = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog'} />
      <BlogMain/>
    </Wrapper>
  );
};

export default Blog;
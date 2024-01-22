import useBlogs from '../../hooks/use-blogs';
import BlogItem from '../common/blog/blog-item';
import BlogSidebar from '../common/blog/blog-sidebar';

const BlogItems = () => {
  const { blogs, setBlogs } = useBlogs();
  return (
    <>
      <section className="blog__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="row">
                <BlogItem itemsPerPage={4} items={blogs} />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <BlogSidebar setBlogs={setBlogs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogItems;
import { useState } from 'react';
import { Link } from 'react-router-dom';

import useBlogs from '../../../hooks/use-blogs';
import { SearchTwo } from '../../../svg';


const tags = ['Course','Videos','App','Education','Data Science','Machine Learning','Tips']


const BlogSidebar = ({ setBlogs }) => {
  const { blogs } = useBlogs();
  const [selectActive,setSelectActive] = useState('');
  const categories = ['Category', ...new Set(blogs.map(blog => blog.category))];
  // handleCategory
  const handleCategory = category => {
    setSelectActive(category)
    if (category === 'Category') {
      setBlogs(blogs)
    }
    else {
      setBlogs(blogs.filter(blog => blog.category === category))
    }
  }

  // handleChange
  const handleChange = e => {
    setBlogs(blogs.filter(blog => blog.title.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  // handleTag
  const handleTag = (tag) => {
    setSelectActive(tag)
    setBlogs(blogs.filter(blog => blog.tags.indexOf(tag) > -1))
  }

  return (
    <>
      <div className="blog__sidebar pl-70">
        <div className="sidebar__widget mb-60">
          <div className="sidebar__widget-content">
            <div className="sidebar__search p-relative">
              <form onSubmit={(e) => e.preventDefault()}>
                <input onChange={handleChange} type="text" placeholder="Search for blogs..." />
                <button type="submit">
                  <SearchTwo />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="sidebar__widget mb-55">
          <div className="sidebar__widget-head mb-35">
            <h3 className="sidebar__widget-title">Recent posts</h3>
          </div>
          <div className="sidebar__widget-content">
            <div className="rc__post-wrapper">
              {blogs.slice(0, 3).map((blog, i) => (
                <div key={i} className="rc__post d-flex align-items-center">
                  <div className="rc__thumb mr-20">
                    <Link to={`/blog-details/${blog.id}`}>
                      <img src={blog.blogImg} alt="" />
                    </Link>
                  </div>
                  <div className="rc__content">
                    <div className="rc__meta">
                      <span>{blog.date}</span>
                    </div>
                    <h6 className="rc__title">
                      <Link to={`/blog-details/${blog.id}`}>{blog.title.substring(0, 30)}...</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sidebar__widget mb-55">
          <div className="sidebar__widget-head mb-35">
            <h3 className="sidebar__widget-title">Category</h3>
          </div>
          <div className="sidebar__widget-content">
            <div className="sidebar__category">
              <ul>
                {categories.map((category, i) => (
                  <li onClick={() => handleCategory(category)} key={i}>
                    <button className={category === selectActive ? 'active' : ''}>{category}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="sidebar__widget mb-55">
          <div className="sidebar__widget-head mb-35">
            <h3 className="sidebar__widget-title">Tags</h3>
          </div>
          <div className="sidebar__widget-content">
            <div className="sidebar__tag">
              {tags.map((tag, i) => (
                <button className={tag === selectActive ? 'active' : ''}
                 onClick={() => handleTag(tag)} key={i}>{tag}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
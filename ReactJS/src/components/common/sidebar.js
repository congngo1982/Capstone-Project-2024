import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { menu_bar, selectMenuBar } from '../../redux/features/header-slice';
import { Search } from '../../svg';


const Sidebar = () => {
  const menuOpen = useSelector(selectMenuBar);
  const dispatch = useDispatch();
  const [home, setHome] = useState(false)
  const [courses, setcourses] = useState(false)
  const [blog, setBlog] = useState(false)
  const [pages, setPages] = useState(false)


  const openMobileMenu = menu => {

    if (menu === 'home') {
      setHome(!home)
      setcourses(false)
      setBlog(false)
      setPages(false)
    }
    else if (menu === 'courses') {
      setHome(false)
      setcourses(!courses)
      setBlog(false)
      setPages(false)
    }
    else if (menu === 'blog') {
      setHome(false)
      setcourses(false)
      setBlog(!blog)
      setPages(false)
    }
    else if (menu === 'pages') {
      setHome(false)
      setcourses(false)
      setBlog(false)
      setPages(!pages)
    }
  };

  return (
    <>
      <div className={menuOpen ? "sidebar__area open" : "sidebar__area"}>
        <div className="sidebar__wrapper">
          <div className="sidebar__close">
            <button className="sidebar__close-btn" id="sidebar__close-btn"
              onClick={() => dispatch(menu_bar(false))}>
              <span><i className="far fa-times"></i></span>
              <span>close</span>
            </button>
          </div>
          <div className="sidebar__content">
            <div className="logo mb-40">
              <Link to="/"><img src="/assets/img/logo/logo.png" alt="logo" /></Link>
            </div>
            <div className="mm-menu">
              <ul>
                <li className={home ? "has-droupdown active" : "has-droupdown"}>
                  <a href='#!' onClick={() => { openMobileMenu('home'); }}>Home </a>
                  <ul className={home ? "sub-menu active" : "sub-menu"} onClick={() => dispatch(menu_bar(false))}>
                    <li><Link to="/">Home 1</Link></li>
                    <li><Link to="/home-two">Home 2</Link></li>
                    <li><Link to="/home-three">Home 3</Link></li>
                  </ul>
                </li>
                <li className={courses ? "has-droupdown active" : "has-droupdown"}>
                  <a href='#!' onClick={() => { openMobileMenu('courses'); }}>Courses </a>
                  <ul className={courses ? "sub-menu active" : "sub-menu"} onClick={() => dispatch(menu_bar(false))}>
                    <li><Link to="/courses">Courses </Link></li>
                    <li><Link to="/course-list">Course List</Link></li>
                    <li><Link to="/course-sidebar">Course Sidebar</Link></li>
                    <li><Link to="/course-details">Course Details</Link></li>
                  </ul>
                </li>
                <li className={blog ? "has-droupdown active" : "has-droupdown"}>
                  <a href='#!' onClick={() => { openMobileMenu('blog'); }}>Blog </a>
                  <ul className={blog ? "sub-menu active" : "sub-menu"} onClick={() => dispatch(menu_bar(false))}>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/blog-details">Blog Details</Link></li>
                  </ul>
                </li>
                <li className={pages ? "has-droupdown active" : "has-droupdown"}>
                  <a href='#!' onClick={() => { openMobileMenu('pages'); }}>Pages </a>
                  <ul className={pages ? "sub-menu active" : "sub-menu"} onClick={() => dispatch(menu_bar(false))}>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/instructor">Instructor</Link></li>
                    <li><Link to="/instructor-details">Instructor Details</Link></li>
                    <li><Link to="/event-details">Event Details</Link></li>
                    <li><Link to="/cart">My Cart</Link></li>
                    <li><Link to="/wishlist">My Wishlist</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                    <li><Link to="/sign-in">Sign In</Link></li>
                    <li><Link to="/sign-up">Sign Up</Link></li>
                    <li><Link to="/error">Error</Link></li>
                  </ul>
                </li>
                <li onClick={() => dispatch(menu_bar(false))}><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="sidebar__search p-relative mt-40 ">
              <form onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Search..." />
                <button type="submit"><Search /></button>
              </form>
            </div>

          </div>
        </div>
      </div>

    {/* <!-- sidebar overlay end --> */}
    <div onClick={() => dispatch(menu_bar(false))}
        className={`body-overlay ${menuOpen ? 'opened' : ''}`}></div>
      {/* <!-- sidebar overlay end --> */}
    </>
  )
}

export default Sidebar;
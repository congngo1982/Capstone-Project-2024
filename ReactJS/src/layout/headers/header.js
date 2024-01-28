import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CartArea from '../../components/common/cart';
import Sidebar from '../../components/common/sidebar';
import useCart from '../../hooks/use-cart';
import useSticky from '../../hooks/use-sticky';
import { cart_open } from '../../redux/features/cart-slice';
import { selectCourses } from '../../redux/features/course-slice';
import { menu_bar } from '../../redux/features/header-slice';
import { Cart, CatDot } from '../../svg';
import NavMenu from './nav-menu';

export const cat_submenu = ['English Learning', 'Web Development', 'Logo Design', 'Motion Graphics', 'Video Edition']

const Header = ({ header_white, header_shadow }) => {
  const { sticky } = useSticky();
  const dispatch = useDispatch();
  const { quantity } = useCart();
  const courses = useSelector(selectCourses);
  const [searchCourses, setSearchCourses] = useState([]);
  const [focus, setFocus] = useState(false);
  const [msg,setMsg] = useState('');

  // handleChange
  const handleChange = (e) => {
    if (!e.target.value) {
      setMsg('please type some text');
    }
    if (e.target.value) {
      setSearchCourses(courses.filter(item => item.title.toLowerCase()
      .includes(e.target.value.toLowerCase())))
    }
    else {
      setSearchCourses([])
    }
  }


  return (
    <>
      <header>
        <div id="header-sticky" className={`header__area 
        ${header_shadow ? 'header__padding-2 header__shadow' : 'header__transparent header__padding'} 
        ${header_white ? 'header__white' : ''} ${sticky ? 'sticky' : ''}`}>
          <div className={`${header_shadow ? 'container' : 'container-fluid'}`}>
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                <div className="header__left d-flex">
                  <div className="logo">
                    <Link to="/">
                      <img src={header_white && !sticky ? "/assets/img/logo/logo-2.png"
                        : "/assets/img/logo/logo.png"} alt="logo" />
                    </Link>
                  </div>
                  <div className="header__category d-none d-lg-block">
                    <nav>
                      <ul>
                        <li>
                          <Link to="/courses" className="cat-menu d-flex align-items-center">
                            <div className="cat-dot-icon d-inline-block">
                              <CatDot />
                            </div>
                            <span>Category</span>
                          </Link>
                          <ul className="cat-submenu">
                            {cat_submenu.map((category, index) => (
                              <li key={index}>
                                <Link to="/course-details">{category}</Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
                <div className="header__right d-flex justify-content-end align-items-center">
                  <div className={`${header_white ? 'main-menu main-menu-3 d-none d-xl-block' :
                    header_shadow ? 'main-menu main-menu-2 d-none d-xl-block' : 'main-menu d-none d-xl-block'}`}>
                    <nav id="mobile-menu">
                      {/* NavMenu start */}
                      <NavMenu />
                      {/* NavMenu end */}
                    </nav>
                  </div>
                  {!header_shadow && <div className="header__search p-relative ml-50 d-none d-md-block">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="header__search-input">
                        <input onMouseDown={() => setFocus(false)} onFocus={() => setFocus(true)}
                          onChange={handleChange} type="text" placeholder="Search..." />
                        <button type="button"><i className="fad fa-search"></i></button>
                      </div>
                    </form>
                    <div className={`header__search-result ${searchCourses.length > 2 && focus ? 'search_course' : ''}`}>
                      {focus && searchCourses.map((item, i) => (
                        <div key={i} className='header__search-result-item d-flex align-items-start'>
                          <div className="header__search-result-thumb">
                            <Link to={`/course-details/${item.id}`}>
                              <img src={item.courseImage} alt="" />
                            </Link>
                          </div>
                          <div className="header__search-result-content">
                            <h4 className="header__search-result-title">
                              <Link to={`/course-details/${item.id}`}>
                                {item.title.substring(0,30)}...</Link>
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="header__cart">
                      <button className="cart-toggle-btn" onClick={() => dispatch(cart_open(true))}>
                        <div className="header__cart-icon">
                          <Cart />
                        </div>
                        <span className="cart-item">{quantity}</span>
                      </button>
                    </div>
                  </div>}
                  {!header_shadow && <div className="header__btn ml-20 d-none d-sm-block">
                    <Link to="/sign-in" className="e-btn">Đăng nhập</Link>
                  </div>}
                  {header_shadow && <div className="header__btn header__btn-2 ml-50 d-none d-sm-block">
                    <Link to="/sign-up" className="e-btn">Đăng ký</Link>
                  </div>}
                  <div className="sidebar__menu d-xl-none">
                    <div onClick={() => dispatch(menu_bar(true))} className="sidebar-toggle-btn ml-30" id="sidebar-toggle">
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* cart start */}
      <CartArea />
      {/* cart end */}

      {/* sidebar start */}
      <Sidebar />
      {/* sidebar end */}
    </>
  );
};

export default Header;
import NavMenu from './nav-menu';
import { cat_submenu } from './header';
import { CatDot } from '../../svg';
import useSticky from '../../hooks/use-sticky';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/common/sidebar';
import { menu_bar } from '../../redux/features/header-slice';
import { useDispatch } from 'react-redux';

const HeaderTwo = () => {
  const {sticky} = useSticky();
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <div id="header-sticky" className={`header__area header__transparent header__padding-2 ${sticky ? 'sticky' : ''}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                <div className="header__left d-flex">
                  <div className="logo">
                    <Link to="/">
                      <img src="/assets/img/logo/logo.png" alt="logo" />
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
                  <div className="main-menu main-menu-2 d-none d-xl-block">
                    <nav id="mobile-menu">
                      {/* NavMenu start */}
                      <NavMenu />
                      {/* NavMenu end */}
                    </nav>
                  </div>
                  <div className="header__btn header__btn-2 ml-50 d-none d-sm-block">
                    <Link to="/sign-up" className="e-btn">Sign up</Link>
                  </div>
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

        {/* sidebar start */}
        <Sidebar />
      {/* sidebar end */}
    </>
  );
};

export default HeaderTwo;
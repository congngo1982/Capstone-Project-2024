import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchBar from '../../components/common/search-bar';
import Sidebar from '../../components/common/sidebar';
import useSticky from '../../hooks/use-sticky';
import { menu_bar } from '../../redux/features/header-slice';
import { search_bar } from '../../redux/features/search-slice';
import { Search } from '../../svg';
import NavMenu from './nav-menu';

const HeaderThree = () => {
  const { sticky } = useSticky();
  const dispatch = useDispatch()
  return (
    <>
      <header>
        <div id="header-sticky" className={`header__area header__transparent header__padding-2 ${sticky ? 'sticky' : ''}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="header__left d-flex">
                  <div className="logo">
                    <Link to="/">
                      <img className="logo-white" src="/assets/img/logo/logo-2.png" alt="logo" />
                      <img className="logo-black" src="/assets/img/logo/logo.png" alt="logo" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 d-none d-xl-block">
                <div className="main-menu main-menu-3 d-none d-xl-block">
                  <nav id="mobile-menu">
                    {/* NavMenu start */}
                    <NavMenu />
                    {/* NavMenu end */}
                  </nav>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="header__right d-flex justify-content-end align-items-center">
                  <div onClick={() => dispatch(search_bar(true))} className="header__search-2">
                    <Search onClick={() => dispatch(search_bar(true))} />
                  </div>
                  <div className="header__btn header__btn-2 ml-30 d-none d-sm-block">
                    <Link to="/sign-up" className="e-btn">Sign up</Link>
                  </div>
                  <div className="sidebar__menu d-xl-none">
                    <div onClick={() => dispatch(menu_bar(true))} className="sidebar-toggle-btn sidebar-toggle-btn-white ml-30" id="sidebar-toggle">
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

      {/* search bar start */}
      <SearchBar />
      {/* search bar end */}

      {/* sidebar start */}
      <Sidebar />
      {/* sidebar end */}
    </>
  );
};

export default HeaderThree;
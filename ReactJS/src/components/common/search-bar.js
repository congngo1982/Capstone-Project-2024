import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search_bar, selectSearchBar } from '../../redux/features/search-slice';

const SearchBar = () => {
  const search_open = useSelector(selectSearchBar);
  const dispatch = useDispatch();
  return (
    <>
      <div className={`header__search-3 white-bg transition-3 ${search_open ? 'search-opened' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="header__search-3-inner text-center">
                <form onSubmit={e => e.preventDefault()}>
                  <div className="header__search-3-btn" onClick={()=> dispatch(search_bar(false))}>
                    <a href="#" className="header__search-3-btn-close">
                      <i className="fal fa-times"></i>
                    </a>
                  </div>
                  <div className="header__search-3-header">
                    <h3>Search</h3>
                  </div>
                  <div className="header__search-3-categories">
                    <ul className="search-category">
                      <li><Link to="/courses">All Categories</Link></li>
                      <li><Link to="/courses">Accessories</Link></li>
                      <li><Link to="/courses">Chair</Link></li>
                      <li><Link to="/courses">Tablet</Link></li>
                      <li><Link to="/courses">Men</Link></li>
                      <li><Link to="/courses">Women</Link></li>
                    </ul>
                  </div>
                  <div className="header__search-3-input p-relative">
                    <input type="text" placeholder="Search for products... " />
                    <button type="submit"><i className="far fa-search"></i></button>
                  </div>
                </form>


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* body overlay start */}
      <div className={`body-overlay ${search_open ? 'opened' : ''}`} 
      onClick={()=> dispatch(search_bar(false))}></div>
      {/* body overlay start */}
    </>
  );
};

export default SearchBar;
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { cart_course } from '../../redux/features/cart-slice';
import { remove_wishlist_product, wishlistItems } from '../../redux/features/wishlist-slice';

const WishlistArea = () => {
  const wishlists = useSelector(wishlistItems)
  const dispatch = useDispatch();
  return (
    <>
      <section className="cart-area pt-100 pb-100">
        <div className="container">
          {wishlists.length === 0 &&
            <div className='text-center'>
              <h3>No wishlist Course</h3>
              <Link to={'/course-sidebar'} className="e-btn e-btn-7 mt-15">Return to shop</Link>
            </div>
          }

          {wishlists.length > 0 && <div className="row">
            <div className="col-12">
              <form onSubmit={e => e.preventDefault()}>
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlists.map((item, i) => (
                        <tr key={i}>
                          <td className="product-thumbnail">
                            <Link to={`/course-details/${item.id}`}>
                              <img src={item.courseImage} alt="" />
                            </Link>
                          </td>
                          <td className="product-name">
                            <Link to={`/course-details/${item.id}`}>{item.title}</Link>
                          </td>
                          <td className="product-price"><span className="amount">
                            {item.price !== 'free' && '$'}{item.price}</span>
                          </td>
                          <td className="product-quantity">
                            <button onClick={()=> dispatch(cart_course(item))} className="e-btn e-btn-border" type="button">Add TO Cart</button>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">{item.price !== 'free' && '$'}{item.price}</span>
                          </td>
                          <td className="product-remove" onClick={() => dispatch(remove_wishlist_product(item))}>
                            <button ><i className="fa fa-times"></i></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>}
        </div>
      </section>
    </>
  );
};

export default WishlistArea;
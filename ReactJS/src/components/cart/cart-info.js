import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import useCart from '../../hooks/use-cart';
import { cartCourses, cart_course, clear_cart, decrease_quantity, remove_cart_course } 
from '../../redux/features/cart-slice';

const CartInfo = () => {
  const cartItems = useSelector(cartCourses);
  const dispatch = useDispatch();
  const {total} = useCart();
  return (
    <>
      <section className="cart-area pt-100 pb-100">
        <div className="container">
          {cartItems.length === 0 &&
            <div className='text-center'>
              <h3>Your cart is empty</h3>
              <Link to={'/course-sidebar'} className="e-btn e-btn-7 mt-15">Return to shop</Link>
            </div>
          }

         {cartItems.length > 0 && <div className="row">
            <div className="col-12">
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
                    {cartItems.map((item, i) => (
                      <tr key={i}>
                        <td className="product-thumbnail">
                          <Link to={`/course-details/${item.id}`}>
                          <img src={item.courseImage} alt="" />
                         </Link>
                        </td>
                        <td className="product-name"><Link to={`/course-details/${item.id}`}>{item.title}</Link></td>
                        <td className="product-price"><span className="amount">{item.price !== 'free' && '$'} {item.price}</span></td>

                        <td className="product-quantity text-center">
                          <div className="product-quantity mt-10 mb-10">
                            <div className="product-quantity-form">
                              <form onSubmit={(e) => e.preventDefault()}>
                                <button onClick={() => dispatch(decrease_quantity(item))} className="cart-minus"><i className="far fa-minus"></i></button>
                                <input className="cart-input" onChange={(e) => e.target.value} value={item.quantity} type="text" />
                                <button onClick={() => dispatch(cart_course(item))} className="cart-plus"><i className="far fa-plus"></i></button>
                              </form>
                            </div>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">{item.price === 'free' ? 'Free' : item.quantity * item.price}</span>
                        </td>
                        <td onClick={() => dispatch(remove_cart_course(item))} className="product-remove">
                          <button ><i className="fa fa-times"></i></button>
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="coupon-all">
                    <div className="coupon d-sm-flex align-items-center">
                      <input required id="coupon_code" className="input-text" name="coupon_code" defaultValue=""
                        placeholder="Coupon code" type="text" />
                      <button className="e-btn" name="apply_coupon" type="submit">Apply
                        coupon</button>
                    </div>
                    <div className="coupon2">
                      <button onClick={() => dispatch(clear_cart())} className="e-btn" 
                      name="update_cart" type="button">Clear cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 ml-auto">
                  <div className="cart-page-total">
                    <h2>Cart totals</h2>
                    <ul className="mb-20">
                      <li>Subtotal <span>${total}</span></li>
                      <li>Total <span>${total}</span></li>
                    </ul>
                    <Link className="e-btn e-btn-border" to="/checkout">Proceed to checkout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </section>
    </>
  );
};

export default CartInfo;
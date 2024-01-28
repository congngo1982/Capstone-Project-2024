import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/use-cart';
import { cart_course, cart_open, decrease_quantity, remove_cart_course, selectCartOpen } 
from '../../redux/features/cart-slice';

const CartArea = () => {
  const is_cart_open = useSelector(selectCartOpen);
  const dispatch = useDispatch();
  const {total,cartItems} = useCart();
  return (
    <>
      {/* <!-- cart mini area start --> */}
      <div className="cartmini__area">
        <div className={`cartmini__wrapper ${is_cart_open ? 'opened' : ''}`}>
          <div className="cartmini__title">
            <h4>Shopping cart</h4>
          </div>
          <div className="cartmini__close" onClick={()=> dispatch(cart_open(false))}>
            <button type="button" className="cartmini__close-btn"><i className="fal fa-times"></i></button>
          </div>
          {cartItems.length === 0 &&
            <div onClick={()=> dispatch(cart_open(false))} className='text-center mt-50'>
              <h3>Your cart is empty</h3>
              <Link to={'/course-sidebar'} className="e-btn e-btn-7 mt-15">Return to shop</Link>
            </div>
          }
          {cartItems.length > 0 &&<div className="cartmini__widget">
            <div className="cartmini__inner">
              <ul>
                {cartItems.map((item,i) => (
                <li key={i}>
                  <div className="cartmini__thumb">
                    <a href="#">
                      <img src={item.courseImage} alt="" />
                    </a>
                  </div>
                  <div className="cartmini__content">
                    <h5><a href="#">{item.title} </a></h5>
                    <div className="product-quantity mt-10 mb-10">
                      <span onClick={() => dispatch(decrease_quantity(item))} className="cart-minus">-</span>
                      <input className="cart-input" type="text" onChange={(e) => e.target.value} value={item.quantity} />
                      <span onClick={() => dispatch(cart_course(item))} className="cart-plus">+</span>
                    </div>
                    <div className="product__sm-price-wrapper">
                      <span className="product__sm-price">{item.price !== 'free' && '$'}{item.price}</span>
                    </div>
                  </div>
                  <button onClick={() => dispatch(remove_cart_course(item))} className="cartmini__del">
                    <i className="fal fa-times"></i>
                  </button>
                </li>
                ))}
              </ul>
            </div>
            <div className="cartmini__checkout">
              <div className="cartmini__checkout-title mb-30">
                <h4>Subtotal:</h4>
                <span>${total}</span>
              </div>
              <div className="cartmini__checkout-btn" onClick={()=> dispatch(cart_open(false))}>
                <Link to="/cart" className="e-btn e-btn-border mb-10 w-100"> <span></span> view cart</Link>
                <Link to="/checkout" className="e-btn w-100"> <span></span> checkout</Link>
              </div>
            </div>
          </div>}
        </div>
      </div>

      {/* body overlay */}
      <div className={`body-overlay ${is_cart_open ? 'opened' : ''}`} 
      onClick={()=> dispatch(cart_open(false))}></div>
      {/* <!-- cart mini area end -->  */}
    </>
  );
};

export default CartArea;
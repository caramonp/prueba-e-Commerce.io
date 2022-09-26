import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

import "./Checkout.styles.css"

const CheckoutScreen = () => {
    const { cartItems, cartTotal, setCartItems } = useContext(CartContext);

    const handleClink = () => {
      alert("Thanks for your purchase")
      setCartItems({})
    }
  
    return (
      <div className='checkout-container'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem:any) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${cartTotal.toFixed(2)}</div>

        <button className="button-pay" onClick={handleClink}><Link to="products"></Link>Clink to pay</button>
      </div>
    );
  };
  
  export default CheckoutScreen;
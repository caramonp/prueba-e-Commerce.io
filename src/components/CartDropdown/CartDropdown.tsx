import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"

import "./CartDropdown.css"

const CartDropdown = () => {
    const  { cartItems } = useContext(CartContext)

    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.lenght !== 0 ? cartItems.map((item:any)=> <CartItem 
                key={item.id} 
                title={item.title} 
                quantity={item.quantity} 
                image={item.image}/>): <h1 className="empty-message">YOU HAVE NOTHING ADDED YET</h1>}
            </div>
            <Link to="checkout">
                <button className="cart-dropdown-button">GO TO CHECKOUT</button>
            </Link>
        </div>
    )
}

export default CartDropdown
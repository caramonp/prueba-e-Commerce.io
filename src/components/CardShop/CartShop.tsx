import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartShop.css"

const CartShop = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return(
        <div className="cart-shop-container" onClick={toggleIsCartOpen}>
            <AiOutlineShoppingCart className="cart-shop" size={"30px"}/>
            <span className="cart-shop-count">{cartCount}</span>
        </div>
    )
}

export default CartShop
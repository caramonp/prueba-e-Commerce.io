import "./CartItem.css"

const CartItem = ( {title, quantity, image}:any) => {
return(
    <div className="cart-item-container">
        <img className="cart-item-image" src={image} alt={title}/>
        <div className="item-details">
            <span className="cart-item-title">{title}</span>
            <span>{quantity}</span>
        </div>
    </div>
)
}

export default CartItem
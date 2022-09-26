import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import logo from "../../assest/logo.svg"
import { AiOutlineMenu } from "react-icons/ai";
import CartShop from "../CardShop/CartShop";
import CartDropdown from "../CartDropdown/CartDropdown";
import "./Header.css"

const Header = () => {
    const { isCartOpen } = useContext(CartContext)
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    return(
    <header className="header-style">
        <div className="session-header">
            <div>
                {
                    open ? 
                <nav className="navigation">
                    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
                </nav> : null
                }

                <button className="menu" onClick={handleClick}><AiOutlineMenu  size={"30px"}/></button>
            </div>
            <Link to="/"> <img src={logo} alt="logo" className="logo-style"/></Link>
            <CartShop />
            { isCartOpen && <CartDropdown />  }
            
        </div>
    </header>
    )
    
}

export default Header
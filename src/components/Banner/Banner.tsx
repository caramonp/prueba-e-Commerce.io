import { Link } from "react-router-dom";
import './Banner.css'

const Banner = () => {
    return(
        <section className="banner">
            <h2 className='text-banner'>Lorem ipsum dolor sit amet</h2>
            <h3 className='text-banner'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut lectus arcu. 
            </h3>
            <Link to="/products"> <button className='button-banner'> Buy Now</button></Link>
        </section>
    )
}

export default Banner
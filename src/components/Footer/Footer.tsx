import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import './Footer.css'

const Footer = () => {
    return(
        <footer className="footer-style">
            <h6>Copyright © 2022 Clothing store</h6>
            <div className="logos-social-media">
                <a href="https://www.facebook.com/"><AiFillFacebook color="#9747FF" size={25}/></a>
                <a href="https://www.twitter.com"><AiFillTwitterCircle color="#9747FF" size={25}/></a>
                <a href="https://www.instagram.com"><AiFillInstagram color="#9747FF" size={25}/></a>
            </div>
        </footer>
    )
}

export default Footer
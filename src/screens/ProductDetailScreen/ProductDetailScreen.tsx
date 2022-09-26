import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useParams } from "react-router-dom";
import { TbShoppingCartPlus } from "react-icons/tb";

import "./ProductDetailScreen.css"

const ProductDetailScreen = () => {

    const { addItemToCart } = useContext(CartContext)
    let params = useParams();
    
    const [product, setProduct] = useState({
        title: "",
        image: "",
        description: "",
        price: ""
    })
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.productId}`)
        .then(res=>res.json())
        .then(json=>setProduct(json))
      }, [params.productId]);
    return(
        <section className="container-product-detail">
            <div className="container-description">
                <div className="img-detail-container">
                    <img src={product?.image} className="img-detail"/>
                </div>
                <h3>Product details</h3>
                <h4 className="desciption">{product.description}</h4>
            </div>
            <div className="add-car-container">
                <div>
                    <h1 className="title-detail">{product?.title}</h1>
                    <h3 className="price-detail">${product.price}</h3>
                </div>
                <button className="button-detail" onClick={() => addItemToCart(product)}> <TbShoppingCartPlus color={"#9747FF"} size={20}/>ADD TO CART</button>
            </div>
        </section>
    )
}

export default ProductDetailScreen
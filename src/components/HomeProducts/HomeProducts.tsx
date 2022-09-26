import { useEffect, useState} from "react"
import CardFeatured from "../CardFeature/CardFeatured";

const HomeProducts = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=4')
        .then(res=>res.json())
        .then(json=>setProducts(json))
      }, []);

    return(
        <CardFeatured description={products}/>
    )
}

export default HomeProducts
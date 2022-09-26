import { useEffect, useState} from "react"
import CardFeatured from "../../components/CardFeature/CardFeatured";

const ProductListScreen = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProducts(json))
      }, []);

    return(
        <CardFeatured description={products}/>
    )
}

export default ProductListScreen
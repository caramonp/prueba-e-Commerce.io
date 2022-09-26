import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./ContainerCardFeature.css";

type ConteinerCardFeatureProps = {
  descriptionElement: Record<string, string>;
}
const ContainerCardFeature = ({ descriptionElement }: ConteinerCardFeatureProps) => {

  const { addItemToCart } = useContext(CartContext)
  return (
    <div className="content-card-feature">
      <div className="container-img" style={{ backgroundImage: `url(${descriptionElement.image})` }}>
      </div>
      <Link to={`/products/${descriptionElement.id}`} className="content-link">
        View details
      </Link>
      <div className="content-information-feature">
        <h3 className="name-feature">{descriptionElement.title}</h3>
        <h3 className="price-feature">{`$${descriptionElement.price}`}</h3>
        <button className="button-feature" onClick={() => addItemToCart(descriptionElement)}>Add to cart</button>
      </div>
    </div>
  );
};
export default ContainerCardFeature;

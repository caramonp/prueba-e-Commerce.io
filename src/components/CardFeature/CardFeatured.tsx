import ContainerCardFeature from "../ContainerCardFeature/ContainerCardFeature";
import "./CardFeature.css";

type CardFeatureProps = {
  description: Record<string, string>[];
}

const CardFeatured = ({description }: CardFeatureProps) => {
  return (
    <div className="main-container-feature">
      {description.map((element, index) => (
        <ContainerCardFeature descriptionElement={element} key={index} />
      ))}
    </div>
  );
};

export default CardFeatured;

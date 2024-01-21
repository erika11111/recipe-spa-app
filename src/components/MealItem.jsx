import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
export default function MealItem(props) {
  const { strMeal: name, idMeal: id, strMealThumb: image } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title" style={{ color: "black" }}>
          {name}
        </span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${id}`} className="btn">
          View recipe
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
export default function CategoryItem(props) {
  const {
    //idCategory: id,
    strCategory: name,
    strCategoryThumb: image,
    strCategoryDescription: description,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title" style={{ color: "black" }}>
          {name}
        </span>
        <p>{description.slice(0, 90)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${name}`} className="btn">
          View category
        </Link>
      </div>
    </div>
  );
}

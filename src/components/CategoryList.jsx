import CategoryItem from "./CategoryItem";
/* eslint-disable react/prop-types */
export default function CategoryList({ catalog = [] }) {
  return (
    <div className="list">
      {catalog.map((item) => (
        <CategoryItem key={item.id} {...item} />
      ))}
    </div>
  );
}

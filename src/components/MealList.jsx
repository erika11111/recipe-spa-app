import MealItem from "./MealItem";
/* eslint-disable react/prop-types */
export default function MealList({ meals }) {
  return (
    <div className="list">
      {meals.map((item) => (
        <MealItem key={item.id} {...item} />
      ))}
    </div>
  );
}

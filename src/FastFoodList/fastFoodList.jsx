import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({ FastFoodItems }) => {
  let delay = 0.1;

  return (
    <div className="row">
      {FastFoodItems.map((fastfood) => {
        delay += 0.03;
        return (
          <div className="col-md-4 col-sm-6 mb-grid-gutter" key={fastfood.it}>
            <FastFoodItems {...fastfood} delay={delay} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;

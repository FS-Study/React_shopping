import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { memo } from "react";

const MealItem = ({ props }) => {
  // console.log(props);
  // console.log({ name: props.name });
  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>${props.price}</p>
      </div>
      <MealItemForm props={props} />
    </div>
  );
};

export default memo(MealItem);

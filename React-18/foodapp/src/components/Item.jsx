import React from "react";
import styles from "./item.module.css";

function Item({ item }) {
  return (
    <div>
      <div key={item} className={styles.itemContainer}>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
            alt=""
          />
        </div>

        <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;

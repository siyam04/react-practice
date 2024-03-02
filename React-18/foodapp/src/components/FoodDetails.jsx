import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

function FoodDetails({ foodID }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "ddc0bde485084a27a693341a6e7ce95d";

  useEffect(() => {
    async function fetchFoodDetails() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
      // console.log(data);
    }
    fetchFoodDetails();
  }, [foodID]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImg} src={food.image} alt="" />

        <div className={styles.recipeDetails}>
          <span>
            <strong>⏲ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👨‍👧‍👦 <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🍀 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          💲{" "}
          <span>
            <strong>{food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
      </div>

      <h2>Ingredients</h2>
      <ItemList food={food} isLoading={isLoading} />

      <h2>Instructions</h2>
      <div className={styles.recipeIns}>
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li key={step}>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}

export default FoodDetails;

import Fruit from "./Fruit";

const Fruits = () => {
  //   const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];

  const fruits = [
    { id: 100, name: "Apple", price: 10, soldOut: false },
    { id: 200, name: "Mango", price: 7, soldOut: false },
    { id: 300, name: "Banana", price: 2, soldOut: true },
    { id: 400, name: "Orange", price: 5, soldOut: false },
    { id: 500, name: "Pineapple", price: 8, soldOut: true },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.id}
            id={fruit.id}
            name={fruit.name}
            price={fruit.price}
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </div>
  );
};

export default Fruits;

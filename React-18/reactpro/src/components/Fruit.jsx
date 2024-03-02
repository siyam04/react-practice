function Fruit({ id, name, price, soldOut }) {
  return (
    <>
      <li>
        {id}: {name} ${price} ~ {soldOut ? "SOLD OUT" : ""}
      </li>
    </>
  );
}

export default Fruit;

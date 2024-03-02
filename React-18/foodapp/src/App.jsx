import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import FoodDetails from "./components/FoodDetails";
import FoodList from "./components/FoodList";
import InnerContainer from "./components/InnerContainer";
import Nav from "./components/Nav";
import Search from "./components/Search";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("656329");

  return (
    <>
      <div className="App">
        <Nav />
        <Search foodData={foodData} setFoodData={setFoodData} />
        <Container>
          <InnerContainer>
            <FoodList foodData={foodData} setFoodID={setFoodID} />
          </InnerContainer>
          <InnerContainer>
            <FoodDetails foodID={foodID} />
          </InnerContainer>
        </Container>
      </div>
    </>
  );
}

export default App;

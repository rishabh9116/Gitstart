import Header from "./components/Layout/Header";
import React,{ Fragment } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
      <footer>
      
      </footer>
    </Fragment>
  );
}

export default App;

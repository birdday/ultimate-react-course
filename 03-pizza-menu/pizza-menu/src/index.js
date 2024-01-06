import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Webpack has auto added styles to differnt html types

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photo} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}

function Header() {
  // This works, but for larger projects, we will manage this via style sheets and styled componend.
  // const style = {
  //   color: "red",
  //   fontSize: "48px",
  //   textTransform: "uppercase",
  // };
  // style = { style };

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Ingredients here...."
        photo="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Fungi"
        ingredients="Mushrooooom"
        photo="pizzas/funghi.jpg"
        price={11}
      />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;
  const isOpen = openHour <= hour && hour < closedHour;

  const res = isOpen ? (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open!
    </footer>
  ) : (
    <footer>{new Date().toLocaleTimeString()}. We're currently closed!</footer>
  );

  return res;

  // return React.createElement("footer", null, "We're currently open!");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // StrictMode renders components twice to find bugs. Generally always use.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Component Tree to Explain Relationships
// Component As Function, Return Markup for React

// Pizzas
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

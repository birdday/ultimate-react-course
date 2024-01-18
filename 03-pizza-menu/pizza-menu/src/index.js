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
      <h1> ast React Pizza Co.</h1>
    </header>
  );
}

// Destructured props.
function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const isPizzas = pizzas.length > 0;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {isPizzas ? (
        // Need a react fragment to fix the DOM Tree. Use just brackets rather than a div.
        // To make a fragment with a key, we write it as <React.Fragment ket="blah"></React.Fragment>.
        // Fragments allow us to return multiple components to the DOM tree, rather than a single component (i.e. Div).
        <>
          <p>
            Authentic Italian Cuisine. Brick Oven Pizzas. All Organic, All
            Delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry, we're out of pizza!</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = openHour <= hour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Open openHour={openHour} closeHour={closeHour} />
      ) : (
        <Closed openHour={openHour} />
      )}
    </footer>
  );
}

function Open({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn"> Order Online</button>
    </div>
  );
}

function Closed(props) {
  return <p>We're closed. We open at {props.openHour}:00.</p>;
}

// Render the application.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Pizza Data
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

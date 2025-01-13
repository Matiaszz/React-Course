
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

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
        soldOut: true,
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
]



function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}


function Header() {

    return (
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>

    )
}

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const pizzasArrayLength = pizzas.length
    return (



        <main className='menu'>
            <h2>Our Menu</h2>
            {pizzasArrayLength > 0 ? (
                <ul className='pizzas'>
                    {pizzas.map((pizzaObje) => <Pizza obj={pizzaObje}></Pizza>)}
                </ul>
            ) : (
                <div>We're working on our menu. Please come back later.</div>
            )
            }




        </main>
    )
}


function Pizza(props) {
    const pizzaState = props.obj.soldOut ? 'pizza sold-out' : 'pizza';

    return (
        <div className={pizzaState}>
            <img src={props.obj.photoName} alt={props.obj.name} />
            <div>
                <h3>{props.obj.name}</h3>
                <p>{props.obj.ingredients}</p>
                <span>${props.obj.price}</span>
            </div>
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour < closeHour;

    return (
        <footer className='footer'>
            {isOpen ? <Order openHour={openHour} closeHour={closeHour} /> : (
                <div>We're happy to assist you between {openHour}:00 and {closeHour}:00</div>
            )
            }
        </footer >
    )
}

function Order({ openHour, closeHour }) {
    return (
        <div className='order'>
            <p>We're open from {openHour}:00 to {closeHour}:00. Come visit Us or order online.</p>
            <button className='btn'>Order</button>
        </div>
    )

}

// react v18

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>

);


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];


export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList items={initialItems} />
      <Stats />
    </div>
  )
}

function Logo() { return <h1> 🌴 Far Away 💼</h1> }
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need to your trip?</h3>
    </div>
  )
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item, index) =>
          <Item key={index} item={item} />
        )}
      </ul>
    </div>

  )
}
function Item({ item }) {
  return (
    <li className="item">
      <span className={item.packed ? 'packed' : ''} >{item.quantity} {item.description}</span>
      <button>❌</button>
    </li>
  )
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list and you packed X (X%)</em>
    </footer>
  )
}

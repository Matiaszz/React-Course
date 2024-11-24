import { useState, useEffect } from "react";
export default function App() {
  // useState = get a value
  // setJoke = setter of joke
  // joke = value

  const [joke, setJoke] = useState("");
  const [counter, setCounter] = useState(0);

  async function get_joke() {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    const data = await res.json();
    setJoke(data.setup);
    setCounter((c) => c + 1);
  }
  useEffect(function () {
    get_joke();
  }, []);
  return (
    <div>
      <h1>{joke}</h1>
      <button onClick={get_joke}>Advice</button>
      <Message counter={counter} />
    </div>
  );
}

// The react functions are captalized for conventional
function Message(props) {
  return (
    <p>
      You have read <strong>{props.counter}</strong> pieces of joke
    </p>
  );
}

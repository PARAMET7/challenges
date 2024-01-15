import "./styles.css";






function Greeting(prop) {
  const {name} = prop;
  return <h2>hello, {name}!</h2>;
}

export default function App() {
  return <Greeting name="Eshed" />;
}

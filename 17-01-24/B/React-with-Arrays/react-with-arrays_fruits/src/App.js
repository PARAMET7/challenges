import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍊 Orange",
      color: "Orange",
    },
    {
      id: 3,
      name: "🍍 pineappel",
      color: "yellow",
    },
    {
      id: 4,
      name: "🍒 cherry",
      color: "red",
    },
    {
      id: 5,
      name: "🥝 kivi",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {/* <Card name="🍌 banana" /> */}
      {fruits.map((e) => (
        <Card color={e.color} key={e.id} name={e.name} />
      ))}
    </div>
  );
}

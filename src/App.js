import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./Data";
function App() {
  const card = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards-holder">{card}</div>
    </div>
  );
}

export default App;

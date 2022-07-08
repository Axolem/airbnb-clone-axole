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
        img={item.img}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
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

import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./Data"
function App() {
  const card = data.map(function(item) { 
    return(
      <Card
          img={item.img}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          country={item.location}
          title={item.title}
          price={item.price}
        />
    )})
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards-holder">
        {
        
        card
        /* <Card
          img="./photo1.png"
          rating={5.0}
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
        <Card
          img=""
          rating={30}
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
        <Card
          img=""
          rating={5.0}
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        /> */}
      </div>
    </div>
  );
}

export default App;

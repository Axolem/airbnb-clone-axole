import heroImg from "./assets/Group 77.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <img className="hero-image" src={heroImg} alt="Hero" />
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-description">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};
export default Hero;

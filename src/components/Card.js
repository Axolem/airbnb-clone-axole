import cardImg from "./assets/photo1.png" ;

const Card = () => {
  return (
    <div className="card">
      <img className="card-img" src={cardImg} />
      <div className="card-content">
        <p>
          <span class="star material-symbols-rounded">star</span>
          <span className="rating">5.0</span>
          <span className="grey-text">(6) •</span>
          <span className="grey-text">USA</span>
        </p>
        <p className="card-description">Life lessons with Katie Zaferes</p>
        <p className="card-price"><span className="bold-text">From $136</span> / person</p>
      </div>
    </div>
  );
};
export default Card;

const Card = (props) => {
  let badgeText
  if (props.openSports === 0) {
    badgeText = "Sold Out";
  } else if (props.country === "Online") {
    badgeText = "Online";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="card-img" src={props.img} />
      <div className="card-content">
        <p>
          <span class="star material-symbols-rounded">star</span>
          <span className="rating">{props.rating}</span>
          <span className="grey-text"> ({props.reviewCount}) •</span>
          <span className="grey-text">{props.country}</span>
        </p>
        <p className="card-description">{props.title}</p>
        <p className="card-price">
          <span className="bold-text">From ${props.price}</span> person
        </p>
      </div>
    </div>
  );
};
export default Card;

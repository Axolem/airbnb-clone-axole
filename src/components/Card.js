const Card = (props) => {
  let badgeText
  if (props.item.openSports === 0) {
    badgeText = "Sold Out";
  } else if (props.item.location === "Online") {
    badgeText = "Online";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="card-img" src={props.item.img} />
      <div className="card-content">
        <p>
          <span class="star material-symbols-rounded">star</span>
          <span className="rating">{props.item.stats.rating}</span>
          <span className="grey-text"> ({props.item.stats.reviewCount}) •</span>
          <span className="grey-text">{props.item.location}</span>
        </p>
        <p className="card-description">{props.item.title}</p>
        <p className="card-price">
          <span className="bold-text">From ${props.item.price}</span> person
        </p>
      </div>
    </div>
  );
};
export default Card;

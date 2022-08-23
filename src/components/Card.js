const Card = (props) => {
  let card = props.data;
  if (card[card.length - 1] === "1") {
    card = card.substring(0, card.length - 1);
  }

  return (
    <div className="card">
      <img src={`card-images/${card}.jpg`} alt={card} />
    </div>
  );
};

export default Card;

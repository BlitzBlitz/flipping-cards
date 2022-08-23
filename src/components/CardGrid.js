import { useEffect, useState } from "react";

const CardGrid = () => {
  const [newGame, setNewGame] = useState(false);
  const [cards, setCards] = useState([
    "cat",
    "duck",
    "fox",
    "kangaroo",
    "koyota",
    "leon",
    "ox",
    "polecat",
    "tiger",
    "zebra",
  ]);

  useEffect(() => {
    setCards(shuffle(cards));
    if (newGame) {
      setNewGame(false);
    }
  }, [newGame]);

  const shuffle = (cards) => {
    return cards.sort((a, b) => 0.5 - Math.random());
  };
  return (
    <div className="cardGrid">
      <button onClick={(e) => setNewGame(true)}>New Game</button>
      {cards.map((card) => {
        return <h1 key={card}>{card}</h1>;
      })}
    </div>
  );
};

export default CardGrid;

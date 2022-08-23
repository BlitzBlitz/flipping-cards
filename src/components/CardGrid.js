import { useEffect, useState } from "react";
import Card from "./Card";

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
    "tiger",
    "zebra",
    "cat1",
    "duck1",
    "fox1",
    "kangaroo1",
    "koyota1",
    "leon1",
    "ox1",
    "tiger1",
    "zebra1",
  ]);

  useEffect(() => {
    setCards(shuffle(cards));
    if (newGame) {
      setNewGame(false);
    }
  }, [newGame, cards]);

  const shuffle = (cards) => {
    return cards.sort((a, b) => 0.5 - Math.random());
  };
  return (
    <div className="cardContainer">
      <button onClick={(e) => setNewGame(true)}>New Game</button>
      <div className="cardGrid">
        {cards.map((card) => {
          return <Card key={card} data={card} />;
        })}
      </div>
    </div>
  );
};

export default CardGrid;

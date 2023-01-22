//this component allows you to select the card deck to be used
import React, { useState } from "react";
import "../../styles/CardDeckSelector.css";

const CardDeckSelector = ({ onCardDeckSelected }) => {
	const [cardDeck, setCardDeck] = useState(null);

	const handleClick = (deck) => {
		setCardDeck(deck);
		onCardDeckSelected(deck);
	};

	return (
		<div className="CardDeckSelector">
			<button key="deck1" onClick={() => handleClick("mazo_1")}>
				<img
					className="CardDeckSelector-icon"
					src="./img/mazo_1.png"
					alt="maso 1"
				/>
			</button>
			<button key="deck2" onClick={() => handleClick("mazo_2")}>
				<img
					className="CardDeckSelector-icon"
					src="./img/mazo_2.png"
					alt="maso 2"
				/>
			</button>
			<button key="deck3" onClick={() => handleClick("mazo_3")}>
				<img
					className="CardDeckSelector-icon"
					src="./img/mazo_3.png"
					alt="maso 3"
				/>
			</button>
			<button key="deck4" onClick={() => handleClick("mazo_4")}>
				<img
					className="CardDeckSelector-icon"
					src="./img/mazo_4.png"
					alt="maso 4"
				/>
			</button>
			<button key="deck5" onClick={() => handleClick("mazo_5")}>
				<img
					className="CardDeckSelector-icon"
					src="./img/mazo_5.png"
					alt="maso 5"
				/>
			</button>
		</div>
	);
};

export default CardDeckSelector;

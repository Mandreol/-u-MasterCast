import React, { useState } from "react";
import CardDeckSelector from "./menu_components/CardDeckSelector";
import DealTypeSelector from "./menu_components/DealTypeSelector";
import DealModeSelector from "./menu_components/DealModeSelector";
import Deal from "./menu_components/Deal";
import "../styles/MenuSlider.css";

const MenuSlider = () => {
	const [selectedDeck, setSelectedDeck] = useState(null);

	const handleCardDeckSelected = (deck) => {
		setSelectedDeck(deck);
	};
	console.log(selectedDeck);
	return (
		<div className="MenuSlider">
			<div className="MenuSlider-container">
				<CardDeckSelector onCardDeckSelected={handleCardDeckSelected} />
				<DealTypeSelector />
				<DealModeSelector />
				<Deal />
			</div>
		</div>
	);
};

export default MenuSlider;

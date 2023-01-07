import React from "react";
import CardDeckSelector from "./menu_components/CardDeckSelector";
import DealTypeSelector from "./menu_components/DealTypeSelector";
import DealModeSelector from "./menu_components/DealModeSelector";
import Deal from "./menu_components/Deal";

const MenuSlider = () => {
	return (
		<div>
			<CardDeckSelector />
			<DealTypeSelector />
			<DealModeSelector />
			<Deal />
		</div>
	);
};

export default MenuSlider;

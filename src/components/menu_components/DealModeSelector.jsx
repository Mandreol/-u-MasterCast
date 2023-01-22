//this component allows you to choose between a customDeal or presetDeal
import React from "react";
import "../../styles/DealModeSelector.css";

const DealModeSelector = () => {
	return (
		<div className="DealModeSelector-container">
			<img
				className="DealModeSelector-img"
				src="../../img/personalizar.png"
				alt=""
			/>
			<img
				className="DealModeSelector-img"
				src="../../img/preseteadas.png"
				alt=""
			/>
		</div>
	);
};

export default DealModeSelector;

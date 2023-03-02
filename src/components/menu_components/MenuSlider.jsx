import CardDeckSelector from "./CardDeckSelector";
import DealTypeSelector from "./DealTypeSelector";
import DealModeSelector from "./DealModeSelector";
import Deal from "./Deal";
import "../../styles/MenuSlider.css";
import { useSelector } from "react-redux";

const MenuSlider = () => {
	const position = useSelector((state) => state.sliderPosition);
	return (
		<div className="MenuSlider">
			<div className="MenuSlider-container" style={{ marginLeft: position }}>
				<CardDeckSelector />
				<DealTypeSelector />
				<DealModeSelector />
				<Deal />
			</div>
		</div>
	);
};

export default MenuSlider;

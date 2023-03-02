import "../../styles/DealTypeSelector.css";
import { setPosition } from "../../store/slice/sliderPosition.slice";
import { useDispatch } from "react-redux";

const DealTypeSelector = () => {
	const dispatch = useDispatch();
	const handleClickExplore = (position) => {
		dispatch(setPosition(position));
	};
	const handleClickCustom = (position) => {
		dispatch(setPosition(position));
	};

	return (
		<div className="DealTypeSelector-container">
			<button key="explore" onClick={() => handleClickExplore("-300%")}>
				<img
					className="DealTypeSelector-img"
					src="../../img/explorar.png"
					alt="explore"
				/>
			</button>
			<button key="custom" onClick={() => handleClickCustom("-200%")}>
				<img
					className="DealTypeSelector-img"
					src="../../img/tirada.png"
					alt="custom"
				/>
			</button>
		</div>
	);
};

export default DealTypeSelector;

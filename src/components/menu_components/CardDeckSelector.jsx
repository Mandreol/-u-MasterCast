import "../../styles/CardDeckSelector.css";
import { useDispatch } from "react-redux";
import { setValue } from "../../store/slice/CardDeck.slice";
import { setPosition } from "../../store/slice/sliderPosition.slice";
const CardDeckSelector = () => {
	const dispatch = useDispatch();

	const handleClick = (deck) => {
		dispatch(setValue(deck));
		dispatch(setPosition("-100%"));
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

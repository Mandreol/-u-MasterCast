import "../styles/Title.css";
import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const Title = () => {
	const element = useRef(null);
	const typed = useRef(null);
	useEffect(() => {
		const options = {
			strings: ["Elige el maso", "de cartas con el que quieras trabajar:"],
			typeSpeed: 50,
			showCursor: true,
			cursorChar: "|",
			autoInsertCss: true,
		};
		typed.current = new Typed(element.current, options);
		typed.current.start();
		return () => {
			typed.current.destroy();
		};
	}, []);

	return (
		<span className="element" ref={element}>
			Texto inicial
		</span>
	);
};

export default Title;

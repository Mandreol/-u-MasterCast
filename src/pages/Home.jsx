import React from "react";
import Logo from "../components/Logo";
import ParticlesBackground from "../components/ParticlesBackground";
import Title from "../components/Title";
import "../styles/home.css";
import TextGuide from "../components/TextGuide";
import MenuSlider from "../components/menu_components/MenuSlider";

const Home = () => {
	return (
		<div className="container">
			<Logo />
			<Title />
			<TextGuide />
			<ParticlesBackground />
			<MenuSlider />
		</div>
	);
};

export default Home;

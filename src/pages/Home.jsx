import React from "react";
import CardDeckSelector from "../components/menu_components/CardDeckSelector";
import Logo from "../components/Logo";
import ParticlesBackground from "../components/ParticlesBackground";
import Title from "../components/Title";
import "../styles/home.css";
import TextGuide from "../components/TextGuide";

const Home = () => {
	return (
		<div className="container">
			<Logo />
			<Title />
			<TextGuide />
			<ParticlesBackground />
			<CardDeckSelector />
		</div>
	);
};

export default Home;

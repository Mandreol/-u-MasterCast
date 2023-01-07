import React from "react";
import CardDeckSelector from "../components/CardDeckSelector";
import Logo from "../components/Logo";
import ParticlesBackground from "../components/ParticlesBackground";
import Title from "../components/Title";
import "../styles/home.css";

const Home = () => {
	return (
		<div className="container">
			<Logo />
			<Title />
			<ParticlesBackground />
			<CardDeckSelector />
		</div>
	);
};

export default Home;

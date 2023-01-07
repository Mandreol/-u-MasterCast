import { HashRouter, Routes, Route } from "react-router-dom";
import Board from "./pages/Board";
import Home from "./pages/Home";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Board" element={<Board />} />
			</Routes>
		</HashRouter>
	);
}

export default App;

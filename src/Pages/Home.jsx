import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "/src/Components/Menu.jsx";
import Inicio from "/src/Pages/Inicio.jsx";

function Home() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		// Verificar si el usuario está autenticado al cargar la página
		const loggedIn = localStorage.getItem("isLoggedIn");
		if (loggedIn === "true") {
			setIsLoggedIn(true);
		}
	}, []);
	

	return (
		<>
			{isLoggedIn ? (
				<>
					<Menu setIsLoggedIn={setIsLoggedIn} />
					<br />

					<div>
						<Outlet />
					</div>
				</>
			) : (
				<Inicio setIsLoggedIn={setIsLoggedIn} />
			)}
		</>
	);
}

export default Home;

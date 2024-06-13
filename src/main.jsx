import React from "react";
import ReactDOM from "react-dom/client";
// PAGINAS DE LA APLICACION
import ErrorPage from "./Pages/error-page";
import Home from "./Pages/Home";
import LandPage from "./Pages/LandPage";
import Comunidad from "./Pages/Comunidad";
import Posts from "./Pages/Posts";
import Clases from "./Components/Clases";
import Weapons from "./Components/Weapons";
import Maps from "./Components/Maps";
import PostForm from "./Components/PostForm";
import PostComment from "./Components/PostComment";
// ESTILOS
import "./index.css";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Componentes

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <LandPage />,
				children: [
					
					{
						path: "/clases/",
						element: (
							<div>
								<Clases />
							</div>
						),
					},
					{
						path: "/maps/",
						element: (
							<div>
								<Maps />
							</div>
						),
					},
					{
						path: "/weapons/",
						element: (
							<div>
								<Weapons />
							</div>
						),
					},
				]
			},
			{
				path: "/comunidad",
				element: <Comunidad />,
				children: [
					{
						path: "/comunidad/",
						element: (
							<div>
								<Posts />
							</div>
						),
					},
					{
						path: "/comunidad/new",
						element: (
							<div>
								<PostForm />
							</div>
						),
					},{
						path: "/comunidad/:postId",
						element: (
							<div>
								<PostComment />
							</div>
						),
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

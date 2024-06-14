// Importa los nuevos módulos necesarios
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBIcon,
} from "mdb-react-ui-kit";
import {
	CircularProgress,
	Button,
	ButtonGroup,
	Container,
	Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Likes from "../Components/Likes";
import PostDelete from "../Components/PostDelete";
import "../index.css";

function Posts() {
	const [isError, setIsError] = useState(null);
	const [tablas, setTablas] = useState(null);
	const [filtterCategory, setFiltterCategoryy] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const usergmail = localStorage.getItem("gmail");

	const handleDelete = () => {
		setIsLoading(true);
		// Redirigir a una URL específica después de la eliminación
		window.location.reload();
	};


	useEffect(() => {
		async function fetchData(category) {
			setIsLoading(true);

			try {
				const responsePost = await fetch(
					`http://3.209.155.46:3000/api/posts${
						category ? `?category=${category}` : ""
					}`
				);

				if (responsePost.ok) {
					const datos = await responsePost.json();
					setTablas(datos.datos);
					setIsError(null); // Limpiar error
				} else {
					setIsError("Error en la petición de posts");
				}
			} catch (error) {
				setIsError("Lo sentimos, hubo un problema con el servidor de datos");
			} finally {
				setIsLoading(false);
			}
		}

		fetchData(filtterCategory);
	}, [usergmail, filtterCategory]);

	if (isError != null) {
		return <h3>{isError}</h3>;
	}

	let listaTablas = [];

	if (tablas != null) {
		listaTablas = tablas.map((tabla) => {
			tabla.post_id = tabla.post_id.toString().padStart(6, "0");

			return (
				<MDBCard className="mb-4" key={tabla.post_id}>
					<MDBCardBody className="block-style">
						<MDBRow>
							<MDBCol md="8">
								<MDBCardTitle>{tabla.post_category}</MDBCardTitle>
								<MDBCardText>{tabla.post_text}</MDBCardText>
							</MDBCol>
							
							{tabla.user_gmail === usergmail ? 
							<MDBCol md="4" className="text-right">
								<PostDelete post_id={tabla.post_id} onDelete={handleDelete} />
							</MDBCol>
							:
							""
								}
								
						</MDBRow>
						<MDBRow>
							<MDBCol md="8">
								<p>
									<strong>User:</strong> {tabla.user_gmail}
								</p>
							</MDBCol>

							<MDBCol md="4" className="text-right" >
								<Likes post_id={tabla.post_id} setIsError={setIsError} />
							</MDBCol>
						</MDBRow>
						<MDBRow>
							<MDBCol className="text-right">
								<Link to={`/comunidad/${tabla.post_id}`}>
									<MDBBtn style={{backgroundColor:"#5885a2"}} floating rounded >
										<MDBIcon far icon="comment-dots" size="2x" />
									</MDBBtn>
								</Link>
							</MDBCol>
						</MDBRow>
					</MDBCardBody>
				</MDBCard>
			);
		});
	}

	return (
		<div>
			{isLoading ? (
				<CircularProgress color="error" />
			) : (
				<Container>
					<Box my={4}>
						<ButtonGroup variant="contained">
							<Button
								style={filtterCategory === "" ? {backgroundColor: "#5885a2", color: "#e7ddc7" } : {backgroundColor: "#776a5d", color: "#ead6af"}}
								onClick={() => setFiltterCategoryy("")}
							>
								All
							</Button>
							<Button
							style={filtterCategory === "Conversacion" ? {backgroundColor: "#5885a2", color: "#e7ddc7" } : {backgroundColor: "#776a5d", color: "#ead6af"}}
								
								onClick={() => setFiltterCategoryy("Conversacion")}
							>
								Conversacion
							</Button>
							<Button
							style={filtterCategory === "Duda" ? {backgroundColor: "#5885a2", color: "#e7ddc7" } : {backgroundColor: "#776a5d", color: "#ead6af"}}
								onClick={() => setFiltterCategoryy("Duda")}
							>
								Duda
							</Button>
							<Button
							style={filtterCategory === "Info" ? {backgroundColor: "#5885a2", color: "#e7ddc7" } : {backgroundColor: "#776a5d", color: "#ead6af"}}
								onClick={() => setFiltterCategoryy("Info")}
							>
								Info
							</Button>
							<Button
							style={filtterCategory === "Prueba" ? {backgroundColor: "#5885a2", color: "#e7ddc7" } : {backgroundColor: "#776a5d", color: "#ead6af"}}
								onClick={() => setFiltterCategoryy("Prueba")}
							>
								Prueba
							</Button>
						</ButtonGroup>
					</Box>

					{listaTablas}
					<Link to="/comunidad/new">
						<div
							style={{
								position: "fixed",
								bottom: "20px",
								right: "20px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<MDBBtn floating tag="a">
								<MDBIcon fas icon="plus" size="2x" />
							</MDBBtn>
						</div>
					</Link>
				</Container>
			)}
		</div>
	);
}

export default Posts;

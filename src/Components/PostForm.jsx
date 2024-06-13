import { useState, useEffect } from "react";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { Select, MenuItem, InputLabel, FormControl, Container} from "@mui/material";

function PostForm() {
	const [categories, setCategories] = useState([]);
	const randomNumber = Math.floor(Math.random() * 1000000);
	const paddedNumber = randomNumber.toString().padStart(6, "0");
	const [formData, setFormData] = useState({
		post_id: paddedNumber,
		user_gmail: localStorage.getItem("gmail"),
		post_text: "",
		post_category: "",
	});
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(`http://localhost:3000/api/categories`);

				if (response.ok) {
					const datos = await response.json();
					setCategories(datos.datos);
				}
			} catch (error) {
				return "Error en la petición a la base de datos";
			}
		}

		fetchData();
	}, []);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		formData.post_id = formData.post_id.toString().padStart(6, "0");
		
		try {
			const response = await fetch("http://localhost:3000/api/posts", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log("Publicación creada con éxito");
				window.location.href = "/comunidad";
			} else {
				console.error("Error al crear la publicación");
			}
		} catch (error) {
			console.error("Error de red:", error);
		}
	};

	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<MDBInput
					label="Contenido del post"
					type="textarea"
					name="post_text"
					value={formData.post_text}
					onChange={handleChange}
					required
				/>
				
				<FormControl fullWidth variant="outlined" margin="normal">
					<InputLabel id="category-label">Categoría del post</InputLabel>
					<Select
						labelId="category-label"
						name="post_category"
						value={formData.post_category}
						onChange={handleChange}
						label="Categoría del post"
						required
					>
						<MenuItem value="" disabled>
							Selecciona una categoría
						</MenuItem>
						{categories.map((category) => (
							<MenuItem key={category.Type} value={category.Type}>
								{category.Type}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<MDBBtn type="submit">Enviar</MDBBtn>
			</form>
			{/* <p>{localStorage.getItem("gmail")} gmail</p> */}
		</Container>
	);
}

export default PostForm;

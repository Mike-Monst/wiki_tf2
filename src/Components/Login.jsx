/* eslint-disable react/prop-types */
import { useState } from "react";
import { Container, Grid } from "@mui/material";
import { MDBBtn, MDBIcon, MDBInput } from "mdb-react-ui-kit";

function Login({ setIsLoggedIn, handleForm }) {
	const [error, setError] = useState(null);
	const [formData, setFormData] = useState({
		gmail: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const gmail = formData.gmail;
			const response = await fetch(`http://3.209.155.46:3000/api/users/${gmail}`);
			if (!response.ok) {
				setError("Usuario no encontrado.", response.mensaje);
			}
			const data = await response.json();
			if (data.datos.password !== formData.password) {
				console.log(data.password);
				console.log(formData.password);
				setError("Contraseña incorrecta.");
			} else {
				localStorage.setItem("isLoggedIn", true);
				localStorage.setItem("username", data.datos.nickname);
				localStorage.setItem("gmail", data.datos.gmail);
				console.log("Sesion iniciada correctamente.");
				setIsLoggedIn(true);
			}
		} catch (e) {
			setError("Usuario o contraseña incorrectos.");
		}
	};

	return (
		<>
			<Container maxWidth="sm" style={{ marginTop: "40pt" }}>
				<h2>Login</h2>
				{error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}
				<form onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<MDBInput
								className={error ? "is-invalid" : ""}
								type="email"
								fullWidth
								name="gmail"
								label="Gmail"
								value={formData.gmail}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<MDBInput
								className={error ? "is-invalid" : ""}
								type="password"
								fullWidth
								name="password"
								label="Password"
								value={formData.password}
								onChange={handleChange}
							/>
						</Grid>

						<Grid item xs={12}>
							<MDBBtn type="submit" className="mt-3">
								<MDBIcon fas icon="sign-in-alt" className="me-2" />
								Login
							</MDBBtn>
						</Grid>
						<Grid item xs={12}>
							<a style={{ textAlign: "center" }} href="#" onClick={handleForm}>
								¿No tienes cuenta?. Create una aquí.
							</a>
						</Grid>
					</Grid>
				</form>
			</Container>
		</>
	);
}

export default Login;

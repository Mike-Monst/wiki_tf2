/* eslint-disable react/prop-types */
import { useState } from "react";
import { Container, Grid } from "@mui/material";
import { MDBBtn, MDBIcon, MDBInput } from "mdb-react-ui-kit";

function SignUp({ setIsLoggedIn, handleForm }) {
	const [error, setError] = useState(null);

	const [formData, setFormData] = useState({
		gmail: "",
		nickname: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {

		if (formData.password !== formData.confirmPassword){
			setError("Las contraseñas no coinciden");
		} else if(formData.password.trim() === "" && formData.confirmPassword.trim() === ""){
			setError("La contraseña no puede estar vacia.");
		}else if(formData.nickname.trim() === ""){
			setError("El apodo no puede estar vacio.");
		}else {
			

			e.preventDefault();
			const UserData = {
				gmail: formData.gmail.trim(),
				password: formData.password,
				nickname: formData.nickname,
			};
			try {
				const response = await fetch("http://localhost:3000/api/users", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(UserData),
				});
				if (!response.ok) {
					setError("El usuario ya existe.");
					return;
				}
				localStorage.setItem("isLoggedIn", true);
				localStorage.setItem("username", UserData.nickname);
				localStorage.setItem("gmail", UserData.gmail);
				console.log("Sesion iniciada correctamente.");
				setIsLoggedIn(true);
			} catch (e) {
				console.log("userdata", UserData);
				setError(e);
			}
		} 
	}

	return (
		<Container maxWidth="sm" style={{ marginTop: "40pt" }}>
			<h2>Sign Up</h2>
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
							type="text"
							fullWidth
							name="nickname"
							label="Apodo"
							value={formData.nickname}
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
						<MDBInput
							className={error ? "is-invalid" : ""}
							type="password"
							fullWidth
							name="confirmPassword"
							label="Confirm Password"
							value={formData.confirmPassword}
							onChange={handleChange}
						/>
					</Grid>

					<Grid item xs={12}>
						<MDBBtn type="submit" className="mt-3">
							<MDBIcon fas icon="user-plus" className="me-2" />
							Sign Up
						</MDBBtn>
					</Grid>
					<Grid item xs={12}>
						<a style={{ textAlign: "center" }} href="#" onClick={handleForm}>
							¿Ya tienes una sesion?, iniciala desde aquí.
						</a>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
}

export default SignUp;

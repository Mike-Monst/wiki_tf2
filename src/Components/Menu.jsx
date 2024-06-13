/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
	MDBNavbarLink,
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBIcon,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBDropdown,
	MDBDropdownToggle,
	MDBDropdownMenu,
	MDBDropdownItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Menu({ setIsLoggedIn }) {
	const [username, setUsername] = useState("");

	useEffect(() => {
		const username = localStorage.getItem("username");
		setUsername(username);
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("isLoggedIn");
		localStorage.removeItem("username");
		setIsLoggedIn(false);
	};

	return (
		<MDBNavbar expand="sm" light style={{ borderBottom: "4px solid #74675f", backgroundColor: "#2c2626" }} className="navbar">
			<MDBContainer fluid>
				<Link to="/">
					<MDBNavbarBrand href="#" style={{ backgroundColor: "#776b5f", color: "#ECE1CD" }} className="px-2" >Wiki TF2</MDBNavbarBrand>
				</Link>
				
					<MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
						<MDBNavbarItem style={{ backgroundColor: "#776b5f" }} className="px-auto">
							<Link to="/comunidad">
								<MDBNavbarLink active aria-current="page" href="#" style={{  color: "#ECE1CD" }}>
									Forum
								</MDBNavbarLink>
							</Link>
						</MDBNavbarItem>
						<div
							style={{ backgroundColor: "#4a6b1c", color: "#f3ddcb", position: "absolute", top: 0, right: 0, bottom: 0}}
						>
							<MDBNavbarItem>
								<MDBDropdown>
									<MDBDropdownToggle tag="a" className="nav-link" role="button" style={{ color: "#f3ddcb", marginTop: "10px", marginRight: "10px"}}>
										<MDBIcon fas className="m-1" icon="user-circle" />
										{username}
									</MDBDropdownToggle>
									<MDBDropdownMenu>
										<MDBDropdownItem link onClick={handleLogout}>
											Cerrar Sesion
										</MDBDropdownItem>
									</MDBDropdownMenu>
								</MDBDropdown>
							</MDBNavbarItem>
						</div>
					</MDBNavbarNav>
			</MDBContainer>
		</MDBNavbar>
	);
}

export default Menu;

/* eslint-disable no-unused-vars */
// src/components/Weapons.js
import { React, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
} from "mdb-react-ui-kit";
import ImageGrid from "./ImageGrid"; // Asegúrate de que la ruta sea correcta
import "../index.css";

function Weapons() {
	const weapons = [
		// Scout
		{
			name: "Scattergun",
			description: "Primary weapon for the Scout.",
			class: "1",
			type: "primary",
			url: "http://example.com/weapons/scattergun",
		},
		{
			name: "Pistol",
			description: "Secondary weapon for the Scout.",
			class: "1",
			type: "secondary",
			url: "http://example.com/weapons/pistol",
		},
		{
			name: "Bat",
			description: "Melee weapon for the Scout.",
			class: "1",
			type: "melee",
			url: "http://example.com/weapons/bat",
		},
		// Soldier
		{
			name: "Rocket Launcher",
			description: "Primary weapon for the Soldier.",
			class: "2",
			type: "primary",
			url: "http://example.com/weapons/rocket-launcher",
		},
		{
			name: "Shotgun",
			description: "Secondary weapon for the Soldier.",
			class: "2",
			type: "secondary",
			url: "http://example.com/weapons/shotgun",
		},
		{
			name: "Shovel",
			description: "Melee weapon for the Soldier.",
			class: "2",
			type: "melee",
			url: "http://example.com/weapons/shovel",
		},
		// Pyro
		{
			name: "Flame Thrower",
			description: "Primary weapon for the Pyro.",
			class: "3",
			type: "primary",
			url: "http://example.com/weapons/flame-thrower",
		},
		{
			name: "Shotgun",
			description: "Secondary weapon for the Pyro.",
			class: "3",
			type: "secondary",
			url: "http://example.com/weapons/shotgun",
		},
		{
			name: "Fire Axe",
			description: "Melee weapon for the Pyro.",
			class: "3",
			type: "melee",
			url: "http://example.com/weapons/fire-axe",
		},
		// Demoman
		{
			name: "Grenade Launcher",
			description: "Primary weapon for the Demoman.",
			class: "4",
			type: "primary",
			url: "http://example.com/weapons/grenade-launcher",
		},
		{
			name: "Stickybomb Launcher",
			description: "Secondary weapon for the Demoman.",
			class: "4",
			type: "secondary",
			url: "http://example.com/weapons/stickybomb-launcher",
		},
		{
			name: "Bottle",
			description: "Melee weapon for the Demoman.",
			class: "4",
			type: "melee",
			url: "http://example.com/weapons/bottle",
		},
		// Heavy
		{
			name: "Minigun",
			description: "Primary weapon for the Heavy.",
			class: "5",
			type: "primary",
			url: "http://example.com/weapons/minigun",
		},
		{
			name: "Shotgun",
			description: "Secondary weapon for the Heavy.",
			class: "5",
			type: "secondary",
			url: "http://example.com/weapons/shotgun",
		},
		{
			name: "Fists",
			description: "Melee weapon for the Heavy.",
			class: "5",
			type: "melee",
			url: "http://example.com/weapons/fists",
		},
		// Engineer
		{
			name: "Shotgun",
			description: "Primary weapon for the Engineer.",
			class: "6",
			type: "primary",
			url: "http://example.com/weapons/shotgun",
		},
		{
			name: "Pistol",
			description: "Secondary weapon for the Engineer.",
			class: "6",
			type: "secondary",
			url: "http://example.com/weapons/pistol",
		},
		{
			name: "Wrench",
			description: "Melee weapon for the Engineer.",
			class: "6",
			type: "melee",
			url: "http://example.com/weapons/wrench",
		},
		{
			name: "PDAs",
			description: "Son unos aparatos que le permiten al Engineer construir y destruir sus construcciones. Con el PDA puede construir una Dispensadora, un Centinela y un Teleportador.",
			class: "6",
			type: "melee",
			url: "http://example.com/weapons/wrench",
		},
		// Medic
		{
			name: "Syringe Gun",
			description: "Primary weapon for the Medic.",
			class: "7",
			type: "primary",
			url: "http://example.com/weapons/syringe-gun",
		},
		{
			name: "Medi Gun",
			description: "Secondary weapon for the Medic.",
			class: "7",
			type: "secondary",
			url: "http://example.com/weapons/medi-gun",
		},
		{
			name: "Bonesaw",
			description: "Melee weapon for the Medic.",
			class: "7",
			type: "melee",
			url: "http://example.com/weapons/bonesaw",
		},
		// Sniper
		{
			name: "Sniper Rifle",
			description: "Primary weapon for the Sniper.",
			class: "8",
			type: "primary",
			url: "http://example.com/weapons/sniper-rifle",
		},
		{
			name: "SMG",
			description: "Secondary weapon for the Sniper.",
			class: "8",
			type: "secondary",
			url: "http://example.com/weapons/smg",
		},
		{
			name: "Kukri",
			description: "Melee weapon for the Sniper.",
			class: "8",
			type: "melee",
			url: "http://example.com/weapons/kukri",
		},
		// Spy
		{
			name: "Revolver",
			description: "Primary weapon for the Spy.",
			class: "9",
			type: "primary",
			url: "http://example.com/weapons/revolver",
		},
		{
			name: "Invisi Watch",
			description: "Habilidad especial para el Spy que le permite ser invisible por un periodo de tiempo.",
			class: "9",
			type: "primary",
			url: "http://example.com/weapons/revolver",
		},
		{
			name: "Sapper",
			description: "Secondary weapon for the Spy.",
			class: "9",
			type: "secondary",
			url: "http://example.com/weapons/sapper",
		},
		{
			name: "Knife",
			description: "Melee weapon for the Spy.",
			class: "9",
			type: "melee",
			url: "http://example.com/weapons/knife",
		},
	];

	const classes = [
		{
			name: "1",
			image: "/scout-icon.png",
		},
		{
			name: "2",
			image: "/soldier-icon.png",
		},
		{
			name: "3",
			image: "/pyro-icon.png",
		},
		{
			name: "4",
			image: "/demoman-icon.png",
		},
		{
			name: "5",
			image: "/heavy-icon.png",
		},
		{
			name: "6",
			image: "/engineer-icon.png",
		},
		{
			name: "7",
			image: "/medic-icon.png",
		},
		{
			name: "8",
			image: "/sniper-icon.png",
		},
		{
			name: "9",
			image: "/spy-icon.png",
		},
	];

	const renderDescription = (description) => {
		return description
			.split("/n")
			.map((text, index) => <p key={index}>{text}</p>);
	};

	const [selectedClass, setSelectedClass] = useState("");

	return (
		<Container>
			<Box my={4}>
				<Typography variant="h4" component="h2" gutterBottom>
					Las clases de Team Fortress 2
				</Typography>

				<ImageGrid classes={classes} setSelectedClass={setSelectedClass} />
				{selectedClass && (
					<>
						{weapons.map((weapon) => {
							if (weapon.class === selectedClass.name) {
								return (
									<MDBCard key={weapon.name} className="mb-4">
										<MDBCardBody>
											<MDBCardTitle>{weapon.name}</MDBCardTitle>
											<MDBCardText>
												{renderDescription(weapon.description)}
											</MDBCardText>
										</MDBCardBody>
									</MDBCard>
								);
							}
						})}
					</>
				)}
			</Box>
		</Container>
	);
}

export default Weapons;

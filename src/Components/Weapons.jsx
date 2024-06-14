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
			url: "/weapons/Scattergun.png",
		},
		{
			name: "Pistol",
			description: "Secondary weapon for the Scout.",
			class: "1",
			type: "secondary",
			url: "/weapons/Pistol.png",
		},
		{
			name: "Bat",
			description: "Melee weapon for the Scout.",
			class: "1",
			type: "melee",
			url: "/weapons/Bat.png",
		},
		// Soldier
		{
			name: "Rocket Launcher",
			description: "Primary weapon for the Soldier.",
			class: "2",
			type: "primary",
			url: "/weapons/Rocket_Launcher.png",
		},
		{
			name: "Shotgun",
			description: "Secondary weapon for the Soldier.",
			class: "2",
			type: "secondary",
			url: "/weapons/Shotgun.png",
		},
		{
			name: "Shovel",
			description: "Melee weapon for the Soldier.",
			class: "2",
			type: "melee",
			url: "/weapons/Shovel.png",
		},
		// Pyro
		{
			name: "Flame Thrower",
			description: "Primary weapon for the Pyro.",
			class: "3",
			type: "primary",
			url: "/weapons/Flame_Thrower.png",
		},
		{
			name: "Shotgun",
			description: "Secondary weapon for the Pyro.",
			class: "3",
			type: "secondary",
			url: "/weapons/Shotgun.png",
		},
		{
			name: "Fire Axe",
			description: "Melee weapon for the Pyro.",
			class: "3",
			type: "melee",
			url: "/weapons/Fire_Axe.png",
		},
		// Demoman
		{
			name: "Grenade Launcher",
			description: "Primary weapon for the Demoman.",
			class: "4",
			type: "primary",
			url: "/weapons/Grenade_Launcher.png",
		},
		{
			name: "Stickybomb Launcher",
			description: "Secondary weapon for the Demoman.",
			class: "4",
			type: "secondary",
			url: "/weapons/Stickybomb_Launcher.png",
		},
		{
			name: "Bottle",
			description: "Melee weapon for the Demoman.",
			class: "4",
			type: "melee",
			url: "/weapons/Bottle.png",
		},
		// Heavy
		{
			name: "Minigun",
			description: "Primary weapon for the Heavy.",
			class: "5",
			type: "primary",
			url: "/weapons/Minigun.png",
		},
		{
			name: "Shotgun",
			description: "Secondary weapon for the Heavy.",
			class: "5",
			type: "secondary",
			url: "/weapons/Shotgun.png",
		},
		{
			name: "Fists",
			description: "Melee weapon for the Heavy.",
			class: "5",
			type: "melee",
			url: "/weapons/Fists.png",
		},
		// Engineer
		{
			name: "Shotgun",
			description: "Primary weapon for the Engineer.",
			class: "6",
			type: "primary",
			url: "/weapons/Shotgun.png",
		},
		{
			name: "Pistol",
			description: "Secondary weapon for the Engineer.",
			class: "6",
			type: "secondary",
			url: "/weapons/Pistol.png",
		},
		{
			name: "Wrench",
			description: "Melee weapon for the Engineer.",
			class: "6",
			type: "melee",
			url: "/weapons/Wrench.png",
		},
		{
			name: "PDA de Construcción",
			description: "Es uno aparato que le permite al Engineer construirsus construcciones. Puede construir una Dispensadora, un Centinela y un Teleportador.",
			class: "6",
			type: "melee",
			url: "/weapons/PDA.png",
		},
		{
			name: "PDA de Detonación",
			description: "Es un aparato que le permite al Engineer destruir sus construcciones.",
			class: "6",
			type: "melee",
			url: "/weapons/Det_PDA.png",
		},
		// Medic
		{
			name: "Syringe Gun",
			description: "Primary weapon for the Medic.",
			class: "7",
			type: "primary",
			url: "/weapons/Syringe_Gun.png",
		},
		{
			name: "Medi Gun",
			description: "Secondary weapon for the Medic.",
			class: "7",
			type: "secondary",
			url: "/weapons/Medi_Gun.png",
		},
		{
			name: "Bonesaw",
			description: "Melee weapon for the Medic.",
			class: "7",
			type: "melee",
			url: "/weapons/Bonesaw.png",
		},
		// Sniper
		{
			name: "Sniper Rifle",
			description: "Primary weapon for the Sniper.",
			class: "8",
			type: "primary",
			url: "/weapons/Sniper_Rifle.png",
		},
		{
			name: "SMG",
			description: "Secondary weapon for the Sniper.",
			class: "8",
			type: "secondary",
			url: "/weapons/Submachine_Gun.png",
		},
		{
			name: "Kukri",
			description: "Melee weapon for the Sniper.",
			class: "8",
			type: "melee",
			url: "/weapons/Kukri.png",
		},
		// Spy
		{
			name: "Revolver",
			description: "Primary weapon for the Spy.",
			class: "9",
			type: "primary",
			url: "/weapons/Revolver.png",
		},
		{
			name: "Invis Watch",
			description: "Habilidad especial para el Spy que le permite ser invisible por un periodo de tiempo.",
			class: "9",
			type: "primary",
			url: "/weapons/Invis_Watch.png",
		},
		{
			name: "Disguise Kit",
			description: "Secondary weapon for the Spy.",
			class: "9",
			type: "secondary",
			url: "/weapons/Disguise_Kit.png",
		},
		{
			name: "Sapper",
			description: "Secondary weapon for the Spy.",
			class: "9",
			type: "secondary",
			url: "/weapons/Sapper.png",
		},
		{
			name: "Knife",
			description: "Melee weapon for the Spy.",
			class: "9",
			type: "melee",
			url: "/weapons/Knife.png",
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

				<ImageGrid classes={classes} setSelectedClass={setSelectedClass} />
				{selectedClass && (
					<>
						{weapons.map((weapon) => {
							if (weapon.class === selectedClass.name) {
								return (
									<MDBCard key={weapon.name} className="mb-4" >
										<MDBCardBody>
										<img
												src={weapon.url}
												alt={weapon.name}
												className="weapon-image"
											/>
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

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
	MDBBtn,
	MDBIcon,
} from "mdb-react-ui-kit";

function DeleteButton({ post_id, onDelete }) {
	const handleDelete = async () => {
		console.log('Borrando el dato con id:', post_id);
		try {
			const response = await fetch(`http://3.209.155.46:3000/api/posts/${post_id}`,
			{
				method: "DELETE",
			}
		);
			if (response.ok) {
			onDelete();// Limpiar error
		}
		} catch (error) {
			console.error('Error al borrar el dato:', error);
			alert('Hubo un error al borrar el dato');
		}
	};

	return (
		<MDBBtn rounded className='mx-2' style={{backgroundColor: '#632321'}} onClick={handleDelete}>
			<MDBIcon fas icon="trash" style={{color: "#e7ddc7"}}/>

		</MDBBtn>
	);
}

export default DeleteButton;

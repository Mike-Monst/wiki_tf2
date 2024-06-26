/* eslint-disable no-unused-vars */
// src/components/Maps.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import '../index.css';

const maps = [
    { name: 'Dustbowl',			type: 'Control Points', 	image: '/maps/Dustbowl_Map.jpg' },
    { name: '2Fort',			type: 'Capture the Flag', 	image: '/maps/2Fort.webp' },
    { name: 'Badwater Basin',	type: 'Payload', 			image: '/maps/Plbadwater.png' },
    { name: 'Granary',			type: 'Control Points', 	image: '/maps/Granary_Map.jpg' },
    { name: 'Gold Rush',	 	type: 'Payload', 			image: '/maps/Goldrush.png' },
    { name: 'Hightower',	 	type: 'Payload Race', 		image: '/maps/Hightower.png' },
    { name: 'Nucleus',		 	type: 'King of the Hill', 	image: '/maps/Arenanucleus.png' },
];

// Función para agrupar los mapas por tipo
const groupMapsByType = (maps) => {
    return maps.reduce((groups, map) => {
        const { type } = map;
        if (!groups[type]) {
            groups[type] = [];
        }
        groups[type].push(map);
        return groups;
    }, {});
};

function Maps() {
    const groupedMaps = groupMapsByType(maps);

    return (
        <Container>
           
            {Object.keys(groupedMaps).map((type) => (
                <div key={type}>
                    <Typography variant="h4" component="h3" className="map-type-heading" gutterBottom>
                        {type}
                    </Typography>
                    <Grid container spacing={3}>
                        {groupedMaps[type].map((map, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <MDBCard className='mb-3'>
                                    <MDBCardImage src={map.image} position='top' alt={`${map.name} image`} />
                                    <MDBCardBody>
                                        <MDBCardTitle>{map.name}</MDBCardTitle>
                                    </MDBCardBody>
                                </MDBCard>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ))}
        </Container>
    );
}

export default Maps;

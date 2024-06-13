import {  MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import { Typography, Box, Container } from '@mui/material';
import "../index.css";
const GameInfo = () => {
    return (
        <Container>
            <Box my={4}>
			<Typography variant="h2" component="h1" gutterBottom className="centered-image">
				<img src='/webp/Team-Fortress-2-logo.png' alt='Team Fortress 2 Logo' />
				</Typography>

                <MDBCard className="mb-4">
                    <MDBCardBody>
                        <MDBCardTitle>Sobre el juego</MDBCardTitle>
                        <MDBCardText>
						Team Fortress 2, abreviado por su acrónimo TF2, es un videojuego multijugador de disparos en primera persona desarrollado y publicado por Valve Corporation. Es la secuela del mod de 1996 para Quake del mismo nombre y su remake de 1999, Team Fortress Classic. Fue lanzado por primera vez como parte de la recopilación de videojuegos The Orange Box el 10 de octubre de 2007 para Windows y Xbox 360. Posteriormente se lanzó también una versión para PlayStation 3. Más tarde, el 8 de abril de 2008, se lanzó de forma independiente para Windows a través de la plataforma de Valve y dos años más tarde para OS X; finalmente el 14 de febrero de 2013 fue lanzado para Linux. Las únidades físicas se vendían bajo el control de Electronic Arts, mientras que la distribución en línea de Team Fortress 2 se realizaba desde la plataforma de Steam, donde actualmente sigue como free-to-play desde el 23 de junio de 2011. Además cuenta con microtransacciones e intercambio de armas en el juego a través de Steam. 
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4">
                    <MDBCardBody>
                        <MDBCardTitle> Modos de juego </MDBCardTitle>
                        <MDBCardText>
						<ul>
							<li>
							<strong>Arena </strong>es un modo de juego especial en el que los jugadores no reaparecen al morir. Gana el equipo que derrote a todos los jugadores. Este modo ya no se puede jugar mediante emparejamiento, pero sí en servidores de la comunidad.
							</li>
							<li>
							<strong>Mannpower</strong>  es un modo de juego en el que se usa un gancho y potenciadores que se pueden encontrar por el mapa. A pesar de no estar relacionado con ningún tipo de modo, hay mapas de Mannpower con variaciones de capturar la bandera.
							</li>
							<li>
							<strong>PASA-Tiempo</strong> es un modo de juego único inspirado en el rugby, desarrollado por Valve, Bad Robot Interactive y Escalation Studios. Hay tres formas de marcar gol (en las porterías de base, las laterales y las de bonificación). Por desgracia este modo de juego esta Abandonado por los jugadores ya que no pega con el estilo de de juego que es TF2 ahora
							</li>
							<li>
							<strong>Aniquilación</strong> es un modo de juego creado por la comunidad en el que un jugador al morir deja caer un elemento. El primer equipo en recoger un número concreto de elementos soltados por jugadores muertos gana la partida. Los jugadores de cada equipo con más elementos recogidos se destacará para todos los jugadores y además obtendrá un efecto de curación para él mismo y sus aliados cercanos.
							</li>
							<li>
							<strong>Entrega especial</strong> es un modo similar al de capturar la bandera, pero solo hay un maletín neutral que ambos equipos pueden coger. Cuando un equipo coge el dosier, el equipo contrario no lo podrá coger hasta que pasen 45 segundos y vuelva a su punto de aparición inicial.
							</li>
							<li>
							<strong>Puntos de control</strong> consta de (como su nombre indica) varios puntos de control por el mapa. Al capturar cada uno de ellos el tiempo se ampliará y pueden capturarse tanto por RED como por BLU. A diferencia de los puntos de control, solo hay dos accesibles al mismo tiempo. Gana el equipo que primero capture todos los puntos de control
							</li>
						</ul>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>

            </Box>
        </Container>
    );
};

export default GameInfo;

/* eslint-disable react/prop-types */
import  { useState } from 'react';
import Login from "/src/Components/Login.jsx";
import SignUp from "/src/Components/SignUp.jsx";

function Inicio({setIsLoggedIn} ) {
    const [SingedIn, setSingedIn] = useState(true);

    function handleForm(){
        setSingedIn(!SingedIn);
    }

	return (
		<>
            {SingedIn ?     
            <div >
            <Login setIsLoggedIn={setIsLoggedIn} handleForm={handleForm} />
            </div>
            : 
           
           <div>
            <SignUp setIsLoggedIn={setIsLoggedIn} handleForm={handleForm} />
            </div>
            }
		</>
	);
}

export default Inicio;
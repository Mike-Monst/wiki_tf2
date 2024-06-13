/* eslint-disable react/prop-types */
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useState, useEffect, useRef } from "react";

function Likes({ post_id, setIsError }) {
    const usergmail = localStorage.getItem("gmail");
    const [Like, setLike] = useState(0);
    const upButtonRef = useRef(null);
    const downButtonRef = useRef(null);

    const handleLikeClick = async (value) => {
        let solicitud;
        const formData = {
            user_gmail: usergmail,
            post_id: post_id,
            like_value: value,
        };

        try {
            let response;
            if (Like === value) {
                solicitud = "DELETE";
                response = await fetch(
                    `http://localhost:3000/api/likes/${usergmail}&${post_id}`,
                    {
                        method: "DELETE",
                    }
                );
                setLike(0);
            } else if (Like === 0) {
                solicitud = "POST";
                response = await fetch("http://localhost:3000/api/likes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });
                setLike(value);
            } else {
                solicitud = "PUT";
                response = await fetch(
                    `http://localhost:3000/api/likes/${usergmail}&${post_id}`,
                    {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ like_value: value }),
                    }
                );
                setLike(value);
            }

            if (response.ok) {
                setIsError(null);
                updateButtonStyles(value);
            } else {
                setIsError(`Error al realizar la solicitud ${solicitud}`);
            }
        } catch (error) {
            setIsError("Error de red:", error);
        }
    };

    const updateButtonStyles = (value) => {
        if (value === 1) {
            if (upButtonRef.current) {
                upButtonRef.current.className = "fas fa-thumbs-up text-success m-2";
            }
            if (downButtonRef.current) {
                downButtonRef.current.className = "fas fa-thumbs-down text-secondary m-2";
            }
        } else if (value === -1) {
            if (upButtonRef.current) {
                upButtonRef.current.className = "fas fa-thumbs-up text-secondary m-2";
            }
            if (downButtonRef.current) {
                downButtonRef.current.className = "fas fa-thumbs-down text-danger m-2";
            }
        } else {
            if (upButtonRef.current) {
                upButtonRef.current.className = "fas fa-thumbs-up text-secondary m-2";
            }
            if (downButtonRef.current) {
                downButtonRef.current.className = "fas fa-thumbs-down text-secondary m-2";
            }
        }
    };

    useEffect(() => {
        const fetchLikes = async () => {
            const response = await fetch(
                "http://localhost:3000/api/likes/" + usergmail + "&" + post_id
            );
            if (!response.ok) {
                setIsError("Error al obtener los likes");
            }
            const data = await response.json();
            setLike(data.datos);
            updateButtonStyles(data.datos);
        };
        fetchLikes();
    }, [usergmail, post_id, setIsError]);

    return (
        <div className="d-flex align-items-center">
            <MDBBtn
                color="light"
                onClick={() => handleLikeClick(1)}
				floating

            >
                <MDBIcon
                    ref={upButtonRef}
                    color={Like === 1 ? "success" : "secondary"}
                    fas
                    icon="thumbs-up"
					size="lg"

                />
            </MDBBtn>

            <MDBBtn
                color="light"
                floating
                onClick={() => handleLikeClick(-1)}
                
            >
                <MDBIcon
                    ref={downButtonRef}
                    color={Like === -1 ? "danger" : "secondary"}
                    fas
                    icon="thumbs-down"
					size="lg"
                />
            </MDBBtn>
        </div>
    );
}

export default Likes;

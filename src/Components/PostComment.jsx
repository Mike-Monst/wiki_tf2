import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Box, CircularProgress, Alert, Collapse  } from "@mui/material";
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBInput,
	MDBBtn,
	MDBRow,
	MDBCol,
	MDBIcon,
} from "mdb-react-ui-kit";
import Likes from "../Components/Likes";

function PostComment() {
	const { postId } = useParams();
	const [post, setPost] = useState(null);
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(null);
	const [newComment, setNewComment] = useState("");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const fetchPostAndComments = async () => {
			try {
				const postResponse = await fetch(
					`http://localhost:3000/api/posts/${postId}`
				);
				const commentsResponse = await fetch(
					`http://localhost:3000/api/comments?postId=${postId}`
				);

				if (postResponse.ok && commentsResponse.ok) {
					const postData = await postResponse.json();
					const commentsData = await commentsResponse.json();

					setPost(postData.datos);
					setComments(commentsData.datos);
					setIsError(null); // Limpiar error
				} else {
					setIsError("Error al obtener los datos del post o comentarios");
				}
			} catch (error) {
				setIsError("Error de red:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPostAndComments();
	}, [postId]);

	const handleCommentSubmit = async () => {
		if (newComment.length <= 280) {
			if (newComment.trim() === "") return;

			const randomNumber = Math.floor(Math.random() * 1000000);
			const paddedNumber = randomNumber.toString().padStart(6, "0");

			const commentData = {
				post_id: postId,
				comment_id: paddedNumber,
				user_gmail: localStorage.getItem("gmail"),
				comment_text: newComment,
			};

			try {
				const response = await fetch("http://localhost:3000/api/comments", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(commentData),
				});

				if (response.ok) {
					//const newCommentData = await response.json();
					setComments([commentData, ...comments]);
					setNewComment("");
					setIsError(null); // Limpiar error
				} else {
					setIsError("Error al agregar el comentario");
				}
			} catch (error) {
				setIsError("Error de red:", error);
			}
		} else {
			setOpen(true);
		}
	};

	if (isLoading) {
		return <CircularProgress color="error" />;
	}

	if (isError != null) {
		return <h3>{isError}</h3>;
	}

	return (
		<Container>
			{post && (
				<MDBCard className="mb-4" key={post.post_id}>
					<MDBCardBody className="block-style">
						<MDBCardTitle>{post.post_category}</MDBCardTitle>
						<MDBCardText>{post.post_text}</MDBCardText>
						<MDBRow>
							<MDBCol md="8">
								<p>
									<strong>User:</strong> {post.user_gmail}
								</p>
							</MDBCol>

							<MDBCol md="4" className="text-right">
								<Likes post_id={post.post_id} setIsError={setIsError} />
							</MDBCol>
						</MDBRow>
					</MDBCardBody>
				</MDBCard>
			)}
			<Box my={4}>
				<Collapse in={open}>
					<Alert
						severity="warning"
						onClose={() => {
							setOpen(false);
						}}
					>
						El comentario no puede exceder los 280 caracteres
					</Alert>
				</Collapse>
				<div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
					<MDBInput
						type="textarea"
						label="Add a comment"
						rows="3"
						value={newComment}
						onChange={(e) => setNewComment(e.target.value)}
						style={{ flex: 1 }}
					/>
					<MDBBtn
						color="primary"
						className="ms-2"
						floating
						onClick={handleCommentSubmit}
					>
						<MDBIcon fas icon="paper-plane" />
					</MDBBtn>
				</div>

				{comments && comments.length > 0 ? (
					comments.map((comment) => (
						<MDBCard className="mt-3" key={comment.comment_id}>
							<MDBCardBody className="comment-block-style">
								<MDBCardText className="text-muted small fs-7">
									{comment.user_gmail}
								</MDBCardText>
								<p>{comment.comment_text}</p>
							</MDBCardBody>
						</MDBCard>
					))
				) : (
					<h3>
						<br />
						No comments yet
					</h3>
				)}
			</Box>
		</Container>
	);
}

export default PostComment;

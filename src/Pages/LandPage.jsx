import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import GameInfo from "../Components/GameInfo";

import { Container } from "@mui/material";

import {
	MDBTabs,
	MDBTabsItem,
	MDBTabsLink,
} from "mdb-react-ui-kit";

function LandPage() {
	const [basicActive, setBasicActive] = useState("");

	const handleBasicClick = (value) => {
		if (value === basicActive) {
			setBasicActive("");
			return;
		}

		setBasicActive(value);
	};

	return (
		<Container>
			<MDBTabs pills className="mb-3">
				<MDBTabsItem>
					<Link to="/clases">
						<MDBTabsLink
							onClick={() => handleBasicClick("clases")}
							active={basicActive === "clases"}
						>
							clases
						</MDBTabsLink>
					</Link>
				</MDBTabsItem>
				<MDBTabsItem>
					<Link to="/maps">
						<MDBTabsLink
							onClick={() => handleBasicClick("maps")}
							active={basicActive === "maps"}
						>
							maps
						</MDBTabsLink>
					</Link>
				</MDBTabsItem>
				<MDBTabsItem>
					<Link to="/weapons">
						<MDBTabsLink
							onClick={() => handleBasicClick("weapons")}
							active={basicActive === "weapons"}
						>
							weapons
						</MDBTabsLink>
					</Link>
				</MDBTabsItem>
			</MDBTabs>

			
			{basicActive === "" ? 
			
			<GameInfo />
			
			:
			
			<Outlet />}
		</Container>
	);
}

export default LandPage;

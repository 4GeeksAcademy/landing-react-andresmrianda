import React from "react";
import {Navbar} from "./nav.jsx";
import {Jumbotron} from "./welcome.jsx" 
import {Card} from "./cards.jsx"
import {Footer} from "./footer.jsx"

const home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className = "row">
				<Jumbotron />
				</div>
				<div className="row">
					<div className="col-3">
						<Card
						image="https://cdn.discordapp.com/attachments/1163524764309147730/1191839280771899452/imagen1.png?ex=65a6e5d3&is=659470d3&hm=3fdf58a06de98c652dbeaf4fa778f25cb41dba2258940a79b2a7096fb218e80b&"
						title="Card Title"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae congue tortor. Praesent aliquam elit ligula, maximus consectetur odio tempor feugiat."
						buttonLabel="Find Out More!"
						buttonUrl="www.4geeks.com" />
					</div>
					<div className="col-3">
						<Card
						image="https://cdn.discordapp.com/attachments/1163524764309147730/1191839280771899452/imagen1.png?ex=65a6e5d3&is=659470d3&hm=3fdf58a06de98c652dbeaf4fa778f25cb41dba2258940a79b2a7096fb218e80b&"
						title="Card Title"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae congue tortor. Praesent aliquam elit ligula, maximus consectetur odio tempor feugiat."
						buttonLabel="Find Out More!"
						buttonUrl="www.4geeks.com" />
					</div>
					<div className="col-3">
						<Card
						image="https://cdn.discordapp.com/attachments/1163524764309147730/1191839280771899452/imagen1.png?ex=65a6e5d3&is=659470d3&hm=3fdf58a06de98c652dbeaf4fa778f25cb41dba2258940a79b2a7096fb218e80b&"
						title="Card Title"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae congue tortor. Praesent aliquam elit ligula, maximus consectetur odio tempor feugiat."
						buttonLabel="Find Out More!"
						buttonUrl="www.4geeks.com" />
					</div>
					<div className="col-3">
						<Card
						image="https://cdn.discordapp.com/attachments/1163524764309147730/1191839280771899452/imagen1.png?ex=65a6e5d3&is=659470d3&hm=3fdf58a06de98c652dbeaf4fa778f25cb41dba2258940a79b2a7096fb218e80b&"
						title="Card Title"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae congue tortor. Praesent aliquam elit ligula, maximus consectetur odio tempor feugiat."
						buttonLabel="Find Out More!"
						buttonUrl="www.4geeks.com" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default home;
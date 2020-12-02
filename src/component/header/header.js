import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import "./header.scss";
import Box from "@material-ui/core/Box";
import  Avatar  from "@material-ui/core/Avatar";
export default function Header() {
	return (
		<div >
			<AppBar position="fixed" className="header" id="top" elevation={0}>
				<Toolbar>
					<div style={{ width: "100%" }}>
						<Box
							display="flex"
							justifyContent="flex-end"
							m={1}
							p={1}
							alignItems="center"
						>
							<Box p={1}>
								<IconButton>
									<NotificationsNoneIcon />
								</IconButton>  
							</Box>
							<Box p={1}>
								<Typography>Anna Onyekaba</Typography>
							</Box>
							<Box p={1}>
								<IconButton>
									<Avatar alt="Anastestia" src={require("../../assests/images/me.JPG") }/>
								</IconButton>
							</Box>
						</Box>
					</div>
				</Toolbar>
				<Toolbar>
					<div>
						<Typography>
							<h1 id="name">Goodmorning Anna</h1>
						</Typography>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

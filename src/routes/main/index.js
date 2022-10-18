import React from "react";
import MainForm from "../../components/main-form";
import loversImg from "../../assets/main.jpeg";

export default function Main() {
	return (
		<div className="font-sans">
			<div className="h-screen flex">
				<div className="flex-1 w-1/2 xs:hidden">
					<img
						className="h-full w-full object-cover"
						src={loversImg}
						alt="lovers"
					/>
				</div>
				<div className="flex-1">
					<MainForm />
				</div>
			</div>
		</div>
	);
}

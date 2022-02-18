import React from "react";
import background from "./Images/Background.png";
import logo from "./Images/logo.png";

function Header() {
	return (
		<div
			style={{
				backgroundImage: "url(" + background + ")",
				backgroundSize: "cover",
			}}
		>
            <div className="flex flex-col items-center justify-center py-6">
			<img src={logo} alt='star' className='object-center ' />
            </div>
			<div>
				<h2 className='text-center font-bold text-xl py-10'>
					Just a step away from becoming about part of our amazing pool
				</h2>
			</div>
		</div>
	);
}

export default Header;

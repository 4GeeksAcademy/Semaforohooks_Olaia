import React, { useState } from "react";

const TrafficLight = () => {

	const [selection, setSelection] = useState("red")
	const changeColor = (color) => {
		setSelection(color)

	}


	return (
		<main>
			<div className="p-box"></div>
			<div className="box-light">
				<div className={`red ${selection == red ? "luz-encendida" : ""}`}
					onClick={() => changeColor("red")}>

				</div>
				<div className={`yellow ${selection == yellow ? "luz-encendida" : ""}`}
					onClick={() => changeColor("yellow")}>

				</div>
				<div className={`red ${selection == green ? "luz-encendida" : ""}`}
					onClick={() => changeColor("green")}>

				</div>

			</div>
		</main>
	)
}





export default TrafficLight;
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
				<div className={`red ${selection == "red" ? "light-on" : ""}`}
					onClick={() => changeColor("red")}>

				</div>
				<div className={`yellow ${selection == "yellow" ? "light-on" : ""}`}
					onClick={() => changeColor("yellow")}>

				</div>
				<div className={`green ${selection == "green" ? "light-on" : ""}`}
					onClick={() => changeColor("green")}>

				</div>

			</div>
		</main>
	)
}





export default TrafficLight;
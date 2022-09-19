import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CITIES } from "../constants";
import placesList from "../places-list.json";
import { SelectComponent } from "./common/select";

export default function () {
	// const [input, setInput] = useState(null);
	// const [input1, setInput1] = useState(null);
	// const [client, setClient] = useState([]);
	// const [inputlength, setInputlength] = useState(0);
	// const [input1length, setInput1length] = useState(0);
	// const [true1, setTrue] = useState(false);

	const [city, setCity] = useState();

	const handleCity = (event) => {
		const { value } = event.target;
		setCity(value);
	};

	// const handlelocale = (event) => {
	// 	setInput(event.target.value);
	// 	setInputlength(event.target.value.length);
	// };
	// const handleLocale1 = (event) => {
	// 	setInput1(event.target.value);
	// 	setInput1length(event.target.value.length);
	// };

	// useEffect(() => {
	// const getData = async () => {
	// 	const data = await fetch("http://localhost:3000/place-list");
	// 	const json = await data.json();
	// 	setClient(json);
	// 	// return await data.json();
	// };
	// getData()
	// 	.then((res) => console.log("res", res))
	// 	.catch((error) => console.log(error));
	// }, []);
	// const truebol = (event) => {
	// 	setTrue(!true1);
	// };
	console.log(city);
	return (
		<Box>
			<Box component="h1">Идеальное Свидание</Box>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<Box width="300px">
					<SelectComponent
						isFullWidth
						label="Выберите ваш город"
						options={CITIES}
						value={city}
						onChange={handleCity}
					/>
				</Box>
				<Box display="flex" justifyContent="center" margin="10px">
					<input
						// onChange={(e) => handlelocale(e)}
						placeholder="от"
					></input>

					<input
						// onChange={(e) => handleLocale1(e)}
						placeholder="до"
					></input>
				</Box>
			</Box>

			{/* <div className="dex"> */}
			{/* {true1 &&
					client
						.filter((k) => parseInt(k.ot) < parseInt(input1))
						// if (k.ot.length < inputlength && k.do.length < input1length) {
						//   return <h1>lol</h1>;
						//

						.map((filteredkafe, id) => {
							return (
								<div className="dox">
									<h1 key={id}>{filteredkafe.kafe}</h1>
									<img src={filteredkafe.img} className="foto"></img>
								</div>
							);
						})} */}

			{/* {true1 &&
          client
            .filter((k) => {
              // if (k.ot.length < inputlength && k.do.length < input1length) {
              //   return <h1>lol</h1>;
              // }
              if (k.ot.length <= inputlength && k.do <= input1length) {
                return <h1>k</h1>;
              }
            })
            .map((filteredkafe, id) => {
              return (
                <div className='dox'>
                  <h1 key={id}>{filteredkafe.kafe}</h1>
                </div>
              );
            })} */}
			{/* </div> */}
		</Box>
	);
}

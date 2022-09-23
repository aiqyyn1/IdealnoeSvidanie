import React, { useState } from "react";
import Select from "../../components/common/select";
import MainForm from "../../components/main-form";
import { CITIES } from "../../constants";
import * as Styled from "./styled";

export default function Main() {
	const [city, setCity] = useState();

	const handleCity = (event) => {
		const { value } = event.target;
		setCity(value);
	};
	return (
		<div>
			<Styled.Wrapper>
				<Styled.ImageWrapper>
					<Styled.Image />
				</Styled.ImageWrapper>
				<div>
					<MainForm />
				</div>
			</Styled.Wrapper>
		</div>
	);
}

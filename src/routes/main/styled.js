import styled from "styled-components";
import lovers from "../../assets/main.jpeg";

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
  width: 100%:
`;

export const ImageWrapper = styled.div`
	width: 50%;
`;

export const Image = styled.div`
	background: url(${lovers});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 100vh;
`;

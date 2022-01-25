import styled from "styled-components";
import { primaryFont, white } from "../../constants/constants";

export const Head = styled.div`
  max-height: 20vh;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  font-family: ${primaryFont};
  width: 100vw;
  text-align: center;

`;

export const SimpleText = styled.div`
  font-weight: 500;
  font-size: 16px;
  background-color: black;
  width: 100vw;
  color: ${white};
`;

export const BoldText = styled.div`
  font-weight: 600;
  font-size: 24px;
  width: 100vw;
`;

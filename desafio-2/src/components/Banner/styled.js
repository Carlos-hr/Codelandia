import styled from "styled-components";
import { wallpaper } from "../../constants/constants";

export const Main = styled.div`
  background-image: url(${wallpaper});
  filter: brightness(50%);
  background-size: auto;
  background-repeat: no-repeat;
  position: absolute;
  width: 1440px;
  height: 378px;
  left: 0px;
  top: 119px;
`;

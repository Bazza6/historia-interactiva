//import styled from "styled-components";
import styled, { css } from 'styled-components';

const P = styled.p`
margin: 20px;
border: 1px black solid;
padding: 1rem;
border-radius: 2rem;
text-align: center;
background-color: ${({ selected }) => selected ? "pink" : "transparent"};
`;



export default P;
import styled from "styled-components";

const Button = styled.button`
cursor: pointer;
font-size: 2rem;
background: ligthgrey;
width: 50%;
border: 1px black solid;
padding: 1rem;
text-align: center;
`;

const ButtonBenvingut = styled(Button)`
border-radius: 20px;
`;


const StyledP = styled.p`
margin: 20px;
border: 1px black solid;
padding: 1rem;
border-radius: 2rem;
text-align: center;
background-color: ${({ selected }) => selected ? "pink" : "transparent"};
`;

const Background = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: saddlebrown;
`;

export { Button, StyledP, Background, ButtonBenvingut };
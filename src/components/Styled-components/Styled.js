import styled from "styled-components";

const Button = styled.button`
cursor: pointer;
font-size: 2rem;
background: ligthgrey;
width: 50%;
border: 2px black solid;
height: 5rem;
text-align: center;
&:hover {
background-color: lightgray;
border: 4px black solid;
}
`;

const ButtonBenvingut = styled(Button)`
background-color: yellow;
border-radius: 20px;
position:absolute;
top: 50vh;
&:hover {
  color: white;
  background-color:red;
}
`;

const StyledP = styled.p`
max-width: 1000px;
margin: auto;
margin-top: 20px;
border: 2px black solid;
padding: 1rem;
border-radius: 2rem;
text-align: center;
background-color: ${({ selected }) => selected ? "pink" : "rgba(255, 255, 255, 0.6)"};
`;

const WelcomeBackground = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items:center ;
background-image: repeating-radial-gradient(orange, lightblue 15%, lightgreen 23%);
`;

const StyledBackground = styled.div`
padding: 0.5rem;
height: 100vh;
background-image: url("${props => props.background}");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;

export { Button, StyledP, WelcomeBackground, ButtonBenvingut, StyledBackground };
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
max-width: 1000px;
margin: auto;
margin-top: 20px;
border: 1px black solid;
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
background-color: saddlebrown;
`;

const StyledBackground = styled.div`
  width: 100%;
  height: 100vh;
  //background-image: url("img/2.jpg");
  background-image: ${({ num }) => `url(img/${num}.jpg)`};

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export { Button, StyledP, WelcomeBackground, ButtonBenvingut, StyledBackground };
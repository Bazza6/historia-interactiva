import { Background, ButtonBenvingut, StyledP } from "../Styled-components/Styled"

const Benvingut = (props) => {

    return (
        <Background>
            <StyledP>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, vel. Nostrum aspernatur assumenda dolore, reprehenderit, modi repellendus officiis consectetur porro voluptatem, quia quos tempore nihil iste? Est molestiae dolores totam!
            </StyledP>
            <ButtonBenvingut onClick={props.onClick}>Comencem!</ButtonBenvingut>
        </Background>
    )

};

export default Benvingut;
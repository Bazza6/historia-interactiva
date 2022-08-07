import { StyledP } from "../Styled-components/Styled";

const Escena = (props) => {
    return (
        <StyledP selected={props.selected}>{props.frase}</StyledP>
    )
};

export default Escena;
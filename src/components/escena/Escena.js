//import "./Escena.css";
//import styled from 'styled-components';

import P from "../P";

const Escena = (props) => {
    return (
        <div>
            <P selected={props.selected}>{props.frase}</P>
        </div>

    )
};


export default Escena;
import React from 'react';
import { StyledStartButton } from './styles/StyledButton';

const Startbutton = ({callback}) => {
    return (
        <StyledStartButton onClick={callback}>
            start game
        </StyledStartButton>
    )
}

export default Startbutton

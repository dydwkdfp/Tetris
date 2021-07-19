import React from 'react';
import { StyledStartButton } from './styles/StyledButton';

const Startbutton = ({callback}) => {
    return (
        <StyledStartButton onClick={callback}>
            Start Game
        </StyledStartButton>
    )
}

export const Pausebutton = ({callback}) => {
    return (
        <StyledStartButton onClick={callback}>
            Pause Game
        </StyledStartButton>
    )
}

export default Startbutton

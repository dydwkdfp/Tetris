import styled from 'styled-components';

export const StyledStartButton = styled.button`
    box-sizing: border-box;
    margin: 10px 10px;
    padding: 20px;
    min-height: 30px;
    width:100%;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    outline: none;
    cursor: pointer;

    background: none,
    border: 0,
    borderRadius: 3,
    color: white,

    @media (minWidth: 850px) : {
        height: 35px,
        fontSize: 28px,
    }
`
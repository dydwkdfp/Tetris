import styled from 'styled-components';

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    text-align: center;
    margin: 10px 10px;
    padding: 20px;
    border: 4px solid #ccc;
    min-height: 30px;
    width: 60%;
    border-radius: 20px;
    color: ${props => (props.gameOver ? 'red' : '#ccc')};
    background: #000;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;

`
import styled from 'styled-components';

export const StyledStage = styled.div`

    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(25vw / ${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    height:100%;
    max-width: 25vw;
    background: #111;
    min-width:350px;

    @media screen and (max-width: 1400px){
        grid-template-rows: repeat(
            ${props => props.height},
            calc(350px / ${props => props.width})
        );
    }

    
    @media screen and (max-width: 850px){
        margin: 30px;
        min-width: 350px;
        grid-template-rows: repeat(
            ${props => props.height},
            calc(350px / ${props => props.width})
        );
    }

`
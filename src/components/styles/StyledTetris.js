import styled from 'styled-components';
import bgImage from '../../image/bg.png';

export const StyledTetrisContainer = styled.div`
    background: url(${bgImage}) #000;
    background-size: cover;
    overflow: hidden;
`

export const StyledTetrisWrapper = styled.div`
    display:flex;
    width: 100vw;
    height: 100vh;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const StyledTetris = styled.div`
display: grid;
width:100%;
grid-auto-columns: 1fr 1fr;
align-items: center;
justify-content: center;
grid-template-areas: 'col1 col2';

@media screen and (max-width: 850px){
    grid-template-areas: 'col1 col1' 'col2 col2';
}
`

export const Column1 = styled.div`
    display:flex;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    align-items: center;
    justify-content: flex-end;

    
@media screen and (max-width: 850px){
    justify-content: center;
}
`

export const Column2 = styled.div`
display:flex;
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
align-items: center;
justify-content: flex-start;
width: 100%;

@media screen and (max-width: 850px){
    justify-content: center;
}
`

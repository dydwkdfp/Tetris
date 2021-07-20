import styled from 'styled-components';
import bg from '../../image/bgmenu.jpg';

export const MenuContainer = styled.div`
background: url(${bg}) #060201;
background-size: contain;
background-repeat: no-repeat;
overflow: hidden;
`
export const MenuWrapper = styled.div`
    display:flex;
    width: 100vw;
    height: 100vh;
    margin-right: auto;
    margin-left: auto;
    padding: 24px 24px;
    justify-content: center;
    align-items: flex-end;
`
export const MenuDiv = styled.div`
    display: flex;
    width: 30%;
    min-width: 300px;
    height: 23%;
    padding: 24px 24px;
    justify-content: flex;
    align-items:flex;
    flex-direction: column;
`

export const MenuH1 = styled.h1`
    text-transform: uppercase;
    text-align:center;
    color:#fff;
    font-size: 35px;

    @media screen and (max-width:850px){
        font-size: 33px;    
    }

    @media screen and (max-width:480px){
        font-size: 30px;            
    }

`

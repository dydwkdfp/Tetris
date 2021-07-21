import styled from 'styled-components';
import bg from '../../image/bgmenu.jpg';

export const MenuContainer = styled.div`
width: 100vw;
height: 100vh;
background: url(${bg}) #060201;
background-size: contain;
background-position:center top;
background-repeat: no-repeat;
overflow: hidden;
`
export const MenuWrapper = styled.div`
    display:flex;
    margin-right: auto;
    margin-left: auto;
    height:100%;
    padding: 24px 24px;
    justify-content: flex-end;
    align-items:center;

    @media screen and (max-width: 850px){
        justify-content: center;
        align-items:flex-end;
    }
`
export const MenuDiv = styled.div`
    display: flex;
    width: 30%;
    min-width: 300px;
    height: 23%;
    margin: 0 0 300px 0 ;
    padding: 24px 24px;
    justify-content: flex;
    align-items:flex;
    flex-direction: column;

    @media screen and (max-width: 850px){
        justify-content: center;
        align-items:flex-end;
        margin: 0 0 150px 0 ;
    }
    
`
export const MenuTitle = styled.div`
    width:200px;
    padding: 24px 24px;
    text-align: center;
`
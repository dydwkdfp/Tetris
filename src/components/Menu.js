import React from 'react'
import {MenuContainer, MenuWrapper, MenuDiv, MenuTitle} from './styles/StyledMenu';
import {motion} from 'framer-motion';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    button:{
        background: 'none',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: '40px',
        margin: '20px',
        textTransform: 'uppercase',
        fontSize: '32px',
        fontFamily: 'Pixel, Arial, Helvetica, sans-serif',

        '@media (minWidth: 850px)' : {
            height: '35px',
            fontSize: '28px',
        }
    },
    text:{
        color: 'white',
        fontSize: '40px',
        textShadow: "0px 0px 8px rgb(255,255,255)",  
        boxShadow: "0px 0px 8px rgb(255,255,255)",   
    },
})

const Menu = () => {
    const classes = useStyles();
    return (
        <MenuContainer>
            <MenuTitle>
                <h1 className={classes.text}>TETRIS</h1>
            </MenuTitle>
            <MenuWrapper>
                <MenuDiv>
                    <Link to="/GamePage">
                    <motion.button className={classes.button} whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",  
                        boxShadow: "0px 0px 8px rgb(255,255,255)",                      
                    }}>
                        
                        Game Start!
                    </motion.button>
                    </Link>
                    <Link to="/About">
                    <motion.button className={classes.button} whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",  
                        boxShadow: "0px 0px 8px rgb(255,255,255)",                         
                    }}>
                        About!
                    </motion.button>
                    </Link>
                </MenuDiv>
            </MenuWrapper>
        </MenuContainer>
    )
}

export default Menu

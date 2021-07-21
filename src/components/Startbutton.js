import React from 'react';
import {motion} from 'framer-motion';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    button:{
        background: 'none',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: '40px',
        width: '60%',
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

const Startbutton = ({callback}) => {
    const classes = useStyles();
    return (
        <motion.button onClick={callback} className={classes.button} whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",  
            boxShadow: "0px 0px 8px rgb(255,255,255)",                         
        }}>
            New Game
        </motion.button>
    )
}

export const Pausebutton = ({callback, paused}) => {
    const classes = useStyles();
    return (
        <motion.button onClick={callback} className={classes.button} whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",  
            boxShadow: "0px 0px 8px rgb(255,255,255)",                         
        }}>
            {paused === 0 ? `Pause Game` : `Resume Game` }
        </motion.button>
    )
}

export default Startbutton
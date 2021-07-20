import React,{useState} from 'react';

import { createStage, checkCollision, STAGE_HEIGHT } from '../gameHelper';

import Stage from './Stage';
import Display from './Display';
import Startbutton, {Pausebutton} from './Startbutton';
import { StyledTetrisWrapper, StyledTetris, StyledTetrisContainer,Column1,Column2 } from './styles/StyledTetris';

import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { TETROMINOS } from '../tetrominos';
import { useInterval } from '../hooks/useInterval';
import { useGameStatus } from '../hooks/useGameStatus.js';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel, paused, setPaused] = useGameStatus(rowsCleared);

    const movePlayer = dir =>{
        if(!checkCollision(player,stage,{x:dir,y:0})){
            updatePlayerPos({x:dir,y:0})
        }
    }

    const startGame = () =>{
        setStage(createStage());
        resetPlayer();
        setGameOver(false);
        setDropTime(1000); 
        setScore(0);
        setRows(0);
        setLevel(0);
        setPaused(0);
    }

    const stopGame = () =>{
        if(paused===0){
            setDropTime(null);
            setPaused(1);
        }else{
            setDropTime(1000/(level+1) + 200);
            setPaused(0);
        }
    }

    const drop = () => {
        
        console.log('re renders');

        if(rows > (level+1)*10){
            setLevel(prev => prev+1);
            setDropTime(1000/(level+1) + 200);
        }

        if(!checkCollision(player,stage,{x:0,y:1})){
            updatePlayerPos({ x : 0 , y : 1, collided: false});
        }else{
            if(player.pos.y < 1){
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({x:0,y:0, collided: true});
        }
    }

    const keyUp = ({keyCode}) => {
        if(!gameOver){
            if(!paused){
                if(keyCode === 40){
                    setDropTime(1000/(level+1) + 200);
                }
            }
        }
    }

    const dropPlayer = () => {
        drop();
    }


    const move = ({ keyCode }) => {
        if(!gameOver){
            if(!paused){
                if(keyCode === 37){
                    movePlayer(-1);
                }else if(keyCode === 39){
                    movePlayer(1);
                }else if(keyCode === 40){
                    setDropTime(50);
                }else if(keyCode === 38){
                    playerRotate(stage, 1);
                }
            }
        }
    }

    useInterval(() => {
        drop();
    }, dropTime);

    return (
        <StyledTetrisContainer>
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
            <StyledTetris>
                <Column1>
               <Stage stage={stage}/>
               </Column1>
               <Column2>
                    <div>
                   {gameOver ? (
                       <Display gameOver={gameOver} text="Game Over"/>
                   ) : (
                    <div>
                        <Display text={`Score: ${score}`}/>
                       <Display text={`Rows: ${rows}`}/>
                        <Display text={`Level: ${level}`}/>
                    </div>
                    )}
                    <Startbutton callback={startGame}>Start game</Startbutton>
                    <Pausebutton callback={stopGame}>Pause game</Pausebutton>
                    </div>
               </Column2>
            </StyledTetris>
        </StyledTetrisWrapper>
        </StyledTetrisContainer>
    )
}

export default Tetris
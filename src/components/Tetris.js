import React from 'react';

import { createStage } from '../gameHelper';

import Stage from './Stage';
import Display from './Display';
import Startbutton from './Startbutton';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';


const Tetris = () => {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
               <Stage stage={createStage()}/>
               <aside>
                  <div>
                      <Display text="score"/>
                     <Display text="rows"/>
                      <Display text="level"/>
                  </div>
                 <Startbutton/>
               </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris
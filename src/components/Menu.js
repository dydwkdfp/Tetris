import React from 'react'
import {MenuContainer, MenuWrapper, MenuH1, MenuDiv, MenuA} from './styles/StyledMenu';
import {motion} from 'framer-motion';

const Menu = () => {
    return (
        <MenuContainer>
            <MenuWrapper>
                <MenuDiv>
                    <motion.button href="/GamePage" whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255255,255)",                        
                    }}>
                        Game Start!
                    </motion.button>
                    <motion.button href="/About" whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255255,255)",                        
                    }}>
                        About!
                    </motion.button>
                </MenuDiv>
            </MenuWrapper>
        </MenuContainer>
    )
}

export default Menu

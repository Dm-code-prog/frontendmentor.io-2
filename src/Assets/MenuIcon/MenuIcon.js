import styled, {keyframes} from 'styled-components';
import React from "react"
import styles from './MenuIcon.module.css'
import classNames from 'classnames';

const MenuHolder = styled.div`
height: 25px;
width: 40px;
position: relative;
z-index: 2;
`
const MenuBar = styled.div`
position: absolute;
height: 3px;
width: 100%;
background: hsl(0, 0%, 8%);
border-radius: 1px;
`
const MenuBar1 = styled(MenuBar)`top: -2px; `
const MenuBar2 = styled(MenuBar)`top: 8px;`
const MenuBar3 = styled(MenuBar)`top: 18px;`

const MenuOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

function MenuIcon(props){
    const MenuOpen = props.MenuOpen;
    const setMenuOpen = props.setMenuOpen;
    return (
        <MenuHolder onClick={() => setMenuOpen(!MenuOpen)}>
                <MenuBar1 className={classNames(MenuOpen ? styles.animate1F : styles.animate1R)}/>
                <MenuBar2 className={classNames(MenuOpen  ? styles.animate2F : styles.animate2R)}/>
                <MenuBar3 className={classNames(MenuOpen  ? styles.animate3F : styles.animate3R)}/>
            </MenuHolder>
    )

    
}

export {MenuIcon}



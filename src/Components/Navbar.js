import React from 'react';
import styled, {keyframes} from 'styled-components';
import {ReactComponent as Logo} from '../Assets/images/logo.svg';
import {ReactComponent as ArrowDown} from '../Assets/images/icon-arrow-down.svg';
import {ReactComponent as ArrowUp} from '../Assets/images/icon-arrow-up.svg';
import {ReactComponent as IconTodo} from '../Assets/images/icon-todo.svg';
import {ReactComponent as IconCalendar} from '../Assets/images/icon-calendar.svg';
import {ReactComponent as IconReminders} from '../Assets/images/icon-reminders.svg';
import {ReactComponent as IconPlanning} from '../Assets/images/icon-planning.svg';
import { MenuIcon } from '../Assets/MenuIcon/MenuIcon';
import { Context } from '../App';
import { use100vh } from 'react-div-100vh';
import { isSafari } from 'react-device-detect';

const Header = styled.div`
    display: flex;
    height: 75px;
    background: #E6E6E6;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px 0 18px;

    & > svg{
        cursor: pointer;
    }
`;

const slide = keyframes`
    from {opacity:0}
    to {opaity:1}
`
const slideBack = keyframes`
    from {opacity:1}
    to {opacity:0}
`

const UL = styled.ul`
    overflow: auto;
    position: absolute;
    height: ${props => props.height}px;
    top: 75px;
    min-width: 200px;
    right: 0;
    margin: 0;
    padding-top: 36px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    outline: none;
    background-color: hsl(0, 0%, 90%);
    padding-left: 18px;
    transition: all 0.1s ease-in-out;
     & li{
        list-style: none;
        padding: 18px 0 18px 0;
        padding-left: 18px;
    }
    & ul {padding: 0;}
    & ul li: hover{ background-color: rgb(180,223,229);}
    @media(min-width: 767px){
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        position: relative;
        top: 0;
        padding: 0;
        margin: 0;
        height: 100%;
        & li, p{
            padding: 0;
            margin-right: 9px;
            margin-left: 9px;
        }
        & li{
            height: auto;
            position: relative;
            padding-left: 5px;
            padding-right: 5px;
            // flex-shrink: 0;
        }
        &  li:hover{
            padding-top: 18px;
            padding-bottom: 18px;
            border-radius: 9px;
            background-color: hsl(0, 0%, 81%);
        }

        & button {
            margin: 0;
            margin-left: 9px;
        }

        & .btn1{
            margin-left: 48px
        }

        & p {
            display: flex;
            position: relative;
        }
        & p > svg { 
            display: none;
        } 

        & li > ul {
            position: fixed;
            top: 75px;
            transform: translateX(-78px);
            background-color: white;
            border-radius: 5px;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
            padding: 18px 9px 18px 9px;
            onScroll{
                display: none;
            }
        }
        & li > ul > li {
            padding: 9px;
        }

        & li > .il2 {
            transform: translateX(12px);
        }
    }

`


const Button = styled.button`
    background: white;
    border: none;
    outline: none;
    width: 90%;
    height: 42px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 21px;
    align-self: center;
    font-size: 16px;
    margin-top:18px;
    background: none;
    font-family: 'Epilogue', sans-serif;
    transition: all 0.1s ease-in-out;
    &:hover{
        background: rgb(180,223,229);
    }
`
const List = ()=>{
    const [expanded, setExpanded] = React.useState({1: false, 2:false});
    const height= use100vh();
    const [See, SetSee] = React.useState(true);
    window.addEventListener('scroll', () => {window.innerWidth > 767 && SetSee(false)});
    return (
        <UL height={height + 75}>
            <li>
                <p onClick={function (){
                    
                    setExpanded({...expanded, 1: !expanded[1]})
                        SetSee(true)
                    }
                    }>Features {<ArrowDown></ArrowDown>}</p> 
                { expanded[1]? 
                <ul style={{display: See? "block": "none"}}>

                    <li >{<IconTodo></IconTodo>}   ToDo List</li>
                    <li>{<IconCalendar></IconCalendar>}   Calendar</li>
                    <li>{<IconReminders></IconReminders>}   Reminders</li>
                    <li>{<IconPlanning></IconPlanning>}   Planning</li>
                </ul>
: null}
            </li>

            <li>

                <p  onClick={()=>{ 
                    setExpanded({...expanded, 2: !expanded[2]})
                
                    SetSee(true)
                }}
                >Company {<ArrowDown></ArrowDown>}</p>
                { expanded[2]?
                <ul className="il2" style={{display: See? "block": "none"}}>
                    <li>History</li>
                    <li>Our Team</li>
                    <li>Blog</li>
                </ul>
    : null}
            </li>
            <li>Careers</li>
            <li>About</li>
            <Button className="btn1">Login</Button>
            <Button style={{border: "1.56px solid hsl(0, 0%, 16%)"}}>Register</Button>
        </UL>

    )
}

function Navbar(){
    const {MenuOpen, setMenuOpen} = React.useContext(Context);
    return (
            <Header>
                <Logo style={{cursor: "pointer"}}/>
                {window.innerWidth > 767 ? "": <MenuIcon MenuOpen={MenuOpen} setMenuOpen={setMenuOpen}/>}
                {(MenuOpen || window.innerWidth > 767) && 
                    <List>
                    </List>}
            </Header>
            )  

}

export {Navbar};
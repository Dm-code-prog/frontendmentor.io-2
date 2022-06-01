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

const Header = styled.div`
    display: flex;
    height: 75px;
    background: #E6E6E6;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px 0 18px;
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
    height: 100%;
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
    transition: all 1s ease-in-out;
    padding-left: 18px;
    transition: all 1s ease-in-out;
     & li{
        list-style: none;
        padding: 18px 0 18px 0;
        padding-left: 18px;
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
`
const List = ()=>{
    const [expanded, setExpanded] = React.useState({1: false, 2:false});
    const height= use100vh();
    return (
        <UL height={height}>
            <li >
                <p onClick={() => setExpanded({...expanded, 1: !expanded[1]})}>Features {<ArrowDown></ArrowDown>}</p> 
                { expanded[1]? <ul>
                    <li>{<IconTodo></IconTodo>}   ToDo List</li>
                    <li>{<IconCalendar></IconCalendar>}   Calendar</li>
                    <li>{<IconReminders></IconReminders>}   Reminders</li>
                    <li>{<IconPlanning></IconPlanning>}   Planning</li>
                </ul>
: null}
            </li>

            <li>

                <p  onClick={() => setExpanded({...expanded, 2: !expanded[2]})} >Company {<ArrowDown></ArrowDown>}</p>
                { expanded[2]?
                <ul>
                    <li>History</li>
                    <li>Our Team</li>
                    <li>Blog</li>
                </ul>
    : null}
            </li>
            <li>Careers</li>
            <li>About</li>
            <Button>Login</Button>
            <Button style={{border: "1.25px solid hsl(0, 0%, 16%)"}}>Register</Button>
        </UL>

    )
}

function Navbar(){
    const {MenuOpen, setMenuOpen} = React.useContext(Context);
    return (
            <Header>
                <Logo/>
                <MenuIcon MenuOpen={MenuOpen} setMenuOpen={setMenuOpen}/>
                {MenuOpen && 
                    <List>
                    </List>}
            </Header>
            )  

}

export {Navbar};
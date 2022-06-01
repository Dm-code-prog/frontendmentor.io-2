import styled from 'styled-components';
import ImageMobile from '../Assets/images/image-hero-mobile.png';
import ImageDesktop from '../Assets/images/image-hero-desktop.png';

import {ReactComponent as Audiophile} from '../Assets/images/client-audiophile.svg';
import {ReactComponent as Databiz} from '../Assets/images/client-databiz.svg';
import {ReactComponent as Maker} from '../Assets/images/client-maker.svg';
import {ReactComponent as Meet} from '../Assets/images/client-meet.svg';

const BodyContainer = styled.div`
    padding-top: 36px;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        padding-top: 48px;
        padding-right: 18px;
        padding-left: 18px;
    }
`
const P = styled.p`
    padding: 0 18px 0 18px;
    color: hsl(0, 0%, 32%);
    line-height: 1.5;
    font-weight: 700;
    text-align: center;
    max-width: 390px;
    margin: auto;
    @media (min-width: 768px) {
        text-align: left;
        padding: 0;
        margin: 0;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        justify-content: flex-start;
        text-align: left;
        max-width: 500px;
    }
`
const H1 = styled.h1`
    padding: 36px 18px 0 18px;
    @media (min-width: 768px) {
        text-align: left;
        padding: 0;
        padding-top: 36px;
        font-size: 48px;
    }
    @media (min-width: 960px) {
        font-size: 72px;
    }
`

const BlackButton = styled.button`
    background: hsl(0, 0%, 8%);
    border: none;
    border-radius: 18px;
    margin: 25px 25px 45px 25px;
    color: white;
    width: 155px;
    height: 50px;
    font-size: 18px;
    font-weight: 700;
    @media (min-width: 768px) {
        margin-top: 48px;
        margin-left: 0;
    }
    &:hover{
        color: rgb(180,223,229);
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        justify-content: flex-start;
    }
    `


const BrandContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
    margin-top: 18px;
    margin-bottom: 36px;
    @media (min-width: 768px) {
        margin-top: 48px;
        justify-content: space-between;
    }

    & > svg {
        cursor: pointer;
    }
`


function Body(){
    console.log(window.innerWidth)
    return (
        <>
        <BodyContainer>
            <div style={{marginTop:"10px", display: "flex", justifyContent: "center"}}>
                <img src={window.innerWidth > 768 ? ImageDesktop:ImageMobile} alt=""
                    width={window.innerWidth > 768 ? "337.5px":"100%"}
                    height={window.innerWidth > 768 ? "450px":"100%"}
                    style={{maxWidth: "500px"}}
                    />
            </div>
            <div>
                <HeaderContainer><H1>Make remote work</H1></HeaderContainer>
                <P>
                    Get your team in sync, no matter your location. 
                    Streamline processes, create team rituals, and watch productivity soar.
                </P>
                <ButtonContainer>
                    <BlackButton>Learn more</BlackButton>
                </ButtonContainer>
                <BrandContainer>
                    <Audiophile/>
                    <Databiz/>
                    <Maker/>
                    <Meet/>
                </BrandContainer>
                </div>

        </BodyContainer>
     </>
        
    )
}

export {Body}
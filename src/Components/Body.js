import styled from 'styled-components';
import ImageMobile from '../Assets/images/image-hero-mobile.png';

import {ReactComponent as Audiophile} from '../Assets/images/client-audiophile.svg';
import {ReactComponent as Databiz} from '../Assets/images/client-databiz.svg';
import {ReactComponent as Maker} from '../Assets/images/client-maker.svg';
import {ReactComponent as Meet} from '../Assets/images/client-meet.svg';

const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 36px;
`
const P = styled.p`
    padding: 0 18px 0 18px;
    color: hsl(0, 0%, 32%);
    line-height: 1.5;
    font-weight: 700;
    text-align: center;
    max-width: 390px;
`
const H1 = styled.h1`
    padding: 36px 18px 0 18px;
`

const BrandContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-top: 48px;
`

function Body(){
    return (
        <BodyContainer>
            <img src={ImageMobile} alt=""width="100%"/>
            <H1>Make remote work</H1>
            <P>
                Get your team in sync, no matter your location. 
                Streamline processes, create team rituals, and watch productivity soar.
            </P>
            <BrandContainer>
                <Audiophile/>
                <Databiz/>
                <Maker/>
                <Meet/>
            </BrandContainer>
        </BodyContainer>
        
    )
}

export {Body}
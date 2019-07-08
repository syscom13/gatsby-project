import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';

const SectionGroup = styled.div`
    background: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    height: 720px;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width: 640px) {
        height: 820px;
    }
`
const SectionLogo = styled.img`
    align-self: end;
    width: 128px;
    margin: 0 auto;
`
const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    max-width: 860px;
    padding: 0 40px;
    margin: 20px auto;
    grid-gap: 20px;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        margin-top: 0;
        grid-template-columns: 1fr;
        text-align: center;
    }
`
const SectionTitle = styled.h3`
    color: white;
    font-size: 6rem;
    line-height: 1.2;

    @media (max-width: 720px) {
        font-size: 4rem;
    }
`
const SectionText = styled.p`
    color: white;
    margin-top: 2rem;

    @media (max-width: 720px) {
        margin-top: 0;
        font-size: 2rem;
    }
`
const WaveBottom = styled.div`
    position: absolute;
    bottom: -6px;
    width: 100%;
`
const WaveTop = styled.div`
    position: absolute;
    top: -6px;
    width: 100%;
    transform: scaleY(-1);
`

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <SectionLogo src={props.logo}/>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section
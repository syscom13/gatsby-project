import React from 'react'
import styled from 'styled-components'

const CardGroup = styled.div`
    max-width: 300px;
    width: 100%;
    height: 225px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .25);
    display: grid;
    grid-template-rows: 1fr 1fr;
    transition: all .8s cubic-bezier(.2, .8, .2, 1);
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 30px 60px rgba(0, 0, 0, .5);
        cursor: pointer;
    }
`
const CardTitle = styled.h3`
    font-size: 2.4rem;
    color: white;
    margin: 20px 0 0 20px;
    width: 190px;
`
const CardText = styled.p`
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 600;
    color: rgba(255, 255, 255, .8);
    align-self: end;
    margin: 0 0 20px 20px;
`

const Card = props => (
    <CardGroup image={props.image}>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.text}</CardText>
    </CardGroup>
)

export default Card
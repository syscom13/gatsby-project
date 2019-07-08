import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`
const Text = styled.p`
    font-size: 2.4rem;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto 20px;
    text-align: center;
`
const Button = styled.button`
    background: linear-gradient(104.74deg, #4B26FF 0%, #B01EFF 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 2.4rem;
    justify-self: center;
    outline: none;
    transition: all .8s cubic-bezier(.2, .8, .2, 1);
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.35);
    }
`
const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    grid-gap: 10px;
`
const Copyright = styled.div`
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
    line-height: 1.4;
`

const Footer = ({data, children}) => (
    <FooterGroup>
        <Text>Tweet "Prototype and build apps with React and Swift."</Text>
        <Button>Tweet</Button>
        <LinkGroup>
            {data.allContentfulLink.edges.map(edge => (
                <a href={edge.node.url}>{edge.node.title}</a>
            ))}
        </LinkGroup>
        <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer

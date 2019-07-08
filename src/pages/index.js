import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'

const SectionCaption = styled.p`
  text-align: center;
  color: #94A4BA;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 2rem;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 40px auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  padding: 0 40px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br/> design and code <span className="highlight">modern apps</span></h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50"/>
          <img src={require('../images/logo-figma.png')} width="50"/>
          <img src={require('../images/logo-invision.png')} width="50"/>
          <img src={require('../images/logo-framer.png')} width="50"/>
          <img src={require('../images/logo-react.png')} width="50"/>
          <img src={require('../images/logo-swift.png')} width="50"/>
        </div>
        <Wave />
      </div>
    </div>
    <div className="Action">
      <Link to="/page-2/" className="btn">Try for free</Link>
      <p className="ActionSub">Get 7 days free trial</p>
      <p className="ActionText">Then, it's $9 per month, billed annually. Cancel anytime. No soul required. Free upgrade from version 2.</p>
    </div>
    <div className="Cards">
      <h2>12 courses, more coming.</h2>
      <div className="CardGroup">
        <Card 
          title="Design System with Figma"
          text="10 sections"
          image={require('../images/wallpaper1.jpg')}
        />
        <Card 
          title="React for designers"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card 
          title="Video Editing with Screenflow"
          text="6 sections"
          image={require('../images/wallpaper3.jpg')}
        />
        <Card 
          title="Sound Design with Cubase"
          text="6 sections"
          image={require('../images/wallpaper4.jpg')}
        />
        <Card 
          title="Build an ARkit 2 app"
          text="10 sections"
          image={require('../images/wallpaper5.jpg')}
        />
        <Card 
          title="Motion Design in After Effects"
          text="8 sections"
          image={require('../images/wallpaper6.jpg')}
        />
        <Card 
          title="Create a Sketch plugin"
          text="7 sections"
          image={require('../images/wallpaper7.jpg')}
        />
        <Card 
          title="Create a Spritekit game"
          text="10 sections"
          image={require('../images/wallpaper8.jpg')}
        />
        <Card 
          title="Swift Advanced"
          text="10 sections"
          image={require('../images/wallpaper9.jpg')}
        />
        <Card 
          title="Learn Swift"
          text="10 sections"
          image={require('../images/wallpaper10.jpg')}
        />
        <Card 
          title="Learn Sketch"
          text="10 sections"
          image={require('../images/wallpaper11.jpg')}
        />
        <Card 
          title="Learn iOS Design"
          text="10 sections"
          image={require('../images/wallpaper12.jpg')}
        />
      </div>
    </div>
    <Section 
      image={require('../images/wallpaper-large.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site on Netlify."
    />
    <SectionCaption>12 courses - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell
          title={cell.title}
          image={cell.image} />
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage
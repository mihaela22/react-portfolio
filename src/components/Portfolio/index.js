import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import portfolioDataProjects from '../../data/portfolio.json'
import portfolioDataReact from '../../data/portfolioReact.json'
import './index.scss'
import RenderPortfolio from './RenderPortfolio'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <RenderPortfolio
          data={portfolioDataProjects.portfolio}
          title="Projects I worked on"
          hasGithub={false}
        />
        <RenderPortfolio
          data={portfolioDataReact.portfolio}
          title="React.js & Node.js course projects"
          hasGithub={true}
        />
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Portfolio

import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import portfolioDataProjects from '../../data/portfolio.json'
import portfolioDataReact from '../../data/portfolioReact.json'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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

  const renderPortfolio = (portfolio, title, hasGithub) => {
    return (
      <>
        <h2>{title}</h2>
        <div className="images-container">
          {portfolio.map((port, idx) => {
            return (
              <div key={idx} className="image-card">
                <img
                  src={port.cover}
                  className="portfolio-image"
                  alt="portfolio"
                />
                <div className="content">
                  <p className="title">{port.title}</p>
                  <h4 className="description">{port.description}</h4>
                  <button className="btn" onClick={() => window.open(port.url)}>
                    View
                  </button>
                  {hasGithub && (
                    <button
                      className="btn"
                      onClick={() => window.open(port.githubUrl)}
                    >
                      <FontAwesomeIcon icon={faGithub} color="#ffffff" />
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        <h2></h2>
      </>
    )
  }

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
        <div>
          {renderPortfolio(
            portfolioDataProjects.portfolio,
            'Projects I worked on',
            false
          )}
        </div>
        <div>
          {renderPortfolio(
            portfolioDataReact.portfolio,
            'React.js & Node.js course projects',
            true
          )}
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Portfolio

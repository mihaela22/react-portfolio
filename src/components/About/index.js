import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Typewriter } from 'react-simple-typewriter'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [typewriter, setTypwriter] = useState(false)

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const handleDone = () => {
    setTypwriter(true)
  }

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          {/* <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1> */}
          <h1>
            {' '}
            <Typewriter
              words={['', 'About me']}
              cursor={!typewriter}
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              // onType={handleType}
            />
          </h1>

          <p>
            I am a creative perfectionist with a passion for front-end. I am
            excited to bring my skills and creativity to a company where I can
            can continue to grow my skills and develop beautiful, innovative and
            user-friendly interfaces.
          </p>
          <p align="LEFT">
            I am enthusiastic about joining an ambitious team that leverages the
            latest technologies to tackle interesting projects.
          </p>
          <p>
            When I'm not coding, you can find me exploring the great outdoors
            with my camera in hand.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default About

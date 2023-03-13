import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
//import { Typewriter } from 'react-simple-typewriter'
import './index.scss'
import Logo from './Logo'

const Home = (props) => {
  // const [firstLine, setFirstLine] = useState(false)

  // const [secondLine1, setSecondLine1] = useState(false)
  // const [secondLine2, setSecondLine2] = useState(false)
  // const [thirdLine, setThirdLine] = useState(false)
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 'h', 'a', 'e', 'l', 'a']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])
  // const handleDone = (num) => {
  //   console.log(num)
  //   if (num === 1) {
  //     setFirstLine(true)
  //     console.log('first: ' + firstLine)
  //   }
  //   if (num === 2) {
  //     setSecondLine1(true)
  //     console.log('second1: ' + secondLine1)
  //   }
  //   if (num === 3) {
  //     console.log('second2: ' + secondLine2)
  //     setSecondLine2(true)
  //   }
  // }

  // const texts = [
  //   ['', 'Hi,'],
  //   ['', "I'm"],
  //   ['', 'ihaela'],
  //   ['', 'web developer.'],
  // ]

  // const [currentTextIndex, setCurrentTextIndex] = useState(0)
  // const [showNextTypewriter1, setShowNextTypewriter1] = useState(false)
  // const [showNextTypewriter2, setShowNextTypewriter2] = useState(false)
  // const [showNextTypewriter3, setShowNextTypewriter3] = useState(false)
  // const [showNextTypewriter4, setShowNextTypewriter4] = useState(false)

  // useEffect(() => {
  //   console.log(currentTextIndex)
  //   if (currentTextIndex === 1) {
  //     console.log('test')
  //     setTimeout(() => {
  //       setShowNextTypewriter2(true)
  //       setCurrentTextIndex((prevTextIndex) => {
  //         return 2
  //       })
  //     }, 1000)
  //   } // Wait before showing next typewriter
  //   else if (currentTextIndex === 2) {
  //     console.log('test')
  //     setTimeout(() => {
  //       setShowNextTypewriter3(true)
  //       setCurrentTextIndex((prevTextIndex) => {
  //         return 3
  //       })
  //     }, 4000) // Wait before showing next typewriter
  //   } else if (currentTextIndex === 3) {
  //     console.log('test')
  //     setTimeout(() => {
  //       setShowNextTypewriter4(true)
  //     }, 4000) // Wait before showing next typewriter
  //   } else if (currentTextIndex < texts.length - 2) {
  //     console.log('ue2 ' + currentTextIndex)
  //     setTimeout(() => {
  //       setShowNextTypewriter1(true)
  //       setCurrentTextIndex((prevTextIndex) => {
  //         return 1
  //       })
  //     }, 4000)
  //   }
  // }, [currentTextIndex])

  // const handleTypewriter1Complete = () => {
  //   console.log('f1' + currentTextIndex)
  //   if (currentTextIndex < texts.length - 2) {
  //     setCurrentTextIndex((prevTextIndex) => {
  //       return prevTextIndex + 1
  //     })
  //     setShowNextTypewriter1(true)
  //   }
  // }

  // const handleTypewriter2Complete = () => {
  //   console.log('f2' + currentTextIndex)
  //   if (currentTextIndex < texts.length - 1) {
  //     setCurrentTextIndex((prevTextIndex) => {
  //       return prevTextIndex + 1
  //     })
  //     setShowNextTypewriter2(false)
  //   }
  // }
  return (
    <>
      <div onLoad={props.onLoad} className="container home-page">
        <div className="text-zone">
          {/* <h1>
            <Typewriter
              words={texts[currentTextIndex]}
              loop={1}
              cursor={!showNextTypewriter1}
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={10}
              delaySpeed={30}
              onComplete={handleTypewriter1Complete}
            />
            <br />
            {showNextTypewriter1 && (
              <Typewriter
                words={texts[currentTextIndex]}
                loop={1}
                cursor={!showNextTypewriter2}
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={30}
                onComplete={handleTypewriter2Complete}
              />
            )}
            {showNextTypewriter2 && (
              <>
                <img src={LogoTitle} alt="developer" />
                <Typewriter
                  words={texts[currentTextIndex]}
                  loop={1}
                  cursor={!showNextTypewriter3}
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={30}
                />
              </>
            )}
            {showNextTypewriter3 && (
              <>
                <br />
                <Typewriter
                  words={texts[currentTextIndex]}
                  loop={1}
                  cursor={!showNextTypewriter4}
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={30}
                />
              </>
            )}
          </h1> */}

          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />

            <span className={`${letterClass} _13`}>I</span>

            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer | Javascript | PHP | Magento | Python</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Home

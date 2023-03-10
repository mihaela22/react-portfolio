import { useState } from 'react'
import Loader from 'react-loaders'
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
//import AnimatedLetters from '../AnimatedLetters'
// import dronVideo from '../../assets/video/DJI_0499.mp4'
import './index.scss'
import { Player } from 'video-react'
import { Typewriter } from 'react-simple-typewriter'

const Contact = () => {
  //const [letterClass, setLetterClass] = useState('text-animate')
  const [typewriter, setTypwriter] = useState(false)
  const form = useRef()
  // useEffect(() => {
  //   let timeoutId = setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)

  //   return () => {
  //     clearTimeout(timeoutId)
  //   }
  // }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_1fwdyz5',
        'template_sf5a8yv',
        form.current,
        'TvEp-29-WqSUmULQQ'
      )
      .then(
        () => {
          //alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  const handleDone = () => {
    setTypwriter(true)
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          {/* <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1> */}
          <h1>
            {' '}
            <Typewriter
              words={['', 'Contact me']}
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
            Looking for a passionate and hardworking junior to join your team?
            Look no further!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Mihaela Staraj,
          <br />
          Croatia,
          <br />
          Staraji 43, 52426 Lupoglav <br />
          <br />
          <span>mihaela.staraj@gmail.com</span>
        </div>
        <div className="map-wrap">
          {/* <MapContainer center={[45.34, 14.1158]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[45.34, 14.1158]}>
              <Popup>
                Mihaela lives here, come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer> */}
          <Player
            autoPlay={true}
            muted={true}
            loop
            // playsInline
            controls={false}
            height={100}
            src="https://homothermal-particl.000webhostapp.com/images/DJI_0499.mp4"
          />
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Contact

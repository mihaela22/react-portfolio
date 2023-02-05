import './projectCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectCard = (props) => {
  return (
    <div key={props.idx} className="image-card">
      <img src={props.port.cover} className="portfolio-image" alt="portfolio" />
      <div className="content">
        <p className="title">{props.port.title}</p>
        <h4 className="description">{props.port.description}</h4>
        <button className="btn" onClick={() => window.open(props.port.url)}>
          View
        </button>
        {props.hasGithub && (
          <button
            className="btn"
            onClick={() => window.open(props.port.githubUrl)}
          >
            <FontAwesomeIcon icon={faGithub} color="#ffffff" />
          </button>
        )}
      </div>
    </div>
  )
}

export default ProjectCard

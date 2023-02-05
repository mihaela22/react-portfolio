import './renderPortfolio.scss'
import ProjectCard from './ProjectCard'

const RenderPortfolio = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <div className="images-container">
        {props.data.map((port, idx) => {
          return (
            <ProjectCard
              key={idx}
              idx={idx}
              port={port}
              hasGithub={props.hasGithub}
            />
          )
        })}
      </div>
    </div>
  )
}

export default RenderPortfolio

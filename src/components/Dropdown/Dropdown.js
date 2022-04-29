import './dropdown.css'
import { useState } from 'react'
import chevron from '../../assets/img/chevron.svg'

const Dropdown = ({ props, title }) => {
  const [toggle, setToggle] = useState(false)

  const toggleState = () => {
    setToggle(!toggle)
  }

  return (
    <div className="dropdown" onClick={toggleState}>
      <div className="dropdown-header">
        <h2 className="dropdown-title">{title}</h2>
        <img
          className={toggle ? 'chevron' : 'chevron-ouvert'}
          src={chevron}
          alt="icone de chevron"
        />
      </div>

      <div
        className={
          toggle
            ? 'dropdown-text dropdown-text-open'
            : 'dropdown-text dropdown-text-close'
        }
      >
        {title === 'Equipements' ? (
          <ul>
            {props.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
        ) : (
          <p>{props}</p>
        )}
      </div>
    </div>
  )
}

export default Dropdown

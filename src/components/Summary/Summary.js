import React from 'react';
import "./summary.css"
import chevron from '../../assets/img/chevron.svg'

const Summary = ({props, title}) => {
    return (
        <details>
  <summary>{title}<img src={chevron} alt="chevron" /></summary>
  {title === 'Equipements' ? (
          <ul>
            {props.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
        ) : (
          <p>{props}</p>
        )}
</details>
    );
};

export default Summary;
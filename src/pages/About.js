import React from 'react'
import Summary from '../components/Summary/Summary'
import HeadSectionSecondary from '../components/HeadSectionSecondary/HeadSectionSecondary'

const aboutInformations = [
  {
    title: 'Fiabilité',
    body: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
  },
  {
    title: 'Respect',
    body: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    title: 'Service',
    body: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: 'Sécurité',
    body: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à lm'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

const About = () => {
  return (
    <div>
      <HeadSectionSecondary />
      <div className="dropdown-wrapper">
        {aboutInformations.map((info, index) => {
          return <Summary props={info.body} title={info.title} key={index} />
        })}
      </div>
    </div>
  )
}

export default About

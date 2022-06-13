import Banner from '../../components/Banner'
import DropdownsWrapper from '../../components/DropdownsWrapper'
import '../../styles/About.css'


//Les dropdowns sont composés de 2 sous-parties : un titre et un contenu
//On renseigne alors les tableaux : dropdownTitles qui contient les titres, dropdownTexts qui contient le texte
const dropdownTitles = ["Fiabilité", "Respect", "Service", "Sécurité"]
const dropdownTexts = [
  "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
]

function About() {
    return (
      <div className='about__container'>
        <Banner type='about' />
        <DropdownsWrapper 
          dropdownTitles={dropdownTitles}
          dropdownTexts={dropdownTexts}
          type='about'
        />
      </div>
    );
  }
  
  export default About;
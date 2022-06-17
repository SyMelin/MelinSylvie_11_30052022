import Banner from '../../components/Banner'
import DropdownsWrapper from '../../components/DropdownsWrapper'
import aboutDropdownsContent from '../../utils/constants/aboutDropdownsContent'
import '../../styles/About.css'

//Les dropdowns sont composés de 2 sous-parties : une partie supérieur qui contient le titre et une partie inférieure qui contient du texte
//On renseigne alors les tableaux : dropdownTitles qui contient les titres, dropdownTexts qui contient le texte

const dropdownTitles = Object.keys(aboutDropdownsContent)
const dropdownTexts = Object.values(aboutDropdownsContent)

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
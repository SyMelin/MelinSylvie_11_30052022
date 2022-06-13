import Dropdown from "../Dropdown"
import '../../styles/DropdownsWrapper.css'

function DropdownsWrapper({ dropdownTitles, dropdownTexts, type}) {
    
    let dropdownsList=[]

    //On crée les dropdowns de la page
    if (dropdownTitles.length === dropdownTexts.length) {
        //A chaque titre, on crée un objet de type ' const dropdownContent= {title:"", text:""}  ' qui regroupe le titre dropdown et son texte
        //Tous les objects dropdownContent sont récupérés dans le tableau dropdownList
        dropdownsList = dropdownTitles.map((title, index) => { return { title: title, text: dropdownTexts[index] } })
    } else {
        console.log('error: lengths of dropdownTitles and dropdownText should be equal')
    }
    
    return (
        <div className={`dropdowns__wrapper ${type}__dropdowns `}>
            {dropdownsList.map((dropdown, index) => (
            <Dropdown
                key={`${type}Dropdown--${index}`}
                title={dropdown.title}
                text={dropdown.text}
            />
            ))}
      </div>  
    )
}

export default DropdownsWrapper
import Dropdown from "../Dropdown"
import '../../styles/DropdownContainer.css'

function DropdownContainer({ dropdownTitles, dropdownTexts, type}) {
    
    let dropdownsList=[]

    //On crée les dropdowns de la page
    if (dropdownTitles.length === dropdownTexts.length) {
        //A chaque titre, on crée un objet de type ' const dropdownContent= {title:"", text:""}  ' qui regroupe le titre dropdown et son texte
        dropdownsList = dropdownTitles.map((title, index) => { return { title: title, text: dropdownTexts[index] } })
    } else {
        console.log('error: lenghts of dropdownTitles and dropdownText should be equal')
    }
    
    return (
        <div className={`dropdowns__container ${type}__dropdowns `}>
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

export default DropdownContainer
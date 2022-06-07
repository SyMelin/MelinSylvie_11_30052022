import Dropdown from "../Dropdown"
import '../../styles/DropdownContainer.css'

function DropdownContainer({ dropdownTitles, dropdownTexts, type}) {

    //Fonction qui crée un objet de type ' const dropdownContent= {title:"", text:""}  ' qui regroupe le titre dropdown et son text 
    function fillDropDownContent(index) {
        const dropdownFilled = { title: dropdownTitles[index], text: dropdownTexts[index]}
        return dropdownFilled
    }
  
    //On crée les dropdowns de la page
    const dropdownsList= dropdownTitles.map((title) => fillDropDownContent(dropdownTitles.indexOf(title)))
    //console.log(dropdownsList)

    return (
        <div className= {`dropdowns__container ${type}__dropdowns `}>
            {dropdownsList.map((dropdown) => (
            <Dropdown
                key={`${type}Dropdown--${dropdown.index}`}
                title={dropdown.title}
                text={dropdown.text}
            />
            ))}
      </div>  
    )
}

export default DropdownContainer
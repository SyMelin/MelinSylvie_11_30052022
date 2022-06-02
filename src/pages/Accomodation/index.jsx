import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Dropdown from '../../components/Dropdown'
import data from '../../data/accomodationsList.json'
import '../../styles/Accomodation.css'

const dropdownTitles = ["Description", "Équipements"]


function Accomodation() {
    const AccomodationsList = data
    const { accomodationID } = useParams()
   // console.log( accomodationID)
    const accomodationData = AccomodationsList.find(accomodation => accomodation.id === accomodationID)
  //  console.log(accomodationData)

    const dropdownTexts= [accomodationData.description, accomodationData.equipments]
    const dropdownContent= {title:"", text:""}

    function fillDropDownContent(index) {
    const dropdownFilled = { title: dropdownTitles[index], text: dropdownTexts[index]}
    return dropdownFilled
    }
    const dropdownsList= dropdownTitles.map((title) => fillDropDownContent(dropdownTitles.indexOf(title)))
    console.log(dropdownsList)


    return (
        <div className='accomodation__wrapper'>
            <div className='accomodation__carousel'>
                CAROUSSEL
            </div>
            <div className='accomodation__mainInfo'>
                <div className='mainInfo__top'>
                    <div className='accomodation'>
                        <h1 className="accomodation__title">{accomodationData.title}</h1>
                        <p className='accomodation__location'>{accomodationData.location}</p>
                    </div>
                    <div className='host'>
                        <p className='host__name'>{accomodationData.host.name}</p>
                        <img className='host__picture' src={accomodationData.host.picture} alt="" />
                    </div>
                </div>
                <div className='mainInfo__bottom'>
                    <div className='accomodation__tags'>TAGS</div>
                    <div className='accomodation__stars'>STARS</div>
                </div>
            </div>
            <div className='accomodation__dropdowns'>
                {dropdownsList.map((dropdown) => (
                    <Dropdown
                    key={`dropdown--${dropdown.index}`}
                    title={dropdown.title}
                    text={dropdown.text}
                    />
                ))}
            </div>
        </div>
    )

}

export default Accomodation
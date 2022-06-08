import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Gallery from '../../components/Gallery'
import Stars  from '../../components/Stars'
import DropdownContainer from '../../components/DropdownContainer'
//import data from '../../data/accomodationsList.json'
import '../../styles/Accomodation.css'

function Accomodation() {
    const {accomodationID}  = useParams()
   // console.log( accomodationID)
    //const accomodationsList = data
    //const accomodationData = accomodationsList.find(accomodation => accomodation.id === accomodationID)
    //console.log(accomodationData)

    const[accomodationData, setAccomodationData] = useState({})
    
    const params = new URLSearchParams({id:`${accomodationID}`})
    //const url = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json?' + new URLSearchParams({id:`${accomodationID}`}).toString()
    //'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json?id=c67ab8a7' 
    //const url = `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json?${ params.toString() }`
    const url = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'

    useEffect(() => {
        async function fetchAccomodation() {
          try {
            const response =  await fetch(url)
            console.log('res', await response)
            const accomodations = await response.json()
            console.log('accomodations', accomodations)
          //  const {accomodationData} = 
            console.log(accomodationData)
           // setAccomodationData(accomodations.find(accomodation => accomodation.id === accomodationID))
            console.log('bonjour', accomodationData)
          } catch (error) {
            console.log(error)
          } finally {
            console.log('hello')

          }
        }
        fetchAccomodation()
        })
    

    //On sépare le prénom du nom pour pouvoir afficher l'ensemble sur 2 lignes
   // const hostName = accomodationData.host.name.split(" ")
   
    //Les dropdowns sont composés de 2 sous-parties: un titre et un contenu
    //On renseigne alors les tableaux: dropdownTitles qui contient les titres, dropdownTexts qui contient le texte
   // const dropdownTitles = ["Description", "Équipements"]
   // const dropdownTexts= [accomodationData.description, accomodationData.equipments]

    return (
        <span>HELLO</span>
    )
/*
    return (
       <div className='accomodation__container'>
            <Gallery
                pics={accomodationData.pictures}
                length={accomodationData.pictures.length}
                accId={accomodationID}
            />
            <div className='accomodation__info'>
                <div className='info__left'>
                    <div className='accomodation__data'>
                        <h1 className="accomodation__title">{accomodationData.title}</h1>
                        <p className='accomodation__location'>{accomodationData.location}</p>
                        <div className='accomodation__tags'>
                            {accomodationData.tags.map((tag) => (
                                <div className='tag'>{tag}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='info__right'>
                    <div className='host__data'>
                        <p className='host__name'>{hostName[0]}<br />{hostName[1]}</p>
                        <img className='host__picture' src={accomodationData.host.picture} alt="" />
                    </div>
                    <Stars
                        rating={accomodationData.rating}
                        arrayLength='5'
                    />
                </div>
            </div>
            <DropdownContainer 
                dropdownTitles={dropdownTitles}
                dropdownTexts={dropdownTexts}
                type='accomodation'
            />
        </div>
    )
*/

}

export default Accomodation
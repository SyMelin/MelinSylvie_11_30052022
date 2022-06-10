import { useParams, useNavigate } from 'react-router-dom'
import Gallery from '../../components/Gallery'
import Stars  from '../../components/Stars'
import DropdownContainer from '../../components/DropdownContainer'
import { useFetch } from '../../utils/hooks'
import '../../styles/Accomodation.css'

function Accomodation() {

    const { data, isLoading, error } = useFetch ('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
    const {accomodationId}  = useParams()
    const navigate = useNavigate()


    if (error) {
        return navigate("/*", {replace:true})
    }

    if (isLoading === false) {
       // console.log(data)
        const accomodationsList = [...data]
       // console.log('acc', accomodationsList)
        const accomodationData = accomodationsList.find(accomodation => accomodation.id === accomodationId)
       // console.log(accomodationData)

        //On sépare le prénom du nom pour pouvoir afficher l'ensemble sur 2 lignes
        const hostName = accomodationData.host.name.split(" ")

        //Les dropdowns sont composés de 2 sous-parties: un titre et un contenu
        //On renseigne alors les tableaux: dropdownTitles qui contient les titres, dropdownTexts qui contient le texte
        const dropdownTitles = ["Description", "Équipements"]
        const dropdownTexts= [accomodationData.description, accomodationData.equipments] //Nb: description est une chaîne de caractère, equipments est un tableau

        return (
            <div className='accomodation__container'>
            <Gallery
                pics={accomodationData.pictures}
                length={accomodationData.pictures.length}
                accId={accomodationId}
            />
            <div className='accomodation__info'>
                <div className='info__left'>
                    <div className='accomodation__data'>
                        <h1 className="accomodation__title">{accomodationData.title}</h1>
                        <p className='accomodation__location'>{accomodationData.location}</p>
                        <div className='accomodation__tags'>
                            {accomodationData.tags.map((tag, index) => (
                                <div key={`tag--${index}`} className='tag'>{tag}</div>
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
    }
}

export default Accomodation
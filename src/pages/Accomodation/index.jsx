import '../../styles/Location.css'

function Accomodation({title, location}) {
    return (
        <div className='accomodation__wrapper'>
            <div className='accomodation__carousel'>
                CAROUSSEL
            </div>
            <div className='accomodation__mainInfo'>
                <div className='mainInfo__top'>
                    <div className='accomodation'>
                        <h1 className="accomodation__title">{title}TITLE</h1>
                        <p className='accomodation__location'>{location}LOCATION</p>
                    </div>
                    <div className='host'>
                        <p className='host__name'>NAME</p>
                        <img className='host__picture' src="" alt="" />
                    </div>
                </div>
                <div className='mainInfo__bottom'>
                    <div className='accomodation__tags'>TAGS</div>
                    <div className='accomodation__stars'>STARS</div>
                </div>
                
            </div>
            <div className='accomodation__dropdowns'>DROPDOWNS</div>
        </div>
    )

}

export default Accomodation
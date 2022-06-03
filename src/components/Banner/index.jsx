import bannerHome from '../../assets/bannerHome.png'
import bannerAbout from '../../assets/bannerAbout.png'
import '../../styles/Banner.css'

function Banner({type}) {
    return (
        <div className='banner__container'>
            { type === 'home' ?
                <div
                    className='banner__container'
                    style={{backgroundImage: {bannerHome}}}
                >
                    <span className='banner__filter'></span>
                    <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
                </div>
                : type === 'about' ?
                    <div
                        className='banner__container'
                        style={{backgroundImage: {bannerAbout}}}
                    >
                        <span className='banner__filter'></span>
                    </div>
                : null
            }
        </div>
    )
}

export default Banner


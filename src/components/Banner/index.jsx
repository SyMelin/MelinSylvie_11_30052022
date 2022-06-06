import bannerHome from '../../assets/bannerHome.png'
import bannerAbout from '../../assets/bannerAbout.png'
import '../../styles/Banner.css'
import React from 'react'

function Banner({type}) {
    return (
        <React.Fragment>
            { type === 'home' ?
            <div className='banner__container'>
                <img
                    className='banner__img'
                    src={bannerHome}
                    alt=''
                />
                <span className='banner__filter'></span>
                <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
            </div>      
        : type === 'about' ?
            <div className='banner__container'>
                <img
                    className='banner__img'
                    src={bannerAbout}
                    alt=''
                />
                <span className='banner__filter'></span>
            </div>
        : null
        }
        </React.Fragment>  
    )
}

export default Banner


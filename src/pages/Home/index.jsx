import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import data from '../../data/accomodationsList.json'
import '../../styles/Home.css'

function Home() {
  const AccomodationsList = data

  return (
    <div className='home__container'>
      <Banner type='home'/>
      <div className='cards__container'>
        {AccomodationsList.map((accomodation) => (
        <Card
          key={accomodation.id}
          id={accomodation.id}
          title={accomodation.title}
          cover={accomodation.cover}
        />
        ))}
      </div>    
    </div>
  );
}

export default Home;
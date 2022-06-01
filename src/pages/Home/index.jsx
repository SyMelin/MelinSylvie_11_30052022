import { useState, useEffect } from 'react';
import Card from '../../components/Card'
import '../../styles/Home.css'
import data from '../../data/locationsList.json'

function Home() {
  const locationsList = data

  return (
    <div>
      <div className='home__banner'>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className='cards__container'>
        {locationsList.map((location) => (
        <Card
          key={location.id}
          title={location.title}
          cover={location.cover}
        />
        ))}
      </div>    
    </div>
  );
}

export default Home;
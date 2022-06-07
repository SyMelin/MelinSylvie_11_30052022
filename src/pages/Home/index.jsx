import { useState, useEffect } from 'react';
import Banner from '../../components/Banner'
import Card from '../../components/Card'
//import data from '../../data/accomodationsList.json'
import '../../styles/Home.css'

function Home() {
  // const accomodationsList = data
  const[accomodationsList, setAccomodationsList] = useState([])

  useEffect(() => {
    async function fetchAccomodations() {
      try {
        const response =  await fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
        setAccomodationsList(await response.json())
      } catch (error) {
        console.log(error)
      } 
    }
    fetchAccomodations()
    }, [])

  return (
    <div className='home__container'>
      <Banner type='home'/>
      <div className='cards__container'>
        {accomodationsList.map((accomodation) => (
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
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import { useFetch } from '../../utils/hooks'
import '../../styles/Home.css'

function Home() {
  const corsProxy = 'https://api.allorigins.win/raw?url=' // CORS proxy to avoid CORS policy
  const dataUrl = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json' // URL of the data to fetch

  const { data, isLoading, error } = useFetch(corsProxy + dataUrl);
  
  const accomodationsList = data
  const navigate = useNavigate()

  if (error) {
    return navigate("/*", {replace:true})
  }

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
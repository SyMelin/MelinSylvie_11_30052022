import { Navigate } from 'react-router-dom'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
//import Error from '../../components/Error'
import { useFetch } from '../../utils/hooks'
import '../../styles/Home.css'

function Home() {

  const { data, isLoading, error } = useFetch ('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
  const accomodationsList = data

  if (error) {
    return <Navigate to="*" replace="true" />
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
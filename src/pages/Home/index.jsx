import Card from '../../components/Card'
import '../../styles/Home.css'

const locations = [
  {
    id:'123',
    title:'Location 1',
    cover:'',
    pictures:[],
    desciption: '',
    host:{},
    rating:'',
    location:'',
    equipements:[],
    tags:[],
  },
  {
    id:'456',
    title:'Location 2',
    cover:'',
    pictures:[],
    desciption: '',
    host:{},
    rating:'',
    location:'',
    equipements:[],
    tags:[],
  },
  {
    id:'789',
    title:'Location 3',
    cover:'',
    pictures:[],
    desciption: '',
    host:{},
    rating:'',
    location:'',
    equipements:[],
    tags:[],
  }
]


function Home() {
  return (
    <div>
      <div className='home__banner'>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      {locations.map((location) => (
        <Card
          key={location.id}
          title={location.title}
          cover={location.cover}
        />
      ))}
    </div>
  );
}

export default Home;

import './App.css';
import React,{useState} from 'react';
import AddMovie from './component/AddMovie';
import MovieList from './component/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './component/Filter';



function App() {

  const [TitleFilter, setTitleFilter] = useState('')
  const [RateFilter, setRateFilter] = useState(1)

  const [movie,setMovie]=useState([
    {
    title:"Batman",
    rate:5, 
    posterUrl:'https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg',
    description:"Justice Society of America, All-Star Squadron. Bruce Wayne, alias Batman, est un super-héros de fiction appartenant à l'univers de DC Comics. ... Malgré sa réputation de héros solitaire, il sait s'entourer d'alliés, comme Robin, son majordome Alfred Pennyworth ou encore le commissaire de police James Gordon."
  },
  {
    title:'La la Land',
    rate: 3,
    posterUrl:'https://www.movies.ch/db_data/movies/lalaland/artwrk/ki_l/510_01_-_OV_705x1015_4f.jpg',
    description:' is a 2016 American musical romantic drama film written and directed by Damien Chazelle. It stars Ryan Gosling as a jazz pianist and Emma Stone as an aspiring actress, who meet and fall in love while pursuing their dreams in Los Angeles.',
  },
])

const handleAdd=(newmovie)=>{
  setMovie([...movie,newmovie]);
}

  return (
    <div className='tab' className="App">
      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} RateFilter={RateFilter}  />
      <AddMovie handleAdd={handleAdd} />
      <MovieList  movie={movie} TitleFilter={TitleFilter} RateFilter={RateFilter}/>

    </div>
  );
}


export default App;

/* import logo from './logo.svg'; */
import './App.css';
import Countries from './component/countries/Countries';



function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}



/* function Country() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);

  return (
    <div>
      <h2>travel all the world</h2>
      <h4>countries all: {countries.length}</h4>
      {
        countries.map(country => <Countrys name={country.name.common} capital={country.capital} img={country.flag}></Countrys>)
      }
    </div>
  )
} */
/* 
function Countrys(props) {
  return (
    <div style={{
      backgroundColor: 'skyblue',
      border: '2px solid red',
      margin: '50px',
      borderRadius:'20px'
    }}>
      <h2>name: {props.name}</h2>
      <h3>capital: {props.capital}</h3>
      <img src={props.flag} alt="" />
    </div>
  )
} */

export default App;

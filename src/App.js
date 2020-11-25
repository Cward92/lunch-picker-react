import logo from './logo.svg';
import './App.css';

function App() {

  async function onClick(){
    let apiCall = "https://maps.googleapis.com/maps/api/place/search/json?location=38.042180,-84.492570&radius=1000&sensor=false&key=AIzaSyBwnOFv-P4SSxgEN0nBAJUebc_FWHgub7A&types=restaurant";
    let data = await axios.get(apiCall)
                    .then(function (response){
                      return response.data.results;
                    }).catch(function (error){
                      console.log('failed', error);
                    });
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Lunch Picker</h1>
      <button onClick={onClick}>Test</button>
      
    </div>
  );

}


export default App;

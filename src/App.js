
import './App.css';

const api = {
  key: "7581717087854fe3b843ddc1d53c6a1b",
  base: "https://api.openweathermap.org/data/2.5"
}
function App() {
  return (
    <div className="App">
     <main>
       <div className='search-box'>
         <input
          type="text"
          className='search-bar'
          placeholder='Digite a cidade...'         
         />
         
        
       </div>
     </main>
    </div>
  );
}

export default App;

import './App.css';
import Personelcard from './componets/personelcard';



function App() {
  return (
    <div className="App">
      <Personelcard firstName="Jane" lastName="Doe" age={ 45 } hairColor="Black" /> 
      <Personelcard firstName="John" lastName="Smith" age={ 88 } hairColor="Brown" /> 
      <Personelcard firstName="Fillmore" lastName="Millard" age={ 50 } hairColor="Brown" /> 
      <Personelcard firstName="Maria" lastName="Smith" age={ 62 } hairColor="Brown" /> 
    </div>
  );
}






export default App;

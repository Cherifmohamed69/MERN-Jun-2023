import PersonCard from "./components/PersonCard";

function App() {
  const all_users =[
    {"first_name":"Doe","last_name":"jane ","age":"45", "hair_color":"black"},
    {"first_name":"Smith","last_name":"john ", "age":"88","hair_color": "brown"},
    {"first_name":"fillmore","last_name":"millard ", "age":"50","hair_color": "brown"},
    {"first_name":"smith","last_name":"maria ", "age":"62","hair_color": "brown"}
]
    
    return (
    <div className="App">
      {all_users.map(i => {return <PersonCard first_name={i.first_name} last_name={i.last_name} age={i.age} hair_color={i.hair_color}  />
      })}
     </div>
  );
}

export default App;

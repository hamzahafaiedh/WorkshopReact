import logo from './logo.svg';
import './App.css';
import Welcome from './componants/Welcome';
import Products from './componants/Products';

function App() {
  
 /* let name='hamza'
  let element=<h1>{name}</h1>
  const etudiant={
    prenom:'hamza',
    nom:'hafaiedh'
  }
  function getEtudiant(etudiant){
    return etudiant;
  }
  function getTab(){
  const tab=[
    { nom: 'hamza', age: 23, id: 1 },
    { nom: 'oussema', age: 23, id: 2 }
  ]
  return tab.map((x)=>{<li key={x.id}>{x.nom}</li>})
}
const style=
{
  color:'red',
  fontSize: "25px"
}
var nom=<p>hamza</p>
var prenom=<p>hafaiedh</p>
const image=<img src="logo192.png" width="100px" height="100px"></img>

  return (
    <div className="App">
      <Welcome name='salah'></Welcome>
      {element}
      <p>{1+1}</p>
      <div>
        <h1>bonjour {etudiant.nom} {etudiant.prenom}</h1>
      </div>
      <h1>bonjour {getEtudiant('nour')}</h1>
      <p>{getTab()}</p>
      <p style={style}> hello </p>
      <div>
        {nom}
        {prenom}
        {image}
      </div>
    </div>
  );*/
  return(
    <Products></Products>
  )
}

export default App;
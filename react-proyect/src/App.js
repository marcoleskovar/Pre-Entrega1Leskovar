import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/itemListContainer/itemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer bienvenida={"Bienvenido!"}/>
    </div>
  );
}

export default App;

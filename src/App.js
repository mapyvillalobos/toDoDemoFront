import "./App.css";

//importar rutas a utilizar
import routes from "./config/routes";
import {Routes, Route} from 'react-router-dom'; 


function App() {

  return (
    <div className="App">
<Routes>
  {routes().map(({path, element}, index_route)=> <Route key = {path} {...{path, element}}  />)}
</Routes>
    </div>
  );
}

export default App;

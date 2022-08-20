import { useState, useEffect } from "react";
import "./App.css";

//importar rutas a utilizar
import routes from "./config/routes";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "./components";
import { logoutWs } from "./services/auth-ws";
import { Modal } from "antd";
//importar los componentes o funciones globales

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //funciones globales
  function authentication(user) {
    console.log("user", user);
    setUser(user);
  }

  function handleLogout() {
    Modal.confirm({
      title: "Cerrar sesión",
      content: "Estás seguro que deseas cerar sesión?",
      onOk() {
        //ejecutar el endpoint para hacer logout y borrar el usuario del state
        logoutWs().then((res) => {
          const { data, status, errorMessage } = res;
          if (status) {
            Modal.success({
              content: data.successMessage,
            });
            navigate("/");
            setUser(null);
          } else {
            alert(errorMessage);
          }
        });
      },
    });
  }
  return (
    <div className="App">
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        {routes({ user, handleLogout, authentication }).map(
          ({ path, element }, index_route) => (
            <Route key={path} {...{ path, element }} />
          )
        )}
      </Routes>
    </div>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componentes/Home";
import MenuPrivado from "./componentes/MenuPrivado";
import MenuPublico from "./componentes/MenuPublico";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Autor from "./componentes/telas/autor/Autor";
import Editora from "./componentes/telas/editora/Editora";
import Livro from "./componentes/telas/livro/Livro";
import Login from "./componentes/telas/login/Login";

const router = createBrowserRouter([
  {
    path : "/",
    element : <MenuPublico/>,
    children : [
      {
        index : true,
        element : <Home/>
      },
      {
        path : "login",
        element : <Login/>
      }           
    ]
  },
  {
    path : "/privado",
    element : <MenuPrivado/>,
    children : [
      {
        index : true,
        element : <Home/>
      },
      {
        path : "autores",
        element : <Autor/>
      },
      {
        path : "editoras",
        element : <Editora/>
      }
      ,
      {
        path : "livros",
        element : <Livro/>
      }          
    ]
  }  
])

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;

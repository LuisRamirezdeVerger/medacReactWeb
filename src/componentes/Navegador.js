//import "/Coding Stuff/reactWebMedac/medac-react-web/src/componentes/navegador"
import  "../componentes/Navegador.css"

const Navegador = () => {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/pagina1">Página 1</Link>
            </li>
            <li>
              <Link to="/pagina2">Página 2</Link>
            </li>
            <li>
              <Link to="/pagina3">Página 3</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/pagina1">
            <Pagina1 />
          </Route>
          <Route path="/pagina2">
            <Pagina2 />
          </Route>
          <Route path="/pagina3">
            <Pagina3 />
          </Route>
        </Switch>
      </Router>
    );
  }


export default Navegador;
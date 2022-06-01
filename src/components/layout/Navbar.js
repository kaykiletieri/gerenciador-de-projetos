import { Link } from "react-router-dom";

function Navbar() {
    return  <nav>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contato</Link>
                <Link to='/company'>Empresa</Link>
                <Link to='/new-project'>Novo Projeto</Link>
            </nav>
}

export default Navbar
import './styles.css';
import { ReactComponent as Logo} from './logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="main-navebar">
            <Logo />
            <Link to="/" className="logo-text" href="home">DS Delivery</Link>
        </nav>
    )
}

export default Navbar;
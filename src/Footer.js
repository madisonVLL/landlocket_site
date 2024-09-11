import "./App.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{width: "100%", bottom: "0"}}>
            <Link className="link" to="/Privacy">Privacy Policy</Link>
            <p>&copy; 2024 WebAlity LLC. All rights reserved.</p>
        </footer>
    )
}

export default Footer
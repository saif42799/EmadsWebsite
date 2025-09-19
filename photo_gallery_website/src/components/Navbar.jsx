import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <nav>

            <div className="logoDiv">
                <img className="logoImg" src="/images/emad_Logo.png" alt="Logo"></img>
            </div>

            <input type="checkbox" id="sidebar-active"></input>
            <label for="sidebar-active" className="open-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
            </label>

            <label id="overlay" for="sidebar-active"></label>

            <div className="links-contaainer">
                <label for="sidebar-active" className="close-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </label>

                <ul>
                    <li className="nav-Link">
                        <Link className="link" to="/" onClick={() => {
                            document.getElementById('sidebar-active').checked = false;
                        }}>
                            HOME
                        </Link>
                    </li>

                    <li className="nav-Link">
                        <Link className="link" to="/Gallery" onClick={() => {
                            document.getElementById('sidebar-active').checked = false;
                        }}>
                            GALLERY
                        </Link>
                    </li>

                    <li className="nav-Link">
                        <Link className="link" to="/Information" onClick={() => {
                            document.getElementById('sidebar-active').checked = false;
                        }}>
                            INFORMATION
                        </Link>
                    </li>
                </ul>

                <div className='animated-background'>

                </div>
            </div>

        </nav>
    );
}

export default Navbar
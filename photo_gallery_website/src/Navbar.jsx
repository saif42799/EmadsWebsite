
function Navbar() {

    return(
        <nav>
            <div className="logoDiv">
                <img className="logoImg" src="/images/emad_Logo.png" alt="Logo"></img>
            </div>
            
            <ul>
                <li><a className="navHoverEffect" href="#">HOME</a></li>
                <li><a className="navHoverEffect" href="#">GALLERY</a></li>
                <li><a className="navHoverEffect" href="#">INFORMATION</a></li>
            </ul>
        </nav>
    );
}

export default Navbar
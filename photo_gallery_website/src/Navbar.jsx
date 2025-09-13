
function Navbar() {

    function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
        sidebar.style.animation = 'slideIn 0.5s ease-out 0.5s 1 normal forwards'
   
    }

    function hideSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
        sidebar.style.animation = 'slideOut 0.5s ease-out 0.5s 1 normal forwards'
    }





    return(
        <nav>
            <div className="logoDiv">
                <img className="logoImg" src="/images/emad_Logo.png" alt="Logo"></img>
            </div>
            
            <ul className="sidebar">
                <li className="x-button" onClick={() => hideSidebar()}><a><svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <li id="homeMargin"><a className="navOnMoble" href="#">HOME</a></li>
                <li><a className="navOnMoble" href="#">GALLERY</a></li>
                <li><a className="navOnMoble" href="#">INFORMATION</a></li>
            </ul>

            <ul>
                <li className="hideOnMoble"><a className="navHoverEffect" href="#">HOME</a></li>
                <li className="hideOnMoble"><a className="navHoverEffect" href="#">GALLERY</a></li>
                <li className="hideOnMoble"><a className="navHoverEffect" href="#">INFORMATION</a></li>
                <li className="menu-button" onClick={() => showSidebar()}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
            </ul>

            <div className="bio">
                <div className="headDiv">
                    <img className="headImg" src="/images/emad_Head.png" alt="Head"></img>
                </div>

                <p id="bioName">EMAD SHAIKH</p>
                <p id="bioAdjective">26</p>
                <p id="bioAdjective">Designer</p>
                <p id="bioAdjective">New York</p>
            </div>

        </nav>
    );
}

export default Navbar
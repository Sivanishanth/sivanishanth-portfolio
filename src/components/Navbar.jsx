import '../styles/Navbar.css';

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <h1>SIVANISHANTH</h1>
            </div>
            <div className="nav-links">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                 <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}
function NavBarSection(){

    return (
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

            <h1 className="logo"><a href="index.html">AdamoProperties<span>.</span></a></h1>

            <nav id="navbar" className="navbar">
                <ul>
                <li><a className="nav-link scrollto" href="#about">About Us</a></li>
                <li><a className="nav-link scrollto" href="#contact">Contact Us</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

            </div>
        </header>
    )
}

export default NavBarSection
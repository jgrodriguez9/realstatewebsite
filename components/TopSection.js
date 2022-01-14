import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";


function TopSection(){

    return (
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
                <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
                <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
                <a href="#" className="instagram"><FaInstagram /></a>
            </div>
            </div>
        </section>
    )
}

export default TopSection
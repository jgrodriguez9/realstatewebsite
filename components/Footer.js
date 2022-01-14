function Footer(){

    return (
        <footer id="footer">

            <div className="footer-top">
            <div className="container">
                <div className="row">

                <div className="col-lg-3 col-md-6 footer-contact">
                    <h3>BizLand<span>.</span></h3>
                    <p>
                    A108 Adam Street <br />
                    New York, NY 535022<br />
                    United States <br /><br />
                    <strong>Phone:</strong> +1 5589 55488 55<br />
                    <strong>Email:</strong> info@example.com<br />
                    </p>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                    </ul>
                </div>

                </div>
            </div>
            </div>

            <div className="container py-4">
            <div className="copyright">
                &copy; Copyright <strong><span>BizLand</span></strong>. All Rights Reserved
            </div>
            <div className="credits">               
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
            </div>
        </footer>
    )

}

export default Footer
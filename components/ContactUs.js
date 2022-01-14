import { BiEnvelope,BiPhoneCall } from "react-icons/bi";

function ContactUs(){

    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Contact</h2>
                    <h3><span>Contact Us</span></h3>
                    <p>Contact us today for a quick cash offer; we’ll schedule a time to meet with you in person. As you’ll see, our team is extremely responsive. It’s our goal to answer all of your questions and provide you with detailed steps as to what to expect going forward.</p>
                </div>

                <div class="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-6 col-md-6">
                        <div className="info-box  mb-4">
                        <BiEnvelope />
                        <h3>Email Us</h3>
                        <p>contact@example.com</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="info-box  mb-4">
                        <BiPhoneCall />
                        <h3>Call Us</h3>
                        <p>+1 5589 55488 55</p>
                        </div>
                    </div>
                </div>

               
                <div className="row" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-lg-12">
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="col form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>

                </div>

            </div>
        </section>
    )
    
}

export default ContactUs
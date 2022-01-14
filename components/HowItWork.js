import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";

function HowItWork(){

    return (
        <section id="featured-services" className="featured-services">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>How It Work</h2>
                    <h3>Check How <span>We Work</span></h3>
                    <p>We Buy Houses In Three Steps!</p>
                </div>

                <div className="row justify-content-center">
                <div className="col-md-4 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon"><BiPhoneCall /></div>
                    <h4 className="title"><a href="">Step 1</a></h4>
                    <p className="description">Speak with a Customer Advisor by calling 1-800-214-4426 number or submit your info on our website and we’ll be in touch ASAP.</p>
                    </div>
                </div>

                <div className="col-md-4 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon"><MdOutlineLocalOffer /></div>
                    <h4 className="title"><a href="">Step 2</a></h4>
                    <p className="description">We give you a totally free and no obligation offer. Our offers are always as-is, cash, and you save thousands on realtor fees.</p>
                    </div>
                </div>

                <div className="col-md-4 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon"><GiSandsOfTime /></div>
                    <h4 className="title"><a href="">Step 3</a></h4>
                    <p className="description">Close and move on your timeline. AdamoProperties can close in a matter of days, or set a closing date for weeks out. We’re flexible.</p>
                    </div>
                </div>

                </div>

            </div>
            </section>
    )

}

export default HowItWork
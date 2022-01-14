import FormDataTouch from "./FormDataTouch"

function HeroSection(){

    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container text-center" data-aos="zoom-out" data-aos-delay="100">
                <h2>Before, Now and Always</h2> 
                <h1>We Are Here For <span>You</span></h1>
                <h5 className="text-white mb-4">
                    No Fees. No Commissions. You Pick The Closing Date. We Pay All Costs.
                </h5>

                <FormDataTouch />

            </div>
        </section>
    )
}

export default HeroSection
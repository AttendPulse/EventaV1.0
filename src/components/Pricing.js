import React from 'react';

const Pricing = () => {
  return (
    <section className="pricing-style-two home-5 pb_120 centred p_relative">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-42.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-43.png)' }}></div>
      </div>
      <div className="auto-container">
        <div data-animation-box className="sec-title mb_55">
          <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">Pricing Plans</span>
          <h2>Affordable Event Solutions</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
            <div className="pricing-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="pricing-table">
                <div className="table-header mb_40">
                  <h3>Starter Package</h3>
                  <p>Perfect for small social gatherings</p>
                  <h2>KES 5,000<span> /Event</span></h2>
                  <a href="#contact" className="theme-btn btn-three">Book Now</a>
                </div>
                <div className="table-content">
                  <ul className="feature-list clearfix">
                    <li>Up to 50 Guests</li>
                    <li>Basic Decorations</li>
                    <li>Event Supervision</li>
                    <li>Email Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
            <div className="pricing-block-two active-block wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="pricing-table">
                <div className="table-header mb_40">
                  <h3>Standard Package</h3>
                  <p>Ideal for birthdays & corporate events</p>
                  <h2>KES 15,000<span> /Event</span></h2>
                  <a href="#contact" className="theme-btn btn-one">Book Now</a>
                </div>
                <div className="table-content">
                  <ul className="feature-list clearfix">
                    <li>Up to 150 Guests</li>
                    <li>Themed Decorations</li>
                    <li>Event Host & Support</li>
                    <li>24/7 Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
            <div className="pricing-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="pricing-table">
                <div className="table-header mb_40">
                  <h3>Premium Package</h3>
                  <p>Great for weddings and luxury events</p>
                  <h2>KES 30,000<span> /Event</span></h2>
                  <a href="#contact" className="theme-btn btn-three">Book Now</a>
                </div>
                <div className="table-content">
                  <ul className="feature-list clearfix">
                    <li>Up to 300 Guests</li>
                    <li>Full Event Planning</li>
                    <li>On-Site Event Manager</li>
                    <li>VIP Guest Handling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
            <div className="pricing-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="pricing-table">
                <div className="table-header mb_40">
                  <h3>Custom Package</h3>
                  <p>Tailored to your exact needs</p>
                  <h2>Get a Quote</h2>
                  <a href="#contact" className="theme-btn btn-three">Request Quote</a>
                </div>
                <div className="table-content">
                  <ul className="feature-list clearfix">
                    <li>Unlimited Guests</li>
                    <li>Fully Custom Setup</li>
                    <li>Dedicated Event Team</li>
                    <li>Priority Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
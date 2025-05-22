import React from 'react';

const Services = () => {
  return (
    <section className="service-style-two pb_150">
      <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-41.png)" }}></div>
      <div className="auto-container">
        <div className="inner-container">
          <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-40.png)" }}></div>
          <div data-animation-box className="sec-title mb_55 centred">
            <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">What We Offer</span>
            <h2>Services Included</h2>
          </div>
          <div className="row clearfix">
            {/* Service blocks */}
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one">
                <div className="inner-box">
                  <h3>Event Creation</h3>
                  <p>Set up events in minutes — define venue, date, ticket types, and branding in a clean dashboard.</p>
                  <div className="link"><a href="#"> {/* Consider updating href="#" for accessibility */}
                    <i className="icon-23"></i>
                  </a></div>
                  <figure className="image"><img src="/assets/images/resource/event-creation.png" alt="Event Creation" /></figure>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one">
                <div className="inner-box">
                  <h3>Online Ticketing</h3>
                  <p>Sell tickets online securely through mobile money and cards, with instant confirmation & QR codes.</p>
                  <div className="link"><a href="#"> {/* Consider updating href="#" for accessibility */}
                    <i className="icon-23"></i>
                  </a></div>
                  <figure className="image"><img src="/assets/images/resource/online-ticketing.png" alt="Online Ticketing" /></figure>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one">
                <div className="inner-box">
                  <h3>Check-In System</h3>
                  <p>Use our mobile check-in app or dashboard to scan QR codes and track attendance in real-time.</p>
                  <div className="link"><a href="#"> {/* Consider updating href="#" for accessibility */}
                    <i className="icon-23"></i>
                  </a></div>
                  <figure className="image"><img src="/assets/images/resource/check-in.png" alt="Check-In System" /></figure>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one">
                <div className="inner-box">
                  <h3>Analytics & Reports</h3>
                  <p>Gain insights with reports on ticket sales, attendance, and customer behavior to optimize future events.</p>
                  <div className="link"><a href="#"> {/* Consider updating href="#" for accessibility */}
                    <i className="icon-23"></i>
                  </a></div>
                  <figure className="image"><img src="/assets/images/resource/analytics.png" alt="Analytics & Reports" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
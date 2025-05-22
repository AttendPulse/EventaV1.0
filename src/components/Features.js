import React from 'react';

const Features = () => {
  return (
    <section className="feature-style-three pb_150 centred">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-34.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-35.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="inner-container">
          <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-33.png)' }}></div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-two">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-16"></i></div>
                  <h3><a href="#">Smart Ticketing</a></h3>
                  <p>Create and manage digital tickets with unique QR codes. Track attendance in real-time and prevent fraud at the gate.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-two">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-17"></i></div>
                  <h3><a href="#">Seamless Payments</a></h3>
                  <p>Accept M-Pesa, credit cards, and mobile wallets with fast, secure transactions powered by top local and global gateways.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-two">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-18"></i></div>
                  <h3><a href="#">Event Insights</a></h3>
                  <p>Get detailed analytics on ticket sales, attendee demographics, and real-time check-ins to help you plan better events.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
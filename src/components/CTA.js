import React from 'react';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="bg-color"></div>
      <div className="auto-container">
        <div className="inner-container">
          <div className="pattern-layer">
            <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/shape-23.png)" }}></div>
            <div className="pattern-2 rotate-me" style={{ backgroundImage: "url(/assets/images/shape/shape-24.png)" }}></div>
            <div className="pattern-3 rotate-me" style={{ backgroundImage: "url(/assets/images/shape/shape-25.png)" }}></div>
            <div className="pattern-4 rotate-me" style={{ backgroundImage: "url(/assets/images/shape/shape-26.png)" }}></div>
          </div>
          <div className="inner-box">
            <h2>The #1 rated Event Ticketing & management app <br />on the planet</h2>
            <div className="btn-box">
              {/* IMPORTANT: Update href values to actual React Router paths if you're using it */}
              <a href="/quote" className="theme-btn btn-two mr_20">Get Quote Now</a>
              <a href="/contact" className="theme-btn btn-one">Need Support</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
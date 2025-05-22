import React from 'react';

const Contact = () => {
  return (
    <>
      {/* page-title */}
      <section className="page-title centred pt_130 pb_150">
        <div className="pattern-layer">
          <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-64.png)' }}></div>
          <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-65.png)' }}></div>
        </div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Contact Us</h1>
            <ul className="bread-crumb mt_20 clearfix">
              <li><a href="index.html">Home</a></li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </section>
      {/* page-title end */}

      {/* google-map-section */}
      <section className="google-map-section pb_150">
        <div className="default-pattern">
          <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-68.png)' }}></div>
          <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-69.png)' }}></div>
        </div>
        <div className="auto-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.881728398216!2d36.7202481!3d-1.3224236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11fcbbfe85e9%3A0x3c6076bda06f6f59!2sCrossroads%20Mall%2C%20Langata%20Rd%2C%20Karen%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1715853083629!5m2!1sen!2ske"
            width="600"
            height="535"
            frameBorder="0"
            style={{ border: 0, width: '100%' }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Google Map"
          ></iframe>
        </div>
      </section>
      {/* google-map-section end */}

      {/* contact-info-section */}
      <section className="contact-info-section centred pt_150 pb_120">
        <div className="auto-container">
          <div data-animation-box className="sec-title mb_55">
            <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">Contact Info</span>
            <h2>Contact Information</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
              <div className="info-block-one aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-48"></i></div>
                  <h3>Our Location</h3>
                  <p>Crossroads Mall - Karen, <br />Nairobi</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
              <div className="info-block-one aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-49"></i></div>
                  <h3>Email Address</h3>
                  <p>
                    <a href="mailto:oloostephen20191@gmail.com">oloostephen20191@gmail.com</a>
                    <br />
                    <a href="mailto:support@example.com">support@eventa.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
              <div className="info-block-one aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-50"></i></div>
                  <h3>Phone Number</h3>
                  <p>
                    Emergency Cases <br />
                    <a href="tel:+254716631667">+(254) 716-631667</a> (24/7)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact-info-section end */}

      {/* contact-section */}
      <section className="contact-section pt_140 pb_150">
        <div className="auto-container">
          <div data-animation-box className="sec-title mb_55 centred">
            <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">Contact Form</span>
            <h2>Get in Touch</h2>
          </div>
          <div className="form-inner">
            <form method="post" id="contact-form">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input type="text" name="username" placeholder="Your Name" required="" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input type="email" name="email" placeholder="Your email" required="" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input type="text" name="phone" required="" placeholder="Phone" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input type="text" name="subject" required="" placeholder="Subject" />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <textarea name="message" placeholder="Type message"></textarea>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                  <button className="theme-btn btn-one" type="submit" name="submit-form">
                    Post a Comment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* contact-section end */}

      {/* cta-section */}
      <section className="cta-section">
        <div className="bg-color"></div>
        <div className="auto-container">
          <div className="inner-container">
            <div className="pattern-layer">
              <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-23.png)' }}></div>
              <div className="pattern-2 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-24.png)' }}></div>
              <div className="pattern-3 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-25.png)' }}></div>
              <div className="pattern-4 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-26.png)' }}></div>
            </div>
            <div className="inner-box">
              <h2>
                The #1 rated Event Ticketing & management app <br />
                on the planet
              </h2>
              <div className="btn-box">
                <a href="index-5.html" className="theme-btn btn-two mr_20">
                  Get Quote Now
                </a>
                <a href="contact.html" className="theme-btn btn-one">
                  Need Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cta-section end */}
    </>
  );
};

export default Contact;
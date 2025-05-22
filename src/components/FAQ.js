import React from 'react';

const FAQ = () => {
  return (
    <section className="faq-style-three pb_140">
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-44.png)' }}></div>
      <div className="auto-container">
        <div data-animation-box className="sec-title mb_55 centred">
          <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">General Faq’s</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="inner-box mr_30">
              <ul className="accordion-box">
                <li className="accordion block active-block">
                  <div className="acc-btn active">
                    <div className="icon-box"></div>
                    <h4>What is Eventa?</h4>
                  </div>
                  <div className="acc-content current">
                    <div className="text">
                      <p>
                        Eventa is a modern platform for creating, managing, and promoting events in Kenya. Whether you're hosting a wedding, concert, seminar, or birthday party, Eventa makes planning seamless with smart tools and AI-powered assistance.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn">
                    <div className="icon-box"></div>
                    <h4>Can I use Eventa even if I’m not tech-savvy?</h4>
                  </div>
                  <div className="acc-content">
                    <div className="text">
                      <p>
                        Absolutely! Eventa was built with simplicity in mind. You don’t need any technical knowledge — just follow a few easy steps to create and publish your event, and we’ll handle the rest, including ticketing and guest management.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn">
                    <div className="icon-box"></div>
                    <h4>How does Eventa help with ticket sales?</h4>
                  </div>
                  <div className="acc-content">
                    <div className="text">
                      <p>
                        Eventa allows you to create digital tickets, accept payments via M-Pesa and cards, and track all ticket sales in real-time. You also get access to promotional tools that help boost visibility for your event online.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn">
                    <div className="icon-box"></div>
                    <h4>Is Eventa only for big events?</h4>
                  </div>
                  <div className="acc-content">
                    <div className="text">
                      <p>
                        No. Eventa supports all types of events, big or small. From chama meetings and baby showers to large festivals and conferences, we provide tools that scale with your needs.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn">
                    <div className="icon-box"></div>
                    <h4>How much does it cost to use Eventa?</h4>
                  </div>
                  <div className="acc-content">
                    <div className="text">
                      <p>
                        Eventa offers affordable pricing in Kenyan Shillings, with flexible monthly plans starting as low as KES 4,900. We also offer free trials for you to explore our features before committing.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image-box ml_30">
              <figure className="image">
                <img src="assets/images/resource/faq-1.jpg" alt="Eventa FAQs" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import React from 'react';

const Header = () => {
  return (
    <header className="main-header header-style-five">
      {/* header-lower */}
      <div className="header-lower">
        <div className="auto-container">
          <div className="outer-box">
            <div className="logo-box">
              <figure className="logo">
                <a href="index-2.html">
                  <img src="assets/images/logo.png" alt="" />
                </a>
              </figure>
            </div>
            <div className="menu-area">
              {/*Mobile Navigation Toggler*/}
              <div className="mobile-nav-toggler">
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
              </div>
              <nav className="main-menu navbar-expand-md navbar-light clearfix">
                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                  <ul className="navigation clearfix">
                    <li className="current dropdown">
                      <a href="index-2.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Pages</a>
                      <ul>
                        <li className="dropdown">
                          <a href="#">Our Services</a>
                          <ul>
                            <li>
                              <a href="service.html">Services One</a>
                            </li>
                            <li>
                              <a href="service-2.html">Services Two</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">FAQ’s</a>
                          <ul>
                            <li>
                              <a href="faq.html">FAQ’s One</a>
                            </li>
                            <li>
                              <a href="faq-2.html">FAQ’s Two</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Pricing</a>
                          <ul>
                            <li>
                              <a href="pricing.html">Pricing One</a>
                            </li>
                            <li>
                              <a href="pricing-2.html">Pricing Two</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Testimonials</a>
                          <ul>
                            <li>
                              <a href="testimonial.html">Testimonials One</a>
                            </li>
                            <li>
                              <a href="testimonial-2.html">Testimonials Two</a>
                            </li>
                            <li>
                              <a href="testimonial-3.html">Testimonials Three</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Shop</a>
                          <ul>
                            <li>
                              <a href="shop.html">Our Shop</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Shop Details</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="team.html">Our Team</a>
                        </li>
                        <li>
                          <a href="error.html">404</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">News</a>
                      <ul>
                        <li>
                          <a href="blog.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="blog-2.html">Blog Standard</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="menu-right-content">
              <div className="search-box-outer search-toggler mr_30">
                <i className="icon-1"></i>
              </div>
              <div className="btn-box">
                <a href="index-2.html" className="theme-btn btn-one">Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*sticky Header*/}
      <div className="sticky-header">
        <div className="auto-container">
          <div className="outer-box">
            <div className="logo-box">
              <figure className="logo">
                <a href="index-2.html">
                  <img src="assets/images/logo.png" alt="" />
                </a>
              </figure>
            </div>
            <div className="menu-area">
              <nav className="main-menu clearfix">{/*Keep This Empty / Menu will come through Javascript*/}</nav>
            </div>
            <div className="menu-right-content">
              <div className="search-box-outer search-toggler mr_30">
                <i className="icon-1"></i>
              </div>
              <div className="btn-box">
                <a href="index-2.html" className="theme-btn btn-one">Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
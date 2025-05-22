const Footer = () => {
    return (
      <footer className="main-footer">
        <div className="auto-container">
          <div className="widget-section">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <a href="index-2.html">
                      <img src="assets/images/logo-2.png" alt="" />
                    </a>
                  </figure>
                  <p>Combined with a handy platform and top-notch support from our in-house production team</p>
                  <ul className="social-links clearfix">
                    <li>
                      <a href="index-2.html">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="index-2.html">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="index-2.html">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="index-2.html">
                        <i className="fa-brands fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget ml_60">
                  <div className="widget-title">
                    <h3>Resources</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="shop.html">Affiliates</a>
                      </li>
                      <li>
                        <a href="contact.html">Help</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Primary Pages</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <a href="index-2.html">Privacy</a>
                      </li>
                      <li>
                        <a href="index-2.html">Press</a>
                      </li>
                      <li>
                        <a href="index-2.html">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="index-2.html">Refund Policy</a>
                      </li>
                      <li>
                        <a href="index-2.html">Sitemap</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget subscribe-widget">
                  <div className="widget-title">
                    <h3>Subscribe Newsletter</h3>
                  </div>
                  <div className="widget-content">
                    <p>Combined with a handy platform and top-notch support from our in-house production team</p>
                    <div className="form-inner">
                      <form method="post" action="https://azim.hostlin.com/Sensai/contact.html">
                        <div className="form-group">
                          <input type="email" name="email" placeholder="Email Address" required />
                          <button type="submit" className="theme-btn btn-one">
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom centred">
          <div className="auto-container">
            <div className="copyright">
              <p>Copyright &copy; 2025 Eventa. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
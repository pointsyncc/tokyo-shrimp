import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer__area">
      <div className="footer__top">
        <div className="container footer-line"></div>
        <img
          src="imgs/thumb/footer.jpg"
          alt="Footer Image"
          data-speed="0.75"
        />
      </div>

      <div className="footer__btm">
        <div className="container">
          <div className="row footer__row">
            <div className="col-xxl-12">
              <div className="footer__inner">
                <div className="footer__widget">
                  <img
                    className="footer__logo"
                    width={220}
                    src="imgs/pointsyncc/logo/desktop/transparent.png"
                    alt="Footer Logo"
                  />
                  <p>
                    When do they work well, and when do they on us and finally,
                    when do we actually need how can we avoid them.
                  </p>
                  <ul className="footer__social">
                    <li>
                      <a href="#">
                        <span>
                          <i className="fa-brands fa-facebook-f"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fa-brands fa-twitter"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fa-brands fa-instagram"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fa-brands fa-linkedin"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer__widget-2">
                  <h2 className="footer__widget-title">Information</h2>
                  <ul className="footer__link">
                    <li>
                      <a href="about.html">About Company</a>
                    </li>
                    <li>
                      <a href="portfolio.html">Case Study</a>
                    </li>
                    <li>
                      <a href="career.html">Career</a>
                    </li>
                    <li>
                      <a href="blog.html">blog</a>
                    </li>
                    <li>
                      <a href="contact.html">contact</a>
                    </li>
                  </ul>
                </div>

                <div className="footer__widget-3">
                  <h2 className="footer__widget-title">Contact Us</h2>
                  <ul className="footer__contact">
                    <li>Blaškovec, Mokrice 12, Donja Zelina 10382, Croatia</li>
                    <li>
                      <a href="tel:+385992144802" className="phone">
                        +385 99 2144 802{" "}
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@pointsyncc.com">
                        info@pointsyncc.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer__widget-4">
                  <h2 className="project-title">
                    Have a project in your mind?
                  </h2>
                  <div className="btn_wrapper">
                    <a
                      href="contact.html"
                      className="wc-btn-primary btn-hover btn-item"
                    >
                      <span></span> contact us{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                  <h3 className="contact-time">09 : 00 AM - 17 : 00 PM</h3>
                  <h4 className="contact-day">Monday - Friday</h4>
                </div>

                <div className="footer__copyright">
                  <p>
                    © 2023 - {currentYear} | All Rights Reserved |{" "}
                    <a href="https://wealcoder.com/" target="_blank">
                      POINTSYNCC d.o.o
                    </a>
                  </p>
                </div>

                <div className="footer__subscribe">
                  <form action="#">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <button type="submit" className="subs-btn">
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

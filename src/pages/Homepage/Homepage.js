import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";

const Homepage = () => {
  const history = useHistory();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    arrows: false,
  };

  const testimonialSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true,    // whether animation should happen only once
      offset: 100,   // offset (in px) from the original trigger point
    });
  }, []);

  return (
    <div className="container-fluid padding0">
      {/* BEGIN: Main */}
      <main>
        {/* BEGIN: Focus Top */}
        <div id="focus-top">
          <img className="light2" src="images/novax.png?v=1.0.0" alt="swap" />
          <div className="container">
            {/* BEGIN: Content Top Main */}
            <div className="row">
              <div className="col-12 col-sm-9 col-md-8 col-xl-7" data-aos="fade-right">
                <h1 className="animate a_01" style={{ fontWeight: 900, fontSize: '60px' }}>
                  <span className="animate a_02 rounded-font">NovarX</span> is Decentralized Perpetual{" "}
                  <span className="animate a_03 rounded-font">Exchange</span>
                </h1>
                <p className="animate a_04">
                  Trade BTC, ETH, FTM, OP and other top cryptocurrencies with up to 100x leverage directly from your
                  wallet.
                </p>
                <div className="group-btn animate a_05">
                  <span
                    className="btn-a btn-gradient"
                    style={{ cursor: "pointer", userSelect: "none" }}
                    onClick={() => history.push("/trade")}
                  >
                    START TRADING
                  </span>
                </div>
              </div>
              <div className="col-12 col-sm-3 col-md-4 col-xl-5" data-aos="fade-left" data-aos-delay="200">
                {/* ... */}
              </div>
            </div>
            {/* END: Content Top Main */}
          </div>

          {/* BEGIN: Total Information */}
          <div className="content-width">
            <div className="information">
              <Slider {...sliderSettings}>
                <div className="col-12 col-sm-6 col-xl-3 animate a_06 crypto-btc" data-aos="zoom-in" data-aos-delay="0">
                  <div className="crypto-slide-wrapper">
                    <article>
                      <h6>
                        <div className="d-flex align-items-center">
                          BTC&nbsp;&nbsp; <span className="ml-2">0.20%</span>
                        </div>
                        <span>$34,111.92</span>
                      </h6>
                      <img src="images/bitcoin.png" alt="BTC" />
                    </article>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3 animate a_07 crypto-eth" data-aos="zoom-in" data-aos-delay="100">
                  <div className="crypto-slide-wrapper">
                    <article>
                      <h6>
                        <div className="d-flex align-items-center">
                          ETH&nbsp;&nbsp; <span className="ml-2">0.16%</span>
                        </div>
                        <span>$1,792.76</span>
                      </h6>
                      <img src="images/ethereum.png" alt="ETH" />
                    </article>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3 animate a_08 crypto-sol" data-aos="zoom-in" data-aos-delay="200">
                  <div className="crypto-slide-wrapper">
                    <article>
                      <h6>
                        <div className="d-flex align-items-center">
                          SOL&nbsp;&nbsp; <span className="ml-2">0.53%</span>
                        </div>
                        <span>$32.44</span>
                      </h6>
                      <img src="images/solana.png" alt="ETH" />
                    </article>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3 animate a_09 crypto-matic" data-aos="zoom-in" data-aos-delay="300">
                  <div className="crypto-slide-wrapper">
                    <article>
                      <h6>
                        <div className="d-flex align-items-center">
                          MATIC&nbsp;&nbsp; <span className="ml-2">0.23%</span>
                        </div>
                        <span>$0.6248</span>
                      </h6>
                      <img src="images/solana.svg" alt="ETH" style={{ width: "70px" }} />
                    </article>
                  </div>
                </div>
              </Slider>

              <div className="row">
                <div className="col-lg-4 d-flex">
                  <div className="coin-swap-section animate a_06 w-100">
                    <img src="./images/coin-swap.png" alt="swap" />
                    <div className="content">
                      <h6>COIN SWAP</h6>
                      <span>
                        Swap cryptocurrencies quickly with low fees.
                      </span>
                      <a href="https://app.uniswap.org/" target="_blank" rel="noopener noreferrer" className="btn-link">
                        <button>Swap</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex">
                  <div className="coin-swap-section animate a_06 w-100">
                    <img src="./images/defi-platform.png" alt="Defi Platform" />
                    <div className="content">
                      <h6>Defi Platform</h6>
                      <span>
                        DeFi Platform lets you earn interest on your crypto.
                      </span>
                      <a href="https://defillama.com/" target="_blank" rel="noopener noreferrer" className="btn-link">
                        <button>Go Now</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex">
                  <div className="coin-swap-section animate a_06 w-100">
                    <img src="./images/online-shop.png" alt="online shop" />
                    <div className="content">
                      <h6>Online Shop</h6>
                      <span>
                        Online Shop lets you buy and sell cryptocurrencies.
                      </span>
                      <a href="https://opensea.io/" target="_blank" rel="noopener noreferrer" className="btn-link">
                        <button>Buy now</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Total Information  */}

          <div className="row features-section">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="feature-card" data-aos="fade-up" data-aos-delay="0">
                <img src="./images/tradingcard.png" alt="Easy to Trade" />
                <div className="feature-content">
                  <h6>Easy to Trade</h6>
                  <span>Easy to use and trade.</span>
                </div>
              </div>
              <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
                <img src="./images/paymentmethod-1.png" alt="Many Payment Methods" />
                <div className="feature-content">
                  <h6>Many Payment Methods</h6>
                  <span>Many payment methods are available for you to choose from.</span>
                </div>
              </div>
              <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
                <img src="./images/securitycard.png" alt="100% Secure" />
                <div className="feature-content">
                  <h6>100% Secure</h6>
                  <span>100% secure and safe for you to trade.</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              <img src="./images/phone-large-1.png" alt="phone" className="features-phone-img" />
            </div>
          </div>

          <div className="stats-section">
            <div className="stat-item">
              <span className="stat-number">3800+</span>
              <span className="stat-text">USER ACTIVE</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <span className="stat-number">230+</span>
              <span className="stat-text">TRUSTED BY COMPANY</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <span className="stat-number">$230M+</span>
              <span className="stat-text">TRANSACTION</span>
            </div>
          </div>
        </div>
        {/* END: Focus Top */}

        <div className="business-section">
          <div className="row">
            <div className="col-lg-6">
              <div className="business-content-left">
                <h2>You do the business,<br />we'll handle the money.</h2>
                <p>
                  With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
                </p>
                <button className="btn-a btn-gradient">START TRADING</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="business-content-right">
                <div className="business-feature-card" tabIndex="0">
                  <div className="feature-icon-wrapper">
                    <img src="../images/send.svg" alt="Rewards" />
                  </div>
                  <div className="feature-text">
                    <h6>Rewards</h6>
                    <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                  </div>
                </div>
                <div className="business-feature-card" tabIndex="0">
                  <div className="feature-icon-wrapper">
                    <img src="../images/Shield.svg" alt="100% Secured" />
                  </div>
                  <div className="feature-text">
                    <h6>100% Secured</h6>
                    <p>We take proactive steps make sure your information and transactions are secure.</p>
                  </div>
                </div>
                <div className="business-feature-card" tabIndex="0">
                  <div className="feature-icon-wrapper">
                    <img src="../images/star.svg" alt="Balance Transfer" />
                  </div>
                  <div className="feature-text">
                    <h6>Balance Transfer</h6>
                    <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-section">
          <div className="row">
            <div className="testimonial-header">
              <h2>What people are saying about us</h2>
              <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <Slider {...testimonialSliderSettings}>
              <div className="testimonial-card-wrapper">
                <div className="testimonial-card highlighted-card" tabIndex="0">
                  <img src="../images/icon.svg" alt="icon" />
                  <p className="quote-text">Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                  <div className="author-info">
                    <img src="../images/hermen.svg" alt="Herman Jensen" />
                    <div className="author-details">
                      <span className="author-name">Herman Jensen</span>
                      <span className="author-title">Founder & Leader</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card-wrapper">
                <div className="testimonial-card" tabIndex="0">
                  <img src="../images/icon.svg" alt="icon" />
                  <p className="quote-text" style={{  marginBottom: '48.33px' }}>Money makes your life easier. If you're lucky to have it, you're lucky.</p>
                  <div className="author-info align-steve">
                    <img src="../images/steve.svg" alt="Steve Mark" />
                    <div className="author-details">
                      <span className="author-name">Steve Mark</span>
                      <span className="author-title">Founder & Leader</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card-wrapper">
                <div className="testimonial-card" tabIndex="0">
                  <img src="../images/icon.svg" alt="icon" />
                  <p className="quote-text">It is usually people in the money business, finance, and international trade that are really rich.</p>
                  <div className="author-info">
                    <img src="../images/kenn.svg" alt="Kenn Gallagher" />
                    <div className="author-details">
                      <span className="author-name">Kenn Gallagher</span>
                      <span className="author-title">Founder & Leader</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <div>
              <h2>Let's try our service now!</h2>
              <p>
                Everything you need to accept card payments<br />
                and grow your business anywhere on the planet.
              </p>
            </div>
            <button className="btn-a btn-gradient">START TRADING</button>
          </div>
        </div>
      </main>


      {/* END: Main */}

      {/* BEGIN: Footer */}
      <footer>
        <div className="content-footer">
          <a className="logo-footer" href="/">
            <img src="images/logo-novax-desktop.png" alt="icon-logo" />
          </a>
          <p>Join our community</p>
          <ul>
            <li>
              <a href="/" target="_blank">
                <img src="images/f-discord.png" alt="discord" />
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <img src="images/f-github.png" alt="github" />
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <img src="images/f-telegram.png" alt="telegram" />
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <img src="images/f-twitter.png" alt="twitter" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      {/* END: Footer */}
    </div>
  );
};

export default Homepage;

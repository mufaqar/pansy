import React from 'react';

export default function Portfolio() {
  return (
    <>
      <section className="portfolio pt-80 pb-80">
        <div className="container">
          <div className="row center wow fadeInDown">
            <div className="ca ca-heading-center">
              <h2>Our Recent Projects</h2>
            </div>
            <div className="col-sm-6 col-sm-offset-3 blurb pb-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              massa enim. Aliquam viverra at est ullamcorper sollicitudin.
              imperdiet pharetra ut eros.
            </div>
            <div className="col-sm-12"></div>
          </div>
        </div>
        <div className="controls center">
          <li className="control" data-filter="all">
            All
          </li>
          <li className="control" data-filter=".branding">
            Branding
          </li>
          <li className="control" data-filter=".design">
            Design
          </li>
          <li className="control" data-filter=".life">
            Lifestyle
          </li>
        </div>
        <div className="mix-container portfolio-container full pt-20 wow fadeInUp">
          <div className="mix branding">
            <div className="portfolio-holder">
              <img src="/images/home/portfolio/01/1.jpg" alt="" />
              <div className="port-top">
                <div className="port-container">
                  <div className="top-hover">
                    <div className="port-gallery">
                      <a
                        href="/images/home/portfolio/01/1.jpg"
                        className="calla-pop-image"
                        data-effect="mfp-zoom-in"
                      >
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </a>
                      <a href="/images/home/portfolio/01/2.jpg"></a>
                      <a href="/images/home/portfolio/01/3.jpg"></a>
                      <a href="/images/home/portfolio/01/4.jpg"></a>
                      <a href="/images/home/portfolio/01/5.jpg"></a>
                      <a href="/images/home/portfolio/01/6.jpg"></a>
                      <a href="/images/home/portfolio/01/7.jpg"></a>
                      <a href="/images/home/portfolio/01/8.jpg"></a>
                    </div>
                    <a href="#" className="tran-set">
                      <i className="fa fa-link" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{' '}
        </div>
        <div className="mix design">
          <div className="portfolio-holder">
            <img src="images/home/portfolio/01/2.jpg" alt="" />
            <div className="port-top">
              <div className="port-container">
                <div className="top-hover">
                  <div className="port-gallery">
                    <a href="/images/home/portfolio/01/2.jpg">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </div>
                  <a href="#">
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mix life">
          <div className="portfolio-holder">
            <img src="images/home/portfolio/01/3.jpg" alt="" />
            <div className="port-top">
              <div className="port-container">
                <div className="top-hover">
                  <div className="port-gallery">
                    <a href="/images/home/portfolio/01/3.jpg" alt="">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </div>
                  <a href="#">
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mix branding">
          <div className="portfolio-holder">
            <img src="images/home/portfolio/01/4.jpg" alt="" />
            <div className="port-top">
              <div className="port-container">
                <div className="top-hover">
                  <div className="port-gallery">
                    <a href="/images/home/portfolio/01/4.jpg" alt="">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </div>
                  <a href="#">
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mix design">
          <div className="portfolio-holder">
            <img src="images/home/portfolio/01/5.jpg" alt="" />
            <div className="port-top">
              <div className="port-container">
                <div className="top-hover">
                  <div className="port-gallery">
                    <a href="/images/home/portfolio/01/5.jpg">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </div>
                  <a href="#">
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mix life">
          <div className="portfolio-holder">
            <img src="images/home/portfolio/01/6.jpg" alt="" />
            <div className="port-top">
              <div className="port-container">
                <div className="top-hover">
                  <div className="port-gallery">
                    <a href="/images/home/portfolio/01/6.jpg">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </div>
                  <a href="#">
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mix branding">
          <div className="portfolio-holder">
            <img src="images/home/portfolio/01/7.jpg" alt="" />
            <div className="port-top">
              <div className="port-container">
                <div className="top-hover">
                  <div className="port-gallery">
                    <a href="/images/home/portfolio/01/7.jpg" alt="">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </div>
                  <a href="#">
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mix life">
          <div className="portfolio-holder">
            <img src="images/home/portfolio/01/8.jpg" alt="" />
            <div className="port-top">
              <div className="port-container">
                <div className="top-hover">
                  <div className="port-gallery">
                    <a href="/images/home/portfolio/01/8.jpg">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </div>
                  <a href="#">
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

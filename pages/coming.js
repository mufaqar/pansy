//import Footer from './components/footer';

import Footer from './components/footer';
import Header from './components/header';

export default function Comming() {
  return (
    <>
      <div className="wrapper page-animate">
        <Header />
      </div>
      <section className="under-construction">
        <header>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="menu-wrapper">
                  <div className="menu-logo logo hi-res">
                    <a href="/">
                      <img src="images/hi-res-logo.png" alt="" />
                    </a>
                  </div>
                  <div className="slide-icons">
                    <a href="#" className="ca ca-phone-two" target="_blank"></a>
                    <a href="#" className="ca ca-email" target="_blank"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
      <Footer />
    </>
  );
}

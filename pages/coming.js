//import Footer from './components/footer';

import Footer from './components/footer';
import Header from './components/header';

export default function Comming() {
  return (
    <>
      <div class="wrapper page-animate">
        <Header />
      </div>
      <section class="under-construction">
        <header>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="menu-wrapper">
                  <div class="menu-logo logo hi-res">
                    <a href="/">
                      <img src="images/hi-res-logo.png" alt="" />
                    </a>
                  </div>
                  <div class="slide-icons">
                    <a href="#" class="ca ca-phone-two" target="_blank"></a>
                    <a href="#" class="ca ca-email" target="_blank"></a>
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
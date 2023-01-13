import React from 'react';

export default function Header() {
  return (
    <>
      <section class="Fixed holder">
        <header>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="menu-wrapper">
                  <div class="menu-logo logo hi-res">
                    <a href="#">
                      <img src="/images/hi-res-logo.png" alt="" />
                    </a>
                  </div>
                  <div class="navigation-wrapper right">
                    <nav class="main-navigation" id="main-nav">
                      <ul>
                        <li>
                          <a href="#">
                            Home
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                          </a>
                          <ul>
                            <li>
                              <a href="#">Home 1</a>
                            </li>
                            <li>
                              <a href="/index-02.html">Home 2</a>
                            </li>
                            <li>
                              <a href="/index-03.html">Home 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Pages
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                          </a>
                          <ul>
                            <li>
                              <a href="#">About</a>
                              <ul>
                                <li>
                                  <a href="/about-01.html">About Us 1</a>
                                </li>
                                <li>
                                  <a href="/about-02.html">About Us 2</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Services</a>
                              <ul>
                                <li>
                                  <a href="/services-01.html">Services 1</a>
                                </li>
                                <li>
                                  <a href="/services-02.html">Services 2</a>
                                </li>
                                <li>
                                  <a href="/services-03.html">Services 3</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Contact Us</a>
                              <ul>
                                <li>
                                  <a href="/contact-01.html">Contact Us 1</a>
                                </li>
                                <li>
                                  <a href="/contact-02.html">Contact Us 2</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/coming-soon.html">Coming Soon</a>
                            </li>
                            <li>
                              <a href="/under-construction.html">
                                Under Construction
                              </a>
                            </li>
                            <li>
                              <a href="/404.html">Error 404</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Blog
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                Standard
                                <i
                                  class="fa fa-angle-double-right"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <ul>
                                <li>
                                  <a href="/blog-fullwidth.html">Fullwidth</a>
                                </li>
                                <li>
                                  <a href="/blog-sidebar-right.html">
                                    Sidebar Right
                                  </a>
                                </li>
                                <li>
                                  <a href="/blog-sidebar-left.html">
                                    Sidebar left
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                Columns
                                <i
                                  class="fa fa-angle-double-right"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <ul>
                                <li>
                                  <a href="/blog-2-column.html">2 Column</a>
                                </li>
                                <li>
                                  <a href="/blog-3-column.html">3 Column</a>
                                </li>
                                <li>
                                  <a href="/blog-4-column.html">4 Column</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                Single
                                <i
                                  class="fa fa-angle-double-right"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <ul>
                                <li>
                                  <a href="/blog-single-fullwidth.html">
                                    Fullwidth
                                  </a>
                                </li>
                                <li>
                                  <a href="/blog-single-sidebar-right.html">
                                    Sidebar Right
                                  </a>
                                </li>
                                <li>
                                  <a href="/blog-single-sidebar-left.html">
                                    Sidebar Left
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Shop
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                          </a>
                          <ul>
                            <li>
                              <a href="/shop-creative.html">Shop Creative</a>
                            </li>
                            <li>
                              <a href="/shop-2-column.html">2 Column</a>
                            </li>
                            <li>
                              <a href="/shop-3-column.html">3 Column</a>
                            </li>
                            <li>
                              <a href="/shop-4-column.html">4 Column</a>
                            </li>
                            <li>
                              <a href="/shop-single-product.html">
                                Single Product
                              </a>
                            </li>
                            <li>
                              <a href="/shopping-cart.html">Shopping Cart</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            One Page Demo
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                          </a>
                          <ul>
                            <li>
                              <a href="/one-page-light.html">Light Demo</a>
                            </li>
                            <li>
                              <a href="/one-page-dark.html">Dark Demo</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            Buy Template
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div class="menu-btn right">
                    <div class="btn-wrapper">
                      <a href="#main-nav">
                        <div class="menu-icon nav-open">
                          <div class="menu-line"></div>
                          <div class="menu-line"></div>
                          <div class="menu-line"></div>
                          <div class="menu-label">Menu</div>
                        </div>
                      </a>
                      <div class="nav-shop-count">
                        <a href="#">
                          <i class="fa fa-shopping-cart"></i> <span>(2)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

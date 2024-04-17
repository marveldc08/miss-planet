import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
      <div className="header-area header_area">
        <div className="main-header">
          <div className="header-bottom header-sticky">
            {/* Logo */}
            <div className="logo">
              <a href="index.html">
                <Image src="/public/img/logo/logo.png" alt="" width={100} height={100}/>
              </a>
            </div>
            <div className="header-left  d-flex f-right align-items-center">
              {/* Main-menu */}
              <div className="main-menu f-right d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                      <ul className="submenu">
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog_details.html">Blog Details</a>
                        </li>
                        <li>
                          <a href="elements.html">Elements</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* left Btn */}
              <div className="header-right-btn f-right d-none d-lg-block  ml-30">
                <a href="#" className="header-btn">
                  Visit Us
                </a>
              </div>
            </div>
            {/* Mobile Menu */}
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Header
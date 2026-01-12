import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

// Footer component
function Footer() {
  return (
    // Footer section with background and border
    <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          {/* Logo & copyright */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <p className="text-sm text-gray-600">
                © Copyright 2023. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Footer navigation sections */}
          {/* Company */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-9 text-xs font-semibold uppercase text-gray-500">
              Company
            </h3>
            <ul>
              <li>
                <Link to="/">Features</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">Affiliate Program</Link>
              </li>
              <li>
                <Link to="/">Press Kit</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-9 text-xs font-semibold uppercase text-gray-500">
              Support
            </h3>
            <ul>
              <li>
                <Link to="/">Account</Link>
              </li>
              <li>
                <Link to="/">Help</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Customer Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="mb-9 text-xs font-semibold uppercase text-gray-500">
              Legals
            </h3>
            <ul>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Licensing</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

import React from 'react';
import { Link } from 'gatsby';
import links from '../constants/page-links';
import logo from '../images/Genne.png';
import discord from '../images/Discord-Logo.png';

const Footer = () => (
  <div className="bg-gray-100 p-4 flex flex-col justify-center items-center shadow-inner mt-2">
    <div className="w-full flex flex-col sm:flex-row justify-evenly py-2">
      <div className="sm:ml-0 sm:mr-6 order-last sm:order-none flex">
        <h1 className="text-base font-bold font-title text-xl sm:text-2xl mt-3 sm:mt-0">
          <div className="flex sm:flex-col items-start mb-3 sm:mb-0">
            <img src={logo} className="hidden sm:block h-24" alt="github profile markdown generator logo" />
            <div className="mr-2 sm:mr-0">
              GitHub Profile <img src={logo} className="inline sm:hidden h-12" alt="github profile markdown generator logo" />
              <span className="block sm:inline">README Generator</span>
            </div>
          </div>
        </h1>
      </div>
      <div className="text-xl sm:text-base font-light sm:font-normal">
        <div className="font-title font-bold mb-4 sm:mb-2">
          <strong>Pages</strong>
        </div>
        <div className="ml-2 sm:ml-0">
          <Link to={links.addons} activeStyle={{ color: '#005ead' }}>
            Addons
          </Link>
        </div>
        <div className="ml-2 sm:ml-0">
          <Link to={links.support} activeStyle={{ color: '#006ead' }}>
            Support
          </Link>
        </div>
        <div className="ml-2 sm:ml-0">
          <Link to={links.about} activeStyle={{ color: '#007ead' }}>
            About
          </Link>
        </div>
      </div>
      <div className="text-xl sm:text-base font-light sm:font-normal">
        <div className="font-title font-bold my-4 sm:my-0 sm:mb-2">
          <strong>More</strong>
        </div>
        <div className="ml-2 sm:ml-0">
          <a href="https://github.com/Amad3eu/Genne" aria-label="Github Amad3eu/Genne" target="blank">
            Github
          </a>
        </div>
        <div className="ml-2 sm:ml-0">
          <a href="https://github.com/Amad3eu/Genne/releases" aria-label="Releases on Github Amad3eu/Genne" target="blank">
            Releases
          </a>
        </div>
        <div className="ml-2 sm:ml-0">
          <a href="https://github.com/Amad3eu/Genne/issues" aria-label="Issues in Amad3eu/Genne" target="blank">
            Issues
          </a>
        </div>
        <div className="ml-2 sm:ml-0">
          <a href="https://github.com/Amad3eu/Genne/pulls" aria-label="Pull Requests in Amad3eu/Genne" target="blank">
            Pull Requests
          </a>
        </div>
      </div>
      <div>
        <div className="font-title font-bold text-xl sm:text-base my-4 sm:my-0 sm:mb-2">
          <strong>Join Community</strong>
        </div>
        <div className="ml-2 sm:ml-0">
          <a href="https://discord.gg/" aria-label="Discord of the community" target="blank">
            <img src={discord} className="h-12" alt="Discord of the community" />
          </a>
        </div>
      </div>
    </div>
    <div className="py-2 mt-2">
      Developed in Brazil <span role="img" aria-label="Brazil"></span>
    </div>
  </div>
);
export default Footer;

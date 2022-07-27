import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StarIcon, RepoForkedIcon } from '@primer/octicons-react';
import gsap from 'gsap';
import axios from 'axios';
import { Link } from 'gatsby';
import { act } from 'react-dom/test-utils';
import links from '../constants/page-links';
import logo from '../images/mdg.png';

const Header = (props) => {
  const { heading } = props;
  const [stats, setstats] = useState({
    starsCount: 0,
    forksCount: 0,
  });

  const shouldRequestStats = () => {
    const isFirstRequest = stats.starsCount === 0;
    const isVisible = window.document.visibilityState === 'visible';
    const hasFocus = window.document.hasFocus();
    return isFirstRequest || (isVisible && hasFocus);
  };

  const fetchData = async () => {
    if (shouldRequestStats()) {
      const response = await axios.get('https://api.github.com/repos/Amad3eu/genne');

      const { stargazers_count: stargazersCount, forks_count: forksCount } = response.data;

      act(() =>
        setstats({
          starsCount: stargazersCount,
          forksCount,
        }),
      );
    }
  };
  useEffect(() => {
    fetchData();
    setInterval(fetchData, 60000);

    gsap.set('.star, .fork', {
      transformOrigin: 'center',
    });
    gsap.to('.star, .fork', {
      rotateZ: '360',
      duration: 2,
      ease: 'elastic.inOut',
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="shadow flex items-center justify-center flex-col mb-2 py-2">
      <Link to={links.home}>
        <h1 className="text-base font-bold font-title sm:text-2xl font-medium text-green-900 flex justify-center items-center flex-col">
          <img src={logo} className="w-12 h-12" alt="github profile markdown generator logo" />
          {/* <div>{heading}</div> */}
          <div>Genne</div>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
Header.propTypes = {
  heading: PropTypes.string.isRequired,
};

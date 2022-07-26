import React from 'react';

const Donate = () => (
  <>
    <div className="text-center text-4xl my-2">
      Support&nbsp;
      <span role="img" aria-label="praying hand emoji">
        🙏
      </span>
    </div>
    <div className="flex flex-col sm:flex-row items-start justify-between">
      <div className="w-full sm:w-2/3">
        <div className="text-2xl mb-2">Are you using the tool and happy with it to create your GitHub Profile?</div>
        <div className="text-lg">Your kind support keeps open-source tools like this free for others.</div>
        <div className="mt-4">
          <a className="flex items-center justify-start w-20" href="https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%Amad3eu.github.io%2Fgithub-profile-readme-generator">
            <img className="w-20" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2FAmad3eu.github.io%2Fgithub-profile-readme-generator" alt="tweet github profile readme generator" />
          </a>
          Let the world know how you feel using this tool. Share with others on twitter.
        </div>
      </div>
      <div className="w-full sm:w-1/3 flex flex-col justify-center items-center">
        <span>
          Tip
          <span role="img" aria-label="Dollar medal">
            💰
          </span>
        </span>
      </div>
    </div>
  </>
);

export default Donate;

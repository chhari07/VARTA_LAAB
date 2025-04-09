/* eslint-disable no-unused-vars */
import React from 'react';

const Upcomings = () => {
  const cards = [
    {
      title: 'Voice of the People',
      subtitle: 'peoples voice',
      description: 'A space to express opinions, vote on issues, and be heard.',
      bg: '#6b1a3a',
      textColor: '#f1cbd2',
    },
    {
      title: 'Workspaces',
      subtitle: 'Collaborative Zone',
      description: 'Organize projects, share files, and work as a team in real time.',
      bg: '#1a6b4b',
      textColor: '#cceedd',
    },
    {
      title: 'Chatrooms',
      subtitle: 'Instant Talks',
      description: 'Engage in live discussions, brainstorm, and connect freely.',
      bg: '#1a3a6b',
      textColor: '#ccddee',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-10 flex-wrap items-center justify-center p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-full sm:w-[90%] md:w-[400px] xl:w-[450px] h-[450px] bg-slate-200 flex flex-col sm:flex-row rounded-xl shadow-lg transition-all duration-300"
        >
          {/* Left Section */}
          <div
            className="w-full sm:w-[55%] h-[200px] sm:h-full p-6 text-white rounded-t-xl sm:rounded-t-none sm:rounded-l-xl"
            style={{ backgroundColor: card.bg }}
          >
            <p className="text-[11px] tracking-widest" style={{ color: card.textColor }}>
              {card.subtitle.toUpperCase()}
            </p>
            <h1 className="text-[22px] pt-5 font-medium tracking-wide leading-[25px]">
              {card.title}
            </h1>
            <h4
              className="text-[12px] pt-[40px] cursor-pointer"
              style={{ color: card.textColor }}
            >
              Learn more <i className="fa-solid fa-chevron-right"></i>
            </h4>
          </div>

          {/* Right Section */}
<div className="p-6 bg-black w-full sm:w-[45%] rounded-b-xl sm:rounded-b-none sm:rounded-r-xl relative flex flex-col justify-between">
  <div className="flex justify-between">
    <h1 className="text-white text-[13px] tracking-[.5px]">COMING SOON</h1>
  </div>
  <h1 className="text-[18px] text-white mb-20  sm:mt-4 font-[500] tracking-wide">
  {card.description}
</h1>
  <input
    type="button"
    value="Notify Me"
    className="h-10 w-[120px] text-white rounded-3xl tracking-wide mt-6 sm:mt-0 self-end sm:absolute sm:right-6 sm:bottom-6 cursor-pointer"
    style={{
      backgroundColor: `${card.bg}e8`,
    }}
    onMouseOver={(e) =>
      (e.target.style.backgroundColor = `${card.bg.replace(')', ', 0.85)')}`)
    }
    onMouseOut={(e) => (e.target.style.backgroundColor = `${card.bg}e8`)}
  />
</div>

        </div>
      ))}
    </div>
  );
};

export default Upcomings;

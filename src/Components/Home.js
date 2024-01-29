// src/components/Home.js
import React, { useState, useEffect } from 'react';

const Home = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-01-11") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Countdown to Our Wedding</h1>
      <div className="grid grid-cols-4 gap-4">
        {Object.keys(timeLeft).map(interval => (
          <div key={interval}>
            <span className="text-2xl">{timeLeft[interval]}</span>
            <span>{interval}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

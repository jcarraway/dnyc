import React, { useState, useEffect } from 'react';

interface Props {
  blastoff: Date;
}

export const Countdown: React.FC<Props> = ({ blastoff }) => {
  const [daysRemaining, setDaysRemaining] = useState();
  const [hoursRemaining, setHoursRemaining] = useState();
  const [minutesRemaining, setMinutesRemaining] = useState();
  const [secondsRemaining, setSecondsRemaining] = useState();

  let interval: any;
  useEffect(() => {
    interval = setInterval(() => {
      const _timeLeft = calculateCountdown();
      if (_timeLeft) {
        setDaysRemaining(_timeLeft.days);
        setHoursRemaining(_timeLeft.hours);
        setMinutesRemaining(_timeLeft.minutes);
        setSecondsRemaining(_timeLeft.seconds);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return function stop() {
      clearInterval(interval);
    };
  }, [secondsRemaining]);

  const calculateCountdown = () => {
    const end = new Date(blastoff).toISOString();
    console.log('END', end);
    const now = new Date().toISOString();
    console.log('NOW', now);
    let diff = (Date.parse(end) - Date.parse(now)) / 1000;

    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.minutes = Math.floor(diff / 60);
      diff -= timeLeft.minutes * 60;
    }
    timeLeft.seconds = Math.round(diff);

    return timeLeft;
  };

  const numberStyles = {
    color: 'red',
    fontSize: 32,
  };

  const addLeadingZeros = (value: any) => {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  };

  if (secondsRemaining) {
    return (
      <div>
        <span style={numberStyles}>{daysRemaining}</span>{' '}
        {daysRemaining === 1 ? 'day' : 'days'}{' '}
        <span style={numberStyles}>{addLeadingZeros(hoursRemaining)}</span>{' '}
        hours{' '}
        <span style={numberStyles}>{addLeadingZeros(minutesRemaining)}</span>{' '}
        minutes{' '}
        {secondsRemaining === 60 ? (
          <span style={numberStyles}>{'00'}</span>
        ) : (
          <span style={numberStyles}>{addLeadingZeros(secondsRemaining)}</span>
        )}{' '}
        seconds until takeoff
      </div>
    );
  }
  return <div style={{ height: 48 }}>...calculating countdown</div>;
};

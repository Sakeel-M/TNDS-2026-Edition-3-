import React, { useEffect, useState } from "react";

const BannerTimer = () => {
  //counter time start
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: 23 May 2026 00:00:00
    const targetDate = new Date(2026, 4, 23); // Note: Months are zero-based, so 4 is May

    const interval = setInterval(() => {
      const currentDate = new Date();
      const difference = targetDate.getTime() - currentDate.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTime({ days, hours, minutes, seconds });
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = time;

  //counter time end
  return (
    <>
      {days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? (
        <p className="live-in-content mb-lg-4 mb-2">‘LIVE’ in Chennai</p>
      ) : (
        <div className="text-center d-flex justify-content-center align-items-center gap-lg-4 gap-2 mb-lg-4  mb-2">
          <p className="text-light price-text mb-0">Event Starts In :</p>
          <div>
            <span className="fs-lg-2 fs-4 font-bold text-light">
              {days}
              &nbsp;
            </span>
            <span className="fs-6 text-light">Days </span>
          </div>
          <div className="fs-6 text-light">:</div>
          <div>
            <span className="fs-lg-2 fs-4 font-bold text-light">
              {hours}
              &nbsp;
            </span>
            <span className="fs-6 text-light">Hours </span>
          </div>
          <div className="fs-6 text-light">:</div>
          <div>
            <span className="fs-lg-2 fs-4 font-bold text-light">
              {minutes}
              &nbsp;
            </span>
            <span className="fs-6 text-light">Minutes </span>
          </div>
          <div className="fs-6 text-light">:</div>
          <div>
            <span className="fs-lg-2 fs-4 font-bold text-light">
              {seconds}
              &nbsp;
            </span>
            <span className="fs-6 text-light">Seconds </span>
          </div>
        </div>
      )}
    </>
  );
};

export default BannerTimer;

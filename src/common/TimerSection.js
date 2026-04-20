import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TimerSection = () => {

  const navigate = useNavigate();

  //counter time start

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Early bird offer ends: 25 April 2026 00:00:00 (5 days from 2026-04-20)
    const targetDate = new Date(2026, 3, 25); // Note: Months are zero-based, so 3 is April

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
        <></>
      ) : (
        <div className="day-count-section">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="row justify-content-center py-lg-1">
                  <div className="col-lg-2 d-lg-block d-none m-auto col-6">
                    <h5 className="price-text mb-0">Early Bird Offer Ends In :</h5>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="flex-align-center">
                      <div className="single-box gap-2">
                        <h1 className="gradient-text">{days}</h1>
                        <sub>
                          <h5 className="counter-text">Days</h5>
                        </sub>
                      </div>
                      <h5 className="counter-text count-colun">:</h5>
                    </div>
                  </div>
                  <div className="col-lg-2  col-6">
                    <div className="flex-align-center">
                      <div className="single-box gap-2">
                        <h1 className="gradient-text">{hours}</h1>
                        <sub>
                          <h5 className="counter-text">Hours</h5>
                        </sub>
                      </div>
                      <h5 className="counter-text count-colun">:</h5>
                    </div>
                  </div>
                  <div className="col-lg-2  col-6">
                    <div className="flex-align-center">
                      <div className="single-box gap-2">
                        <h1 className="gradient-text">{minutes}</h1>
                        <sub>
                          <h5 className="counter-text">Minutes</h5>
                        </sub>
                      </div>
                      <h5 className="counter-text count-colun ">:</h5>
                    </div>
                  </div>
                  <div className="col-lg-2  col-6">
                    <div className="flex-align-center">
                      <div className="single-box gap-2">
                        <h1 className="gradient-text">{seconds}</h1>
                        <sub>
                          <h5 className="counter-text">Seconds</h5>
                        </sub>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 d-lg-block d-none m-auto text-center col-6">
                    <button onClick={()=>navigate('/Ticket')}
                      className={`btn btn-anim-contact rounded-pill w-auto py-2 px-4 `}
                    >Buy Ticket</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TimerSection;

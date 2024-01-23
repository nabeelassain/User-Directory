import React, { useState, useEffect } from "react";
import "./DigitalClock.css";
import API from "../../utils/API";

const DigitalClock = ({ selectedCountry, clockPaused, pausedTimestamp }) => {
  const [clockValues, setClockValues] = useState({
    dayname: "",
    month: "",
    daynum: "",
    year: "",
    hour: "",
    minutes: "",
    seconds: "",
    period: "",
  });

  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    let intervalId;

    const updateClock = async () => {
      try {
        const data = await API.getTime(selectedCountry);
        const { datetime } = data;

        const now = new Date(datetime);
        let adjustedDateTime = now;

        if (clockPaused && pausedTimestamp !== null) {
          const elapsedSeconds = Math.floor(
            (Date.now() - pausedTimestamp) / 1000
          );
          adjustedDateTime = new Date(now.getTime() - elapsedSeconds * 1000);
        } else if (!clockPaused) {
          setStartTime(now);
        }

        const dname = adjustedDateTime.getDay(),
          mo = adjustedDateTime.getMonth(),
          dnum = adjustedDateTime.getDate(),
          yr = adjustedDateTime.getFullYear(),
          hou = adjustedDateTime.getHours(),
          min = adjustedDateTime.getMinutes(),
          sec = adjustedDateTime.getSeconds(),
          pe = hou >= 12 ? "PM" : "AM";

        setClockValues({
          dayname: week[dname],
          month: months[mo],
          daynum: String(dnum).padStart(2, "0"),
          year: yr,
          hour: String(hou > 12 ? hou - 12 : hou).padStart(2, "0"),
          minutes: String(min).padStart(2, "0"),
          seconds: String(sec).padStart(2, "0"),
          period: pe,
        });
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    if (!clockPaused) {
      updateClock();
      intervalId = setInterval(updateClock, 1000);
    }

    return () => clearInterval(intervalId);
  }, [selectedCountry, clockPaused, pausedTimestamp]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="datetime">
      <div className="date">
        <span id="dayname">{clockValues.dayname}</span>,
        <span id="month">{clockValues.month}</span>
        <span id="daynum">{clockValues.daynum}</span>,
        <span id="year">{clockValues.year}</span>
      </div>
      <div className="time">
        <span id="hour">{clockValues.hour}</span>:
        <span id="minutes">{clockValues.minutes}</span>:
        <span id="seconds">{clockValues.seconds}</span>
        <span id="period">{clockValues.period}</span>
      </div>
    </div>
  );
};

export default DigitalClock;

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DigitalClock from "../components/DigitalClock/DigitalClock";
import BaseButton from "../components/Button/Button";
import API from "../utils/API";
import "./style.css";

const ClockSection = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("America/New_York");
  const [clockPaused, setClockPaused] = useState(false);
  const pausedTimestampRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await API.getCountries();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handlePauseToggle = () => {
    if (clockPaused) {
      setClockPaused(false);
    } else {
      setClockPaused(true);
      pausedTimestampRef.current = Date.now();
    }
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <div className="clock-section">
          <span className="pause-button">
            <BaseButton onClick={handleBackButtonClick}>Back</BaseButton>
            <BaseButton onClick={handlePauseToggle}>
              {clockPaused ? "Start" : "Pause"}
            </BaseButton>
          </span>
          <div className="dropdown">
            <span>
              <select value={selectedCountry} onChange={handleCountryChange}>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </span>
          </div>
        </div>
        <div className="digital-clock">
          <DigitalClock
            selectedCountry={selectedCountry}
            clockPaused={clockPaused}
            pausedTimestamp={pausedTimestampRef.current}
          />
        </div>
        <div>{currentTime}</div>
      </div>
    </div>
  );
};

export default ClockSection;

import React, { useState } from "react";
import "../App.css";
function Temperature() {
  const [degree, setDegree] = useState(0);

  const handleButtonClick = (value) => {
    setDegree(degree + value);
  };

  const Celsius = () => {
    const celsius = degree;
    return <p>{celsius} °C</p>;
  };

  const Fahrenheit = () => {
    const fahrenheit = (degree * 9) / 5 + 32;
    return <p>{fahrenheit} °F</p>;
  };

  const Kelvin = () => {
    const kelvin = degree + 273.15;
    return <p>{kelvin} K</p>;
  };

  return (
    <div>
      <div className="card-container">
        <div className="card">
          <div className="card" id="title">
            <p>Celsius</p>
          </div>

          <Celsius />
        </div>
        <div className="card">
          <div className="card" id="title">
            <p>Fahrenheit</p>
          </div>

          <Fahrenheit />
        </div>
        <div className="card">
          <div className="card" id="title">
            <p>Kelvin</p>
          </div>
          <Kelvin />
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => handleButtonClick(1)}>Sıcaklığı Arttır</button>
        <button onClick={() => handleButtonClick(-1)}>Sıcaklığı Azalt</button>
      </div>
    </div>
  );
}

export default Temperature;

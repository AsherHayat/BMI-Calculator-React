import React, { useState } from 'react';
import './index.css';

function App() {
  // State
  const [Weight, setWeight] = useState('');
  const [Height, setHeight] = useState('');
  const [BMI, setBMI] = useState('');
  const [message, setMessage] = useState('');

  let imgSrc = '';
  let calcBmi = (event) => {
    // Prevent submitting
    event.preventDefault();

    if (Weight === 0 || Height === 0) {
      alert('Please Enter Valid Weight and Height');
    } else {
      const heightM = Height * 0.0254; // Convert height from inches to meters
      const BMI = Weight / (heightM * heightM);
      setBMI(BMI.toFixed(1));

      // Determine BMI category and message
      if (BMI < 18.5) {
        setMessage('Underweight');
      } else if (BMI >= 18.5 && BMI <=24.9) {
        setMessage('Normal weight');
      } else if (BMI >= 25 ) {
        setMessage('Overweight');
      }
    }
  };
  //show image based on BMI calculation
  if 
  (BMI<1)
  {
    imgSrc=null
  }
  else 
  {
    if (BMI<18.5)
    {
      imgSrc=require('../src/assets/underweight.png')
    }
    else {
      if (BMI>=18.5&&BMI<=24.9)
      {
        imgSrc=require('../src/assets/healthy.png')
      }
      else {
        if (BMI>=25)
        {
          imgSrc=require('../src/assets/overweight.png')
        }
      }
      
      
    }

  }

  

  let Reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (Kgs)</label>
            <input
              type="number"
              value={Weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div>
            <label>Height (inches)</label>
            <input
              type="number"
              value={Height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Calculate BMI
            </button>
            <button className="btn btn-outline" type="button" onClick={Reload}>
              Reload
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {BMI}</h3>
          <p>{message}</p>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;

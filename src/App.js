import "./App.css";
import React,{useState} from "react";
function App() {
  //making state of our application.

const[weight,setWeight] = useState(0);
const[height,setHeight] = useState(0);
const[bmi, setBmi] = useState('');
const[message,setMessage] = useState('');

//Logic 

let calcBmi=(e)=>{
  //event.preventDefault();
  e.preventDefault();
  if (weight===0 || height===0){
    alert('Please Enter a valid height and weight')
  }
  else{
    let bmi=(weight/(height*height)*703)
    setBmi(bmi.toFixed(1))


    if(bmi<25){
      setMessage('You are UnderWeight');


      
    }
    else if(bmi>=25 && bmi<30){
       setMessage('you are Healthy Weight')

    }
    else{
      setMessage('You are a OverWeight')


    }
  }
}
//

let reload=()=>{
  window.location.reload()
}


  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(lbs)</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(in)</label>
            <input
              type="text"
              placeholder="Enter Height Value"
              value={height}
              onChange={(event) => setHeight(event.target.value)}

            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI Ratio is:{bmi}</h3>
            <p>{message}</p>
          </div>
         
        </form>
      </div>
    </div>
  );
}

export default App;

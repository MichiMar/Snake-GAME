import React, { useEffect, useState, useRef, useReducer } from "react";
import "./App.css";

function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect( () => {
      savedCallback.current = callback;
    })

    useEffect(() => {
      function tick() {
        savedCallback.current()
      }

      let id = setInterval(tick, delay);
      return () => clearInterval(id)
    }, [delay]
    );
}


// Timer Component
function Timer({pause}) {
  const [hour, setHours] = useState(0);
  const [minute, setMinutes] = useState(0);
  const [second, setSeconds] = useState(0);

  const toTime = (time) => ("0" + time).slice(-2);

  let resetRef = useRef();
  // Trick to initialize countRef.current on first render only
  resetRef.current = resetRef.current || false;

  useEffect(() => {
    if (resetRef.current === true) {
      setSeconds(0)
    }
  })

  useInterval(() => {
    if (pause) {
      resetRef.current = true;
      return;
    }
  })
}



function App() {

  

  
  return (
    <div className="App">
      <header />
    </div>
  );
}

export default App;

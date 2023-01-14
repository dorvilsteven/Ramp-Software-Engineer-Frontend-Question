import React, { useState, useEffect } from "react";

function MyComponent({ input }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  if (!input) {
    return <div>{time.toString()}</div>;
  } else if (Array.isArray(input)) {
    return (
      <ul>
        {input.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  } else {
    return <div>{input}</div>;
  }
}

export default MyComponent;

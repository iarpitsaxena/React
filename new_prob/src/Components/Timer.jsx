import React from "react";

function Timer({ start = 1, end = 60, onTimeUp = () => {} }) {
  const [seconds, setSeconds] = React.useState(start);

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= end) {
          clearInterval(timerId);
          onTimeUp(); // Call callback when limit is reached
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timerId); // Cleanup on unmount
  }, [end, onTimeUp]);

  return (
    <div className="timer">
      <span>{seconds} seconds passed</span>
    </div>
  );
}

export default Timer;

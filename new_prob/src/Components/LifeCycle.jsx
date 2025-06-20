import React, { useEffect } from "react";

function Lifecycle() {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (count === 0) {
      console.log("Component mounted");
    } else if (count < 5) {
      console.log("Component updated");
    } else if (count === 5) {
      console.log("Component unmounted");
    }
}, [count]);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Lifecycle</h1>
      <button onClick={handleClick}>Count: {count}</button>
    </div>
  );
}

export default Lifecycle;

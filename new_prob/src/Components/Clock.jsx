// import React, { useEffect } from "react";

// function Clock() {
//   const [count, setCount] = React.useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       setCount(count + 1);
//     }, 1000);
//   }, [count]);

//   return <div>Clock: {count}</div>;
// }

// export default Clock;

// import React, { useState, useEffect } from "react";

// function Clock() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount(count + 1); // use functional update
//     }, 1000);

//      return () => clearInterval(timer); // cleanup on unmount
//    }, [count]); // empty dependency array → run only once

//   return <div>Clock: {count}</div>;
// }

// export default Clock;


import React, { useState, useEffect } from "react";

function Clock() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1); // use functional update
    }, 1000); 
   }, [count]); // empty dependency array → run only once

  return <div>Clock: {count}</div>;
}

export default Clock;

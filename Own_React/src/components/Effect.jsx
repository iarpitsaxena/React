import { useEffect } from "react";




function Effect() {
    useEffect(function () {
      const API = fetch("https://jsonplaceholder.typicode.com/posts");
      fetch(API)
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          console.log(res);
        });
    }, []);
    return (
        <div>
            <h1>Effect</h1>
        </div>
    );
}

export default Effect;
import { useEffect, useState } from "react";

const Counter = (time) => {
  const [counter, setCounter] = useState(time);

  useEffect(() => {
    const id = setInterval(() => {
      if (counter > 0) {
        setCounter((value) => value - 1);
      } else if (counter === 0) {
        setCounter(time);
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  // eslint-disable-next-line
  }, [counter]);

  return counter;
};

export default Counter;

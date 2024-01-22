import { useEffect, useState } from "react";

export const Progress = ({ max }) => {
  const [remainingTime, setRemainingTime] = useState(max);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);

      return () => {
        clearInterval(interval);
      };
    }, 10);
  }, []);

  return <progress value={remainingTime} max={max} />;
};

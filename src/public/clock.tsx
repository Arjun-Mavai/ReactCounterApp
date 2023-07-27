import React, { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        setTime(new Date());
      },

      1000
    );

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <p>{time.toLocaleDateString()}</p>
      <p>{time.toLocaleTimeString()}</p>
    </>
  );
}

import { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => clearInterval(interval);
  })
  
  return (
    <>
      <section>
        <p>Nombre de secondes passées : {time}</p>
      </section>
    </>
  );
}

export default Time;
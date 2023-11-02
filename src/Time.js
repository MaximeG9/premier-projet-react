import { useEffect, useState } from "react";
import zaWarudo from "./zaWarudo.gif";

function Time() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    if(time === 10){
      clearInterval(interval);
      document.body.classList.add("backgroundBlack");

      document.querySelectorAll("p").forEach((e) => (e.style.color = "white"));

      let h1 = document.querySelector("h1");
      h1.style.color = "white";

      let h2 = document.createElement("h2");
      h2.innerHTML = "ZA WARUDO !!!";
      h2.style.color = "white";
      h2.classList.add("bigSize");

      document.querySelector(".time").appendChild(h2);

      let imgElement = document.createElement("img");
      imgElement.setAttribute("src", zaWarudo);
      imgElement.setAttribute("alt", "za Warudo");

      document.querySelector(".time").appendChild(imgElement);
    }

    return () => clearInterval(interval);
  })
  
  return (
    <>
      <section className="time">
        <p>Nombre de secondes passées : {time}</p>
      </section>
    </>
  );
}

export default Time;
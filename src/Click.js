import { useState } from "react";

function Click() {
  const [count, setCount] = useState(0);

    function addOne(){
        setCount(count +1);
    }
    
    function deleteOne(){
        setCount(count - 1);
    }

  return(
    <>
        <p>Vous avez cliqué {count} fois !</p>
        <button onClick={addOne}>Ajouter 1</button>
        <button onClick={deleteOne}>Enlever 1</button>
    </>
    );
}

export default Click;

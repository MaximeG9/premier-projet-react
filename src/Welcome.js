import Click from "./Click";

function Welcome(props) {
  return (
    <>
      <section>
        <h1>
          Welcome {props.firstname} {props.lastname} !
        </h1>
        <Click />
      </section>
    </>
  );
}

export default Welcome;

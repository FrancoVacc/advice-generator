import dice from "../assets/icon-dice.svg";

const Btncontainer = (props) => {
  return (
    <div className="btn-container">
      <button onClick={props.advisorSearch}>
        <img src={dice} alt="" />
      </button>
    </div>
  );
};

export default Btncontainer;

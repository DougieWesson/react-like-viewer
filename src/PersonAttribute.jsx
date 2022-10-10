import "./PersonAttribute.css";

const PersonAttribute = (props) => {
  return (
    <>
      <div>
        <p>{props.label} : {props.value}</p>
      </div>
    </>
  );
};

export default PersonAttribute;

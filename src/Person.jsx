import "./Person.css";
import PersonAttribute from "./PersonAttribute";

const Person = (props) => {
  const attributes = Object.keys(props.person);

  return (
    <div className="person">
      {attributes.map((attribute) => (
        <PersonAttribute label={attribute} value={props.person[attribute]} />
      ))}
    </div>
  );
};

export default Person;

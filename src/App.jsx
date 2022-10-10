import "./App.css";
import Person from "./Person";

function App() {
  const people = [
    {
      name: "Dougie",
      age: "26",
      hobby: "Archery",
      height: "2 dogs",
    },
    {
      name: "Ben",
      age: "29",
      hobby: "Being old",
    },
    {
      name: "Dave",
      age: "Lots",
      hobby: "Gaming",
    },
    {
      name: "Shelly",
      age: "Lots+",
      hobby: "Gaming",
    },
  ];

  return (
    <>
      {people.map((person) => (
        <Person person={person}/>
      ))}
    </>
  );
}

export default App;
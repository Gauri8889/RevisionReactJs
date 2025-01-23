import { useContext } from "react";
import { userContext } from "./MyContext";

const Cybrom = () => {
  // Access context value using useContext hook
  const { name, setName } = useContext(userContext);

  return (
    <>
      <h1>Welcome to Cybrom: {name}</h1>
      <button onClick={() => {setName("Sanju")}}>Click here</button>
    </>
  );
};

export default Cybrom;
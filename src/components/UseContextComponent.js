import { useState, createContext, useContext } from "react";

const UserContext = createContext();

const UseContextComponent = () => {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={{ user }}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

export default UseContextComponent;

function Component2() {
  return (
    <>
      <h2>Component 2</h2>
      <Component3 />
    </>
  );
}

function Component3() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h3>Component 3</h3>
      <h4>{`Hello ${user} again!`}</h4>
    </>
  );
}

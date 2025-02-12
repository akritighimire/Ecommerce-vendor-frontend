import { createContext } from "react";

export const userContext = createContext({
    business_name:"ABC PASAL",
});

//wrapper function bhanepachi props aaihalcha
const UserProvider = (props: any) => {
  return (
    <>
      <userContext.Provider value={{
        business_name: "ABC PASAL",
      }}>{props.children}</userContext.Provider>
    </>
  );
};

export default UserProvider;

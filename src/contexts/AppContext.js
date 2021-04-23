import { createContext, useEffect } from "react";
import { useExampleHook } from "../hooks/useExampleHook";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  //   const [keyword, setKeyword] = useEffect("");
  const token = "hiu mui now";
  const { getAll, getById, create, update, remove } = useExampleHook(
    `hooks/${token}`
  );

  return (
    <AppContext.Provider value={{ getAll, getById, create, update, remove }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default AppContextProvider;

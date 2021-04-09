import React from "react";
import { Ejemplo } from "./components/Ejemplo";
import AppContextProvider from "./contexts/AppContext";

export const App2 = () => {
  return (
    <AppContextProvider>
      <Ejemplo />
    </AppContextProvider>
  );
};

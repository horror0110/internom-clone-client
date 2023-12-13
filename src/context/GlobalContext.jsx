import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("auth")));

  return (
    <GlobalContext.Provider value={{ theme, setTheme, user, setUser }}>
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};

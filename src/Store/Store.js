import React, { createContext, useState } from "react";

const Store = createContext();

const StoreProvider = ({ children }) => {
  const [data, setData] = useState([]);
  return <Store.Provider value={{ data, dataFunc: setData }}>{children}</Store.Provider>;
};

export { Store, StoreProvider };

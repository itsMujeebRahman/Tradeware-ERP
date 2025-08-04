import { createContext, ReactNode, useState } from "react";
import { data1, contextType } from "../types/MainTypes";

interface providerType {
  children: ReactNode;
}

export const MainContext = createContext<contextType | null>(null);

const MainProvider = ({ children }: providerType) => {
  const [selected, setSelected] = useState<data1 | null>(null);
  return (
    <MainContext.Provider value={{ selected, setSelected }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;

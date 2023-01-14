import { createContext, useState } from "react";

export const ExercicesContext = createContext();

export const ExercicesContextProvider = ({ children }) => {

  const [isCreatingANewExercice, setIsCreatingANewExercice] = useState(false);

  return(
    <ExercicesContext.Provider value={{
        isCreatingANewExercice,
        setIsCreatingANewExercice
      }}
    >
      {children}
    </ExercicesContext.Provider>
  );
}
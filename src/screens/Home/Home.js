import { useContext, useState } from "react";
import "./styles.css";

import "../../assets/home_background.png";

import Button from "../../components/Button/button";

import FormAddNewExercice from "../../components/FormAddNewExercice/formAddNewExercice";
import ListExercices from "../../components/ListExercices/listExercices";
import { AuthContext } from "../../context/AuthContext";


function Home(){

  const [ isCreatingANewExercice, setIsCreatingANewExercice ] = useState(false);
  const { logout } = useContext(AuthContext);

  return(
    <div className="home_container">
      <h1 style={{position: "absolute", bottom: 20, right: 50}}>IsLogged!</h1>

      <Button 
        type="cancel" 
        style={{
          position: "absolute", 
          bottom: 20, 
          right: 50, 
          height: "20px", 
          width: "140px", 
          fontSize:"15px"
        }}
        onClick={logout}
      >
        LOGOUT
      </Button>

      <header>
        <div>
          <h1>
            {isCreatingANewExercice ? "Novo Exercício" : "Meus Exercicios"}
          </h1>
        </div>
        <div>
          {!isCreatingANewExercice &&
            <Button 
              onClick={() => setIsCreatingANewExercice(true)}
              style={{transform: "rotate(180deg)"}}
            >
              Adicionar novo exercício
            </Button>
          }
        </div>
      </header>
      
      {isCreatingANewExercice ? <FormAddNewExercice setIsCreatingANewExercice={setIsCreatingANewExercice}/> : <ListExercices />}

    </div>
  );
}

export default Home;
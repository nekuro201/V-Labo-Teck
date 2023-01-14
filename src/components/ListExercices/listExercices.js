import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../lib/axios";
import Exercice from "../Exercice/exercice";

function ListExercices(){

  const {isLogged} = useContext(AuthContext);

  const [ exercices, setExercices ] = useState([]);

  async function getAllExerciciesFromServer(){
    const response = await api.get('/exercice');

    let { data } = response;
    let { exercices : exercicesFromServer } = data;

    return exercicesFromServer;
  }

  useEffect(() => {
    if(isLogged){
      getAllExerciciesFromServer().then((exercicesFromServer) => {
        let sorted = [...Object.values(exercicesFromServer)].sort((a, b) => (a["date"] < b["date"]) ? 1 : ((b["date"] < a["date"]) ? -1 : 0)); 
        setExercices(sorted)
      });
    }
  },[isLogged]);

  async function deleteExerciceById(id){
    const {status} = await api.post("/exercice/delete", {id});

    if(status === 200){
      const newExercicesList = exercices.filter((exercice) => exercice._id !== id);
      setExercices(newExercicesList)
    }
  }

  return(
    <>
      {exercices.length <= 0 &&
        <div style={{ flex: 1, display: "flex", alignItems: "center", fontSize: "34px", textAlign: "center", marginBottom:"150px"}}>
          Você não possui nenhum exercício cadastrado!<br/> Clique em "Adicionar novo exercício".
        </div>
      }

      <div 
        data-testid="content-element-test" 
        style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "20px"}}
      >

        {exercices.map((exercice, index) => {
          const exerciceProps = {
            exercice,
            deleteExerciceById
          }
          return <Exercice value={exerciceProps} key={index}/>
        })}
      </div>
    </>
  );
}

export default ListExercices;
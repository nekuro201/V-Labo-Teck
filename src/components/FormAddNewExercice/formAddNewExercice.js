import { useState } from "react";

import { api } from "../../lib/axios";
import Button from "../Button/button";
import InputSerie from "../InputSerie/inputSerie";

function FormAddNewExercice({setIsCreatingANewExercice}){

  const [ typeExercice, setTypeExercice ] = useState("Esteira");
  const [ date, setDate ] = useState(new Date().toISOString().slice(0, 10));
  const [ series, setSeries ] = useState([0]);
  const [ numSeries, setNumSeries ] = useState(1);

  const handleUpdateNumSeries = (num) => {
    if(series.length < num){
      let diffCurrentTotalWithOldTotal = num - series.length;
      let tempSeriesArray = series;
      for(let i = 0; i < diffCurrentTotalWithOldTotal; i++){
        tempSeriesArray.push(0);
      }
      setSeries(tempSeriesArray);
    }
    else if(series.length > num){
      let diffOldTotalWithCurrentTotal = series.length - num;
      let tempSeriesArray = series;
      for(let i = series.length-1; i >= num; i--){
        tempSeriesArray.splice(i, 1);
      }
      setSeries(tempSeriesArray);
    }

    setNumSeries(num);
  }

  const handleUpdateValueOfSerie = (indexToEdit, value) => {
    setSeries(series.map((serie, index) => {
      if(index === indexToEdit){
        return value;
      }
      return serie;
    }))
  }

  const generateSerieComponents = () => {
    const serieComponents = [];
    for (let index = 0; index < series.length; index++) {
      serieComponents.push(
        <InputSerie 
          key={index} 
          value={series[index]} 
          onChange={e => handleUpdateValueOfSerie(index, e.target.value)} 
        />
      );
    }
    return serieComponents;
  }

  const submitNewExercice = async () => {

    let seriesObj = [];
    
    series.map((serie, index) => {
      let serieObj = {
        indexSequence: index,
        value: serie
      }
      seriesObj.push(serieObj);
    });

    let exercice = {
      //id: Math.floor(Math.random() * 10000000) + 1,
      type: typeExercice,
      series: seriesObj,
      date: date
    }

    try{
      await api.post('/exercice', exercice);
      setIsCreatingANewExercice(false)

    } catch (error){
      console.log(error);
    }
  }

  return(
    <div 
      style={{
        backgroundColor: "#2a50665c",
        borderRadius: "30px",
        display: "flex",
        height: "500px",
        overflow: "hidden",
        width: "450px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div 
        style={{
          display: "flex",
          height: "143px",
        }}
      >

        <div style={{width: "38%", height:"100%"}}>
          <img 
            style={{width: "100%", height: "100%"}} 
            src={`/assets/${typeExercice}Image.png`} 
            alt={"esteira"} 
          />
        </div>

        <div 
          style={{
            flex: 1,
            padding: "15px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-around"
          }}
        >
          <span style={{fontSize: "26px", fontWeight: "bold"}}>Exercício</span>

          <select 
            style={{ 
              color:"#1e1e1e", 
              fontWeight: "bold", 
              fontSize: "22px", 
              padding: "10px", 
              border: "none", 
              borderRadius: "10px", 
              backgroundColor: "#a1a1a138"
            }}
            onChange={e => setTypeExercice(e.target.value)}
            value={typeExercice}
          >
            <option value="Esteira">Esteira</option>
            <option value="Supino">Supino</option>
            <option value="Bicep">Bicep</option>
          </select>
        </div>
      </div>

      <div style={{flex:"1", display: "flex", flexDirection: "column", padding: "25px" , gap: "15px"}}>
        <div>
          <span style={{fontSize: "22px", fontWeight: "normal"}}>Número de séries:</span>
          <select 
            style={{
              color:"#1e1e1e", 
              fontWeight: "bold", 
              fontSize: "22px", 
              padding: "10px", 
              border: "none", 
              borderRadius: "10px", 
              backgroundColor: "#a1a1a138",
              marginLeft: "15px",
            }}
            onChange={e => handleUpdateNumSeries(e.target.value)}
            value={numSeries}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        <div style={{display: "flex", alignItems: "center", gap: "15px"}}>
          {generateSerieComponents()}
        </div>

        <div>
          <span style={{fontSize: "22px", fontWeight: "normal"}}>Data:</span>
          <input 
            style={{
              color:"#1e1e1e", 
              fontWeight: "bold", 
              fontSize: "22px", 
              padding: "10px", 
              border: "none", 
              borderRadius: "10px", 
              backgroundColor: "#a1a1a138",
              marginLeft: "15px",
              appearance: "none",
            }}
            type="date"
            onChange={e => setDate(e.target.value)}
            value={date}
          />
        </div>
      </div>

      <div style={{display: "flex", gap: "5px", padding: "10px"}}>
        <Button onClick={() => setIsCreatingANewExercice(false)} type="cancel">Cancelar</Button>
        <Button onClick={submitNewExercice}>Confirmar</Button>
      </div>
    
    </div>
  );
}

export default FormAddNewExercice;
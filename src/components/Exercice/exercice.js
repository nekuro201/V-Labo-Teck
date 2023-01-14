import DeleteButton from "../DeleteButton/deleteButton";
import Serie from "../Serie/serie";

function Exercice({value}){

  const { exercice, deleteExerciceById } = value

  const {type, series, date, _id} = exercice;
  
  return(
    <div 
      style={{
        backgroundColor: "#2a50665c",
        borderRadius: "40px",
        display: "flex",
        height: "140px",
        overflow: "hidden",
        width: "450px",
      }}
    > 
      <div 
      style={{
        position: "absolute",
        width: "450px",
        marginTop: "-10px"
      }}>
        <DeleteButton onClick={() => deleteExerciceById(_id)}/>
      </div>
      
      <div style={{width: "38%", height:"100%"}}>
        <img style={{width: "100%"}} src={`/assets/${type}Image.png`} alt={type} />
      </div>

      <div 
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          flex: 1,
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <span style={{fontSize: "24px"}}>{type}</span>
        <div style={{display: "flex", alignItems: "center", gap: "15px"}}>

          {series.map((serie, index) =>{
            return <Serie value={serie.value} key={index}/>;
          })}

        </div>
        <span style={{witdh: "100%", textAlign: "right", paddingRight: "20px"}}>{date.split("T")[0]}</span>
      </div>
    </div>
  );
}

export default Exercice;
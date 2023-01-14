export function Serie({value}){
  return(
    <div 
      style={{
        display: "flex",
        border: "2px", 
        borderRadius: "100%", 
        backgroundColor: "#00000069", 
        width: "40px",
        height: "40px",
        fontSize: "24px",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2px",
      }}>
        {value}
    </div>
  );
}

export default Serie;
          
          
          
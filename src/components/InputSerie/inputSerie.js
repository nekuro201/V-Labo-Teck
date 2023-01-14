function InputSerie({value, onChange}){
  return(
    <>
      <input 
        style={{
          display: "flex",
          border: "2px", 
          borderRadius: "100%", 
          backgroundColor: "#a1a1a138",
          color: "#FFF", 
          width: "50px",
          height: "50px",
          fontSize: "24px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2px",
        }}
        type="number" 
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default InputSerie;
function DeleteButton({...rest}){

  return(
    <button 
      style={{
        position: "relative",
        width: "35px",
        height: "35px",
        border: "none",
        borderRadius: "7px",
        backgroundColor: "#f11447",
        color: "#e1e1e1",
        fontSize: "24px",
        fontWeight: "bold",
        left: "95%",
      }}
      {...rest}
    >
      X
    </button>
  );
}

export default DeleteButton;
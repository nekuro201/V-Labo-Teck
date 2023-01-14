import "./style.css"; // styles de cada tipo de botão passando type

function Button({ type, children,...rest }){

  return(
    <>
      <button
        className={`btn ${type ? type : "default"}`}
        {...rest}
      >

        <div style={{position: "flex", justifyContent: "center", gap: "10px", alignItems: "center" }}>
          {children}
        </div>
      </button>
    </>
  );
}

export default Button;
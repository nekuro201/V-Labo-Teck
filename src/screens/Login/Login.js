import "./styles.css"

import Button from "../../components/Button/button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Login(){

  const { handleGoogleAccessToken } = useContext(AuthContext);

  return(
    
    <div className="login_background">
      <div className="login_background_image" />

      <div className="container">
        <div className="content">

          <div className="header_title">
            <h1>Fitness List</h1>
          </div>

          <div className="content_bottom">
            <p>Gerencie seus exercícios<br/> em um só lugar!</p>

            <Button
              type={"google"}
              onClick={handleGoogleAccessToken}
            >
              <img src="/assets/googleIcon.svg" alt="google icon" width={22} height={22} />
              
              ENTRAR COM GOOGLE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
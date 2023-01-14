import { createContext, useEffect, useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { api } from "../lib/axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('tokenResponse');
    if(token){
      setIsLogged(true)
      api.defaults.headers.common['authorization'] = `Bearer ${token}`;
    }
  },[]);

  const handleGoogleAccessToken = useGoogleLogin({
    onSuccess: tokenResponse => {
      loginWithGoogle(tokenResponse)
    },
    onError: error => {console.log(error)}
  });

  async function loginWithGoogle({access_token}){
    
    try{
      const tokenResponse = await api.post('/user', { access_token });

      api.defaults.headers.common['authorization'] = `Bearer ${tokenResponse.data}`; 

      localStorage.setItem('tokenResponse', JSON.stringify(tokenResponse.data));
      setIsLogged(true)
    }catch(error){
      console.log(error);
      throw error;
    }
  };

  async function logout(){
    try { 
      api.defaults.headers.common['authorization'] = ""; 
      localStorage.removeItem('tokenResponse')
      setIsLogged(false);

    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  return(
    <AuthContext.Provider value={{
        isLogged,
        handleGoogleAccessToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
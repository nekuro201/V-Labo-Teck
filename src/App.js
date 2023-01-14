import { useContext } from 'react';

import Login from './screens/Login/Login'
import Home from './screens/Home/Home';

import { AuthContext } from './context/AuthContext';


function App() {

  const {isLogged} = useContext(AuthContext);

  return(
    <>
      {isLogged ? <Home /> : <Login />}
    </>  
  );
}

export default App;

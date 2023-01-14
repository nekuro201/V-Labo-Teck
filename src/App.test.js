import { GoogleOAuthProvider } from '@react-oauth/google';
import { render } from '@testing-library/react';
import App from './App';
import { AuthContext } from './context/AuthContext';

test('button LOGIN should be in the document', () => {

  const isLogged = false;

  render(
    <GoogleOAuthProvider clientId={"process.env.GOOGLE_CLIENT_ID"}>
      <AuthContext.Provider value={{isLogged}}>
        <App />
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );

  const buttonElement = document.querySelector('button');
  expect(buttonElement.textContent).toBe('ENTRAR COM GOOGLE');
});

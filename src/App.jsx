import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode';

function App() {
  
  const googleClientId = import.meta.env.VITE_CLIENT_ID;

  const onLoginSuccess = (res) => {
    const decodedResponse = jwtDecode(res.credential);
    console.log(decodedResponse);
  };
  
  const onLoginError = (res) => console.log(res);

  return (
    <>
      <h1>Login with Google</h1>
        <GoogleOAuthProvider clientId={googleClientId}>
        <GoogleLogin
          onSuccess={onLoginSuccess}
          onError={onLoginError}
        />
        </GoogleOAuthProvider>
      
    </>
  )
}

export default App

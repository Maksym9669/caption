import React from 'react';
import {GoogleAPI,GoogleLogin,GoogleLogout} from 'react-google-oauth';

const responseGoogle = response => {
	
  console.log(JSON.stringify(response));
  console.log(response.Zi.access_token);
};


export default function Login(){
	return (
        <GoogleAPI clientId="1033991025049-hq3385qts2q4be91i9asu8fhs15jkpur.apps.googleusercontent.com"
        scope="https://www.googleapis.com/auth/youtube.readonly"
         >
            <div>
            	<GoogleLogin onLoginSuccess={responseGoogle}/>
            	<GoogleLogout />
            </div>
        </GoogleAPI>
	);
}
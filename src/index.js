import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleAPI,GoogleLogin,GoogleLogout} from 'react-google-oauth'

ReactDOM.render(
        <GoogleAPI clientId="1033991025049-hq3385qts2q4be91i9asu8fhs15jkpur.apps.googleusercontent.com"
        scope="https://www.googleapis.com/auth/youtube.readonly"
    >
			<div>
              	<div><GoogleLogin /></div>
              	<div><GoogleLogout /></div>
    		</div>
        </GoogleAPI>, document.getElementById('root'));




import React from "react";

class OAuthButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    };
  }

  componentDidMount() {
    // Check the URL fragment for the access token.
    const hash = window.location.hash;
    const result = hash.match(/#access_token=(.*?)&/);

    // If an access token is found, print it and save it in the state.
    if (result) {
      const token = result[1];
      console.log(token);
      this.setState({ token: token });
    //   window.location.href = "https://www.google.com";
    }
  }

  handleClick = () => {
    // Replace this URL with your actual OAuth URL.
    const url =
      "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=23R3NF&scope=activity+cardio_fitness+electrocardiogram+heartrate+location+nutrition+oxygen_saturation+profile+respiratory_rate+settings+sleep+social+temperature+weight&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2F";

    // Redirect the user to the OAuth URL.
    window.location.href = url;
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me for OAuth</button>
        {this.state.token && <p>Access Token: {this.state.token}</p>}
      </div>
    );
  }
}

export default OAuthButton;


//Santoshi Please note that redirect url needs to be https and hence we need to also set https dev server
//which needs certificate, we are creating self signed certificate for this purpose.
// you can refer to https://github.com/FiloSottile/mkcert for windows . This tool will help you 
// create certificate, or you could use any if previously available for your localhost domain

// fitbit now supports  response_type as code. response_type as token type is deprecated but still works. 
// In my example I have used token for the moment to avoid a server trip.
// If I change it to code then I would need to use a self hosted server or serverless function to make a 
// call to oauth again with grant code with secret. 

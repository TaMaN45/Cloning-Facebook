import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Paper } from "@material-ui/core";
import firebase from "firebase";
import Logo from "./../../assets/images/fb_text.png";
import Style from "./Style";

const Login = () => {
  const classes = Style();

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  return (
    <div className={classes.login__container}>
      <Paper elevation={3} className={classes.login}>
        <div className={classes.logo}>
          <img src={Logo} alt="linked-in-logo" />
          <h4>Clone</h4>
        </div>
        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
          <input disabled type="email" value="" placeholder="email" />
          <input disabled type="password" value="" placeholder="password" />
          <button disabled>Log In</button>
        </form>
        <div className={classes.google}>
          <section>
            <div></div>
            <p>OR</p>
            <div></div>
          </section>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
        <div className={classes.about}>
          <section>
            <div></div>
            <button >Create New Account</button>
            <div></div>
          </section>
          <div>
           
           
          </div>
        </div>
      </Paper>
    </div>
  );
};



export default Login;

import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabs,
  IonIcon,
  IonLabel,
  IonTabButton,
  IonBadge,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { fastFood, home, mail, personCircle } from "ionicons/icons";
import Free from "./pages/Menu/Free";
import Paid from "./pages/Menu/Paid";
import Message from "./pages/Menu/Message";
import Profile from "./pages/Menu/Profile";
import CreateFree from "./pages/Menu/CreateFree";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import TabBar from "./components/Layout/TabBar";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { getCurrentUser } from "./firebase";
import {useEffect} from 'react';
import { setUserState } from "./redux/action";
import {useDispatch} from 'react-redux'

const RoutingSystem: React.FC = () => {
  return (
    <IonReactRouter>
     {/* // <IonTabs> */}
       <IonRouterOutlet>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/free" component={Free}  />
          <Route exact path="/paid" component={Paid} />
          <Route exact path="/message" component={Message} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/createFree" component={CreateFree} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        {/* <IonTabBar slot="bottom">
       <IonTabButton tab="free" href="/free">
        <IonIcon icon={fastFood} />
        <IonLabel>Free</IonLabel>
      </IonTabButton>
      <IonTabButton tab="paid" href="/paid">
        <IonIcon icon={home} />
        <IonLabel>Paid</IonLabel>
      </IonTabButton>
      <IonTabButton tab="message" href="/message">
        <IonIcon icon={mail} />
        <IonLabel>Message</IonLabel>
        <IonBadge>99</IonBadge> 
      </IonTabButton>
      <IonTabButton tab="profile" href="/profile">
        <IonIcon icon={personCircle} />
        <IonLabel>Profile</IonLabel>
      </IonTabButton>
    </IonTabBar> */}
    {/* </IonTabs> */}
  </IonReactRouter>
  )
}

const App: React.FC = () => {

  useEffect(() => {
  getCurrentUser().then((user : any) => {
    if(user){
     window.history.replaceState({}, '', '/free') 
   } else {
    window.history.replaceState({}, '', '/') 
   }
    })
  }, [])
  return(
  <IonApp>
      <RoutingSystem />
  </IonApp>
  )
}

export default App

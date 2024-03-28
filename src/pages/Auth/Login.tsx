import {
  IonGrid,
  IonCol,
  IonRow,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
IonLoading,
  IonItem,

  IonInput,
  IonCard,
  IonButton,

} from "@ionic/react";
import "./Login.css";
import React, { useState, useEffect } from "react";
import { loginUser } from "../../firebase";
import { toast } from "../../toast";
import { setUserState } from "../../redux/action";
import { useDispatch} from 'react-redux';
import { useHistory } from "react-router";


const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()
  const [ showLoading, setShowLoading] = useState<boolean>(false)


  async function login() {
    setShowLoading(true)
    const result : any = await loginUser(email, password);
    if (!result) {
      toast("login failed");
    } else {
      history.replace('/free')
      toast("login successfully");
    }
    setShowLoading(false)
  }
  return (
    <section>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle className="ion-margin">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-justify-content-center">
        <IonLoading message="Please wait....." duration={0} isOpen={showLoading}/>
          <IonCard className="ion-card mg-top">
          <IonTitle className="ion-title ion-text-center ion-padding ion-margin">Login</IonTitle>
            <IonGrid className="ion-margin-top">
              <IonRow className="ion-justify-content-between">
                <IonCol size="0.5" />
                <IonCol size="9" className="mg-col">
                  <IonItem>
                    <IonInput
                      type="email"
                      placeholder="Email"
                      onIonChange={(e: any) => setEmail(e.target.value)}
                    />
                  </IonItem>
                  <IonItem>
                    <IonInput
                      type="password"
                      placeholder="Password"
                      onIonChange={(e: any) => setPassword(e.target.value)}
                    />
                  </IonItem>
                </IonCol>
                <IonCol size="0.5" />
              </IonRow>
              <IonRow className="ion-justify-content-between ion-margin">
                <IonCol size="0.5" />
                <IonCol size="8">
                  <IonButton expand="block" onClick={login}>
                    Login
                  </IonButton>
                </IonCol>

                <IonCol size="0.5" />
              </IonRow>
            </IonGrid>
          </IonCard>
        </IonContent>{" "}
      </IonPage>
    </section>
  );
};

export default Login;

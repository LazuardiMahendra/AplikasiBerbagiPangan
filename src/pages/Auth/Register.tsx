import {
  IonGrid,
  IonCol,
  IonRow,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,

  IonInput,
  IonCard,
  IonButton,
  IonText,
  IonLoading,
} from "@ionic/react";
import "../../assets/css/style.css";
import React, { useState, useEffect } from "react";

import "./Register.css";
import { registerUser } from "../../firebase";
import { toast } from "../../toast";
import { useHistory } from "react-router";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [ showLoading, setShowLoading] = useState<boolean>(false)
  const history= useHistory()

 async function register() {
 // setShowLoading(true)
  if(password !== cpassword){
    return toast (' Password do not match')
  }
  if (email.trim() === '' || password.trim() ===''){
    return toast ('Username or Password are required')
  }

  const result = await registerUser(email, password)
  if(result){
    toast('You have regitered successfully')
   
    history.replace('/home')
}
//setShowLoading(false)

}

  return (
    <section>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-justify-content-center">
          {/* <IonLoading message="Registration in prosses" duration={0} isOpen={showLoading}/> */}
          <IonCard className="ion-card mg-top">
          <IonTitle className="ion-title ion-text-center ion-padding ion-margin">Register</IonTitle>
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
                  <IonItem>
                    <IonInput
                      type="password"
                      placeholder="Confirm Password"
                      onIonChange={(e: any) => setCpassword(e.target.value)}
                    />
                  </IonItem>
                </IonCol>
                <IonCol size="0.5" />
              </IonRow>
              <IonRow className="ion-justify-content-between ion-margin  ">
                <IonCol size="1" />
                <IonCol size="8">
                  <IonButton expand="block" onClick={register}>
                    Register
                  </IonButton>
                </IonCol>

                <IonCol size="0.5" />
              </IonRow>
            </IonGrid>
          </IonCard>
        </IonContent>
      </IonPage>
    </section>
  );
};

export default Register;

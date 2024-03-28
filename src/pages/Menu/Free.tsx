import React, { useState, useEffect } from "react";
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
  IonList,
  IonInput,
  IonCard,
  IonButton,
  IonIcon,
  IonCardHeader,
  IonImg,
  IonCardTitle,
  IonCardSubtitle,
  IonFab,
  IonFabButton,
  IonText,
  IonLoading,
} from "@ionic/react";
import { add, logOut } from "ionicons/icons";
import "../../assets/css/style.css";
import img1 from "../../assets/images/sate-ayam.jpg";
import {logoutUser} from '../../firebase'
import { useHistory } from "react-router";

const items = [
  {
    title: "Sate Ayam",
    name: "Lazu",
    range: "70km",
    photo: { img1 },
  },
];

const Free: React.FC = () => {
  const history = useHistory()
  const [showLoading, setShowLoading] = useState(false)

  async function logout() {
    setShowLoading(true)
    await logoutUser()
    setShowLoading(false)
    history.replace('/')
  }

  return (
    <section className="free">
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Free</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonLoading message="Logging out..." duration={4000} isOpen={showLoading} />
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton href="/createFree">
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
          <IonList>
            <IonCard>
              {items.map((i) => (
                <IonItem key={i.title}>
                  <IonImg slot="start" src={img1} className="img-mg img-item" />
                  <IonCardHeader>
                    <IonCardTitle>{i.title}</IonCardTitle>
                    <IonCardSubtitle>{i.name}</IonCardSubtitle>
                    <IonCardSubtitle>{i.range}</IonCardSubtitle>
                  </IonCardHeader>
                </IonItem>
              ))}
            </IonCard>
          </IonList>
          <IonButton expand="block" onClick={logout}>Logout</IonButton>
        </IonContent>
      </IonPage>
    </section>
  );
};

export default Free;

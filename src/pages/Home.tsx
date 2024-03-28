import {
  IonGrid,
  IonCol,
  IonRow,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonList,
  IonInput,
  IonCardContent,
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
  IonRouterLink
} from "@ionic/react";
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
import "../theme/variables.css";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
 <IonCard className="ion-cards">
   <IonGrid>
     <IonRow className="ion-justify-content-between ion-text-center ion-margin mg-button ">
     <IonCol size="0.5" />       
     <IonCol size="10"> 
     <IonButton expand="block" href="/register">Register</IonButton>
     <IonText className="ion-margin-top">Already have an account ? <IonRouterLink href="/login">Log In</IonRouterLink></IonText>
     </IonCol>
     <IonCol size="0.5" />
     </IonRow>
   </IonGrid>
 </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Home;

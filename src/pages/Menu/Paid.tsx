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
  IonRadio,
  IonToggle,
  IonCheckbox,
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
} from "@ionic/react";
import { add, personCircle } from "ionicons/icons";
import ExploreContainer from "../../components/ExploreContainer";
import "../../assets/css/style.css";

import img1 from "../../assets/images/sate-ayam.jpg";
const Paid: React.FC = () => {
  return (
    <section className="paid">
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Paid</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
          <IonList>
            <IonCard>
              <IonItem>
                <IonImg slot="start" src={img1} className="img-mg img-item" />
                <IonCardHeader>
                  <IonCardTitle>Sate Ayam</IonCardTitle>
                  <IonCardSubtitle>Lazu</IonCardSubtitle>
                  <IonCardSubtitle>99km</IonCardSubtitle>
                </IonCardHeader>
              </IonItem>
            </IonCard>
            <IonCard>
              <IonItem>
                <IonImg slot="start" src={img1} className="img-mg img-item" />
                <IonCardHeader>
                  <IonCardTitle>Sate Ayam</IonCardTitle>
                  <IonCardSubtitle>Lazu</IonCardSubtitle>
                  <IonCardSubtitle>99km</IonCardSubtitle>
                </IonCardHeader>
              </IonItem>
            </IonCard>
            <IonCard>
              <IonItem>
                <IonImg slot="start" src={img1} className="img-mg img-item" />
                <IonCardHeader>
                  <IonCardTitle>Sate Ayam</IonCardTitle>
                  <IonCardSubtitle>Lazu</IonCardSubtitle>
                  <IonCardSubtitle>99km</IonCardSubtitle>
                </IonCardHeader>
              </IonItem>
            </IonCard>
            <IonCard>
              <IonItem>
                <IonImg slot="start" src={img1} className="img-mg img-item" />
                <IonCardHeader>
                  <IonCardTitle>Sate Ayam</IonCardTitle>
                  <IonCardSubtitle>Lazu</IonCardSubtitle>
                  <IonCardSubtitle>99km</IonCardSubtitle>
                </IonCardHeader>
              </IonItem>
            </IonCard>
            <IonCard>
              <IonItem>
                <IonImg slot="start" src={img1} className="img-mg img-item" />
                <IonCardHeader>
                  <IonCardTitle>Sate Ayam</IonCardTitle>
                  <IonCardSubtitle>Lazu</IonCardSubtitle>
                  <IonCardSubtitle>99km</IonCardSubtitle>
                </IonCardHeader>
              </IonItem>
            </IonCard>
            <IonCard>
              <IonItem>
                <IonImg slot="start" src={img1} className="img-mg img-item" />
                <IonCardHeader>
                  <IonCardTitle>Sate Ayam</IonCardTitle>
                  <IonCardSubtitle>Lazu</IonCardSubtitle>
                  <IonCardSubtitle>99km</IonCardSubtitle>
                </IonCardHeader>
              </IonItem>
            </IonCard>
          </IonList>
        </IonContent>
      </IonPage>
    </section>
  );
};

export default Paid;

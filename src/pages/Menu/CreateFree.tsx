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

const CreateFree: React.FC = () => {
  return (
    <section className="createFree">
      <IonHeader>
        <IonToolbar>
          <IonTitle> Create Free Item</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonInput placeholder="example: Sate Ayam" />
          <IonInput placeholder="example: Sate Ayam" />
          <IonInput placeholder="example: Sate Ayam" />
        </IonCard>
      </IonContent>
    </section>
  );
};

export default CreateFree;

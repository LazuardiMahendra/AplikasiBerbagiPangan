import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonBadge,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { fastFood, home, mail, personCircle } from "ionicons/icons";

const TabBar: React.FC = () => {

return(
  <IonTabs>
    <IonTabBar slot="bottom">
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
    </IonTabBar>
  </IonTabs>
);
}

export default TabBar;

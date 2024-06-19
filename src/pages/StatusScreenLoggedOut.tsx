import { FunctionComponent } from "react";
import HeaderNonLogin from "../components/HeaderNonLogin";
import HealthCard from "../components/HealthCard";
import ActivityFeed from "../components/ActivityFeed";
import styles from "./StatusScreenLoggedOut.module.css";

const StatusScreenLoggedOut: FunctionComponent = () => {
  return (
    <div className={styles.statusScreenLoggedOut}>
      <HeaderNonLogin />
      <section className={styles.features}>
        <div className={styles.health}>
          <HealthCard />
          <ActivityFeed />
        </div>
      </section>
    </div>
  );
};

export default StatusScreenLoggedOut;

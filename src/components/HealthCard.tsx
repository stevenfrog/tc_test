import { FunctionComponent } from "react";
import styles from "./HealthCard.module.css";

export type HealthCardType = {
  className?: string;
};

const HealthCard: FunctionComponent<HealthCardType> = ({ className = "" }) => {
  return (
    <div className={[styles.healthCard, className].join(" ")}>
      <div className={styles.healthInnerCard}>
        <div className={styles.healthInnerCardContainer}>
          <div className={styles.healthInnerCardContent}>
            <div className={styles.healthStatus}>
              <h3 className={styles.healthStatus1}>HEALTH STATUS</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardDivider} />
      <div className={styles.dataMetrics}>
        <div className={styles.dataMetricCards}>
          <div className={styles.dataMetricCardTitles}>
            <div className={styles.product}>PRODUCT</div>
            <img
              className={styles.info96}
              loading="lazy"
              alt=""
              src="/info-9-6.svg"
            />
          </div>
          <div className={styles.dataMetricCardTitles1}>
            <div className={styles.lastModified}>LAST MODIFIED</div>
            <img
              className={styles.info91}
              loading="lazy"
              alt=""
              src="/info-9-6.svg"
            />
          </div>
          <div className={styles.dataMetricCardTitles2}>
            <div className={styles.activeUsers}>Active Users</div>
            <img
              className={styles.info94}
              loading="lazy"
              alt=""
              src="/info-9-6.svg"
            />
          </div>
          <div className={styles.dataMetricCardTitles3}>
            <div className={styles.batchRecordsProcessedParent}>
              <div className={styles.batchRecordsProcessed}>
                Batch Records Processed
              </div>
              <img
                className={styles.info95}
                loading="lazy"
                alt=""
                src="/info-9-6.svg"
              />
            </div>
          </div>
          <div className={styles.dataMetricCardTitles4}>
            <div className={styles.realTimeRecordsProcessedParent}>
              <div className={styles.realTimeRecordsProcessed}>
                Real-time Records Processed
              </div>
              <img
                className={styles.info951}
                loading="lazy"
                alt=""
                src="/info-9-6.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCard;

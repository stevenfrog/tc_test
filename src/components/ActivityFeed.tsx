import { FunctionComponent, useState, useCallback } from "react";
import { TextField, Icon, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./ActivityFeed.module.css";

export type ActivityFeedType = {
  className?: string;
};

const ActivityFeed: FunctionComponent<ActivityFeedType> = ({
  className = "",
}) => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] = useState(
    new Date("2024-01-01")
  );
  const [frameDateTimePicker1Value, setFrameDateTimePicker1Value] = useState(
    new Date("2024-01-01")
  );
  const [frameDateTimePicker2Value, setFrameDateTimePicker2Value] = useState(
    new Date("2024-01-01")
  );
  const [frameDateTimePicker3Value, setFrameDateTimePicker3Value] = useState(
    new Date("2024-01-01")
  );
  const [frameDateTimePicker4Value, setFrameDateTimePicker4Value] = useState(
    new Date("2024-01-01")
  );
  const [frameDateTimePicker5Value, setFrameDateTimePicker5Value] = useState(
    new Date("2024-01-01")
  );
  const [frameDateTimePicker6Value, setFrameDateTimePicker6Value] = useState(
    new Date("2024-01-01")
  );
  const [frameDateTimePicker7Value, setFrameDateTimePicker7Value] = useState(
    new Date("2024-01-01")
  );
  const [frameDateTimePicker8Value, setFrameDateTimePicker8Value] = useState(
    new Date("2024-01-01")
  );
  const [frameDateTimePicker9Value, setFrameDateTimePicker9Value] = useState(
    new Date("2024-01-01")
  );

  const onBtnClick = useCallback(() => {
    // Please sync "01_2Subscribe Email" to the project
  }, []);

  const onBtnClick1 = useCallback(() => {
    // Please sync "01_3Contact Us" to the project
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={[styles.activityFeed, className].join(" ")}>
        <div className={styles.activityFeedContent}>
          <div className={styles.activityFeedCards}>
            <div className={styles.activityCards}>
              <div className={styles.activityCardDetails}>
                <div className={styles.activityCardItems}>
                  <div className={styles.activityItems}>
                    <img
                      className={styles.toolIcon}
                      loading="lazy"
                      alt=""
                      src="/tool.svg"
                    />
                  </div>
                  <div className={styles.activityApiNames}>
                    <div className={styles.rainforestApi}>Rainforest API</div>
                  </div>
                </div>
                <div className={styles.wrapper}>
                  <DatePicker
                    value={frameDateTimePickerValue}
                    onChange={(newValue: any) => {
                      setFrameDateTimePickerValue(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "transparent",
                        borderTopWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "transparent" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "#333",
                        fontSize: 13,
                      },
                      input: {
                        color: "#333",
                        fontSize: 13,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        height: 18,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                      },
                      openPickerIcon: {
                        component: () => <></>,
                      },
                    }}
                  />
                </div>
                <div className={styles.userCounts}>
                  <div className={styles.users}>52 users</div>
                </div>
                <div className={styles.container}>
                  <div className={styles.div}>12</div>
                </div>
                <div className={styles.div1}>10,120</div>
              </div>
            </div>
            <div className={styles.activityCards1}>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.activityWrapper}>
                    <img
                      className={styles.activityIcon}
                      loading="lazy"
                      alt=""
                      src="/activity.svg"
                    />
                  </div>
                  <div className={styles.scaleSerpWrapper}>
                    <div className={styles.scaleSerp}>Scale SERP</div>
                  </div>
                </div>
                <div className={styles.frame}>
                  <DatePicker
                    value={frameDateTimePicker1Value}
                    onChange={(newValue: any) => {
                      setFrameDateTimePicker1Value(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "transparent",
                        borderTopWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "transparent" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "#333",
                        fontSize: 13,
                      },
                      input: {
                        color: "#333",
                        fontSize: 13,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        height: 18,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                      },
                      openPickerIcon: {
                        component: () => <></>,
                      },
                    }}
                  />
                </div>
                <div className={styles.users1}>52 users</div>
                <div className={styles.frameDiv}>
                  <div className={styles.div2}>12</div>
                </div>
                <div className={styles.div3}>10,120</div>
              </div>
            </div>
            <div className={styles.activityCards2}>
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.activityContainer}>
                    <img
                      className={styles.activityIcon1}
                      loading="lazy"
                      alt=""
                      src="/activity.svg"
                    />
                  </div>
                  <div className={styles.asinDataApiWrapper}>
                    <div className={styles.asinDataApi}>ASIN Data API</div>
                  </div>
                </div>
                <div className={styles.wrapper1}>
                  <DatePicker
                    value={frameDateTimePicker2Value}
                    onChange={(newValue: any) => {
                      setFrameDateTimePicker2Value(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "transparent",
                        borderTopWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "transparent" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "#333",
                        fontSize: 13,
                      },
                      input: {
                        color: "#333",
                        fontSize: 13,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        height: 18,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                      },
                      openPickerIcon: {
                        component: () => <></>,
                      },
                    }}
                  />
                </div>
                <div className={styles.usersWrapper}>
                  <div className={styles.users2}>52 users</div>
                </div>
                <div className={styles.wrapper2}>
                  <div className={styles.div4}>12</div>
                </div>
                <div className={styles.div5}>10,120</div>
              </div>
            </div>
            <div className={styles.activityCards3}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.unhealthWrapper}>
                    <img
                      className={styles.unhealthIcon}
                      loading="lazy"
                      alt=""
                      src="/unhealth.svg"
                    />
                  </div>
                  <div className={styles.valueSerpWrapper}>
                    <div className={styles.valueSerp}>Value SERP</div>
                  </div>
                </div>
                <div className={styles.wrapper3}>
                  <DatePicker
                    value={frameDateTimePicker3Value}
                    onChange={(newValue: any) => {
                      setFrameDateTimePicker3Value(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "transparent",
                        borderTopWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "transparent" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "#333",
                        fontSize: 13,
                      },
                      input: {
                        color: "#333",
                        fontSize: 13,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        height: 18,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                      },
                      openPickerIcon: {
                        component: () => <></>,
                      },
                    }}
                  />
                </div>
                <div className={styles.users3}>52 users</div>
                <div className={styles.wrapper4}>
                  <div className={styles.div6}>12</div>
                </div>
                <div className={styles.div7}>10,120</div>
              </div>
            </div>
            <div className={styles.activityCards4}>
              <div className={styles.frameParent4}>
                <div className={styles.frameParent5}>
                  <div className={styles.activityFrame}>
                    <img
                      className={styles.activityIcon2}
                      loading="lazy"
                      alt=""
                      src="/activity.svg"
                    />
                  </div>
                  <div className={styles.bluecartWrapper}>
                    <div className={styles.bluecart}>BlueCart</div>
                  </div>
                </div>
                <div className={styles.wrapper5}>
                  <DatePicker
                    value={frameDateTimePicker4Value}
                    onChange={(newValue: any) => {
                      setFrameDateTimePicker4Value(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "transparent",
                        borderTopWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "transparent" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "#333",
                        fontSize: 13,
                      },
                      input: {
                        color: "#333",
                        fontSize: 13,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        height: 18,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                      },
                      openPickerIcon: {
                        component: () => <></>,
                      },
                    }}
                  />
                </div>
                <div className={styles.users4}>52 users</div>
                <div className={styles.wrapper6}>
                  <div className={styles.div8}>12</div>
                </div>
                <div className={styles.div9}>10,120</div>
              </div>
            </div>
            <div className={styles.activityCards5}>
              <div className={styles.frameParent6}>
                <div className={styles.frameParent7}>
                  <div className={styles.toolWrapper}>
                    <img
                      className={styles.toolIcon1}
                      loading="lazy"
                      alt=""
                      src="/tool.svg"
                    />
                  </div>
                  <div className={styles.countdownApiWrapper}>
                    <div className={styles.countdownApi}>Countdown API</div>
                  </div>
                </div>
                <div className={styles.wrapper7}>
                  <DatePicker
                    value={frameDateTimePicker5Value}
                    onChange={(newValue: any) => {
                      setFrameDateTimePicker5Value(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "transparent",
                        borderTopWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "transparent" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "#333",
                        fontSize: 13,
                      },
                      input: {
                        color: "#333",
                        fontSize: 13,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        height: 18,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                      },
                      openPickerIcon: {
                        component: () => <></>,
                      },
                    }}
                  />
                </div>
                <div className={styles.usersContainer}>
                  <div className={styles.users5}>52 users</div>
                </div>
                <div className={styles.wrapper8}>
                  <div className={styles.div10}>12</div>
                </div>
                <div className={styles.div11}>10,120</div>
              </div>
            </div>
            <div className={styles.activityCards6}>
              <div className={styles.frameParent8}>
                <div className={styles.frameParent9}>
                  <div className={styles.activityWrapper1}>
                    <img
                      className={styles.activityIcon3}
                      loading="lazy"
                      alt=""
                      src="/activity.svg"
                    />
                  </div>
                  <div className={styles.serpwowWrapper}>
                    <div className={styles.serpwow}>SerpWow</div>
                  </div>
                </div>
                <div className={styles.wrapper9}>
                  <DatePicker
                    value={frameDateTimePicker6Value}
                    onChange={(newValue: any) => {
                      setFrameDateTimePicker6Value(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "transparent",
                        borderTopWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "transparent" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "#333",
                        fontSize: 13,
                      },
                      input: {
                        color: "#333",
                        fontSize: 13,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        height: 18,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                      },
                      openPickerIcon: {
                        component: () => <></>,
                      },
                    }}
                  />
                </div>
                <div className={styles.users6}>52 users</div>
                <div className={styles.wrapper10}>
                  <div className={styles.div12}>12</div>
                </div>
                <div className={styles.div13}>10,120</div>
              </div>
            </div>
            <div className={styles.activityCards7}>
              <div className={styles.frameParent10}>
                <div className={styles.frameParent11}>
                  <div className={styles.activityWrapper2}>
                    <img
                      className={styles.activityIcon4}
                      loading="lazy"
                      alt=""
                      src="/activity.svg"
                    />
                  </div>
                  <div className={styles.redCircleApiWrapper}>
                    <div className={styles.redCircleApi}>Red Circle API</div>
                  </div>
                </div>
                <div className={styles.wrapper11}>
                  <DatePicker
                    value={frameDateTimePicker7Value}
                    onChange={(newValue: any) => {
                      setFrameDateTimePicker7Value(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "transparent",
                        borderTopWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "transparent" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "#333",
                        fontSize: 13,
                      },
                      input: {
                        color: "#333",
                        fontSize: 13,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        height: 18,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                      },
                      openPickerIcon: {
                        component: () => <></>,
                      },
                    }}
                  />
                </div>
                <div className={styles.usersFrame}>
                  <div className={styles.users7}>52 users</div>
                </div>
                <div className={styles.wrapper12}>
                  <div className={styles.div14}>12</div>
                </div>
                <div className={styles.div15}>10,120</div>
              </div>
            </div>
            <div className={styles.activityCards8}>
              <div className={styles.frameParent12}>
                <div className={styles.frameParent13}>
                  <div className={styles.activityWrapper3}>
                    <img
                      className={styles.activityIcon5}
                      loading="lazy"
                      alt=""
                      src="/activity.svg"
                    />
                  </div>
                  <div className={styles.backyardApiWrapper}>
                    <div className={styles.backyardApi}>Backyard API</div>
                  </div>
                </div>
                <div className={styles.wrapper13}>
                  <DatePicker
                    value={frameDateTimePicker8Value}
                    onChange={(newValue: any) => {
                      setFrameDateTimePicker8Value(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "transparent",
                        borderTopWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "transparent" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "#333",
                        fontSize: 13,
                      },
                      input: {
                        color: "#333",
                        fontSize: 13,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        height: 18,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                      },
                      openPickerIcon: {
                        component: () => <></>,
                      },
                    }}
                  />
                </div>
                <div className={styles.usersWrapper1}>
                  <div className={styles.users8}>52 users</div>
                </div>
                <div className={styles.wrapper14}>
                  <div className={styles.div16}>12</div>
                </div>
                <div className={styles.div17}>10,120</div>
              </div>
            </div>
            <div className={styles.activityCards9}>
              <div className={styles.frameParent14}>
                <div className={styles.frameParent15}>
                  <div className={styles.activityWrapper4}>
                    <img
                      className={styles.activityIcon6}
                      loading="lazy"
                      alt=""
                      src="/activity.svg"
                    />
                  </div>
                  <div className={styles.bigBoxApiWrapper}>
                    <div className={styles.bigBoxApi}>Big Box API</div>
                  </div>
                </div>
                <div className={styles.wrapper15}>
                  <DatePicker
                    value={frameDateTimePicker9Value}
                    onChange={(newValue: any) => {
                      setFrameDateTimePicker9Value(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "transparent",
                        borderTopWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "transparent" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "#333",
                        fontSize: 13,
                      },
                      input: {
                        color: "#333",
                        fontSize: 13,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        height: 18,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                      },
                      openPickerIcon: {
                        component: () => <></>,
                      },
                    }}
                  />
                </div>
                <div className={styles.users9}>52 users</div>
                <div className={styles.wrapper16}>
                  <div className={styles.div18}>12</div>
                </div>
                <div className={styles.div19}>10,120</div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.subscription}>
              <div className={styles.subscriptionContent}>
                <div className={styles.subscriptionForm}>
                  <div className={styles.subscribePrompt}>
                    <img
                      className={styles.bellIcon}
                      loading="lazy"
                      alt=""
                      src="/bell.svg"
                    />
                    <div className={styles.subscribe}>SUBSCRIBE</div>
                  </div>
                </div>
                <div className={styles.subscriptionDescription}>
                  <div className={styles.description}>
                    <div className={styles.stayInformedAndStayAheadWrapper}>
                      <div className={styles.stayInformedAnd}>
                        Stay informed and stay ahead! Subscribe to our email
                        alerts for important alerts and completed tasks.
                      </div>
                    </div>
                    <Button
                      className={styles.btn}
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "13",
                        background: "#00664f",
                        borderRadius: "4px",
                        "&:hover": { background: "#00664f" },
                        height: 34,
                      }}
                      onClick={onBtnClick}
                    >
                      Subscribe Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.contactContent}>
                <div className={styles.contactForm}>
                  <div className={styles.contactPrompt}>
                    <img
                      className={styles.sendIcon}
                      loading="lazy"
                      alt=""
                      src="/send.svg"
                    />
                    <div className={styles.contactUs}>Contact Us</div>
                  </div>
                  <div className={styles.gotQuestionsOr}>
                    Got questions or spotted a bug? Reach out to us! We're here
                    to help.
                  </div>
                </div>
                <Button
                  className={styles.btn1}
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "13",
                    background: "#00664f",
                    borderRadius: "4px",
                    "&:hover": { background: "#00664f" },
                    height: 34,
                  }}
                  onClick={onBtnClick1}
                >
                  Send Message
                </Button>
              </div>
            </div>
            <div className={styles.faq}>
              <div className={styles.faqContent}>
                <div className={styles.faqForm}>
                  <div className={styles.faqPrompt}>
                    <div className={styles.faqIcon}>
                      <img
                        className={styles.helpIcon}
                        loading="lazy"
                        alt=""
                        src="/help.svg"
                      />
                      <div className={styles.faqs}>FAQ’s</div>
                    </div>
                  </div>
                  <div className={styles.haveQuestionsExplore}>
                    Have questions? Explore our FAQ for quick solutions.
                  </div>
                </div>
                <Button
                  className={styles.btn2}
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "13",
                    background: "#00664f",
                    borderRadius: "4px",
                    "&:hover": { background: "#00664f" },
                    height: 34,
                  }}
                >
                  View FAQ’s
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default ActivityFeed;

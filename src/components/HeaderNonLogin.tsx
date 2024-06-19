import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import styles from "./HeaderNonLogin.module.css";

export type HeaderNonLoginType = {
  className?: string;
};

const HeaderNonLogin: FunctionComponent<HeaderNonLoginType> = ({
  className = "",
}) => {
  return (
    <header className={[styles.headerNonLogin, className].join(" ")}>
      <div className={styles.headerBackgroundInnerWrapper}>
        <div className={styles.headerBackgroundInner} />
      </div>
      <div className={styles.topNavigation}>
        <nav className={styles.navigationLinks}>
          <div className={styles.aboutContactLinks}>
            <a className={styles.aboutTraject}>ABOUT TRAJECT</a>
          </div>
          <div className={styles.navigationLinksInner}>
            <FormControl
              className={styles.parent}
              variant="standard"
              sx={{
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                borderRadius: "0px 0px 0px 0px",
                width: "88px",
                height: "18px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "18px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "18px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "18px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "18px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#ccc",
                  fontSize: 13,
                  fontWeight: "SemiBold",
                  fontFamily: "Open Sans",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="8px"
                    height="4px"
                    src="/resource-icon-image.svg"
                    style={{}}
                  />
                )}
              >
                <MenuItem>RESOURCES</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className={styles.aboutContactLinks1}>
            <a className={styles.contactUs}>CONTACT US</a>
          </div>
          <div className={styles.userParent}>
            <img
              className={styles.userIcon}
              loading="lazy"
              alt=""
              src="/user.svg"
            />
            <div className={styles.signInWrapper}>
              <a className={styles.signIn}>SIGN IN</a>
            </div>
          </div>
        </nav>
      </div>
      <div className={styles.headerDivider} />
      <div className={styles.content}>
        <div className={styles.logoContainerParent}>
          <div className={styles.logoContainer}>
            <img
              className={styles.trajectdataLogo1Icon}
              loading="lazy"
              alt=""
              src="/trajectdata-logo-1.svg"
            />
          </div>
          <div className={styles.apiCategories}>
            <div className={styles.apiCategoryCards}>
              <FormControl
                className={styles.apiCardTitles}
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "92.64705882352942%",
                  height: "19px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "19px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "19px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "19px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "19px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#ccc",
                    fontSize: 14,
                    fontWeight: "SemiBold",
                    fontFamily: "Open Sans",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="8px"
                      height="4px"
                      src="/vector-11-1.svg"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>Ecommerce APIs</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div className={styles.apiCategoryCards1}>
              <FormControl
                className={styles.group}
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "80px",
                  height: "19px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "19px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "19px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "19px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "19px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#ccc",
                    fontSize: 14,
                    fontWeight: "SemiBold",
                    fontFamily: "Open Sans",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="8px"
                      height="4px"
                      src="/vector-11-2.svg"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>SERP APIs</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div className={styles.apiCategoryCards2}>
              <a className={styles.enterprise}>Enterprise</a>
            </div>
            <div className={styles.apiCategoryCards3}>
              <a className={styles.pricing}>Pricing</a>
            </div>
            <Button
              className={styles.findApi}
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#cbcbc9",
                fontSize: "14",
                borderColor: "#fff",
                borderRadius: "4px",
                "&:hover": { borderColor: "#fff" },
                height: 42,
              }}
            >
              FIND YOUR API
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNonLogin;

import React from 'react';
import CookieConsent from 'react-cookie-consent';
export const CookieBanner = () => {
  return (
    <CookieConsent
    style={{ background: "#2B373B" }}
    buttonStyle={{ padding:'',backgroundColor:  "var(--primary)", color:"var(--white)" }}>
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

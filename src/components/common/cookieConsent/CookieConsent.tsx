import React from 'react';
import CookieConsent from 'react-cookie-consent';
export const CookieBanner = () => {
  return (
    <CookieConsent
    overlay={true}
    acceptOnScroll={true}
    acceptOnScrollPercentage={10}
    debug={true}
    style={{ background: "#2B373B" }}
    buttonStyle={{ padding:'.75rem',backgroundColor:  "var(--primary)", color:"var(--white)" }}>
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

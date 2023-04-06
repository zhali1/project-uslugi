import React from "react";
import Contacts from "./Contacts";
import Feedback from "./Feedback";
import Footer from "./Footer";
import Glazing from "./Glazing";
import Guarantees from "./Guarantees";
import Main from "./Main";
import Payment from "./Payment";
import Modals from "./Modals";
import Sale from "./Sale";
import Slider from "./Slider";
import Works from "./Works";

function Index() {
  return (
    <>
      <Main />
      <Glazing />
      <Slider />
      <Works />
      <Guarantees />
      <Payment />
      <Sale />
      <Contacts />
      <Feedback />
      <Footer />
      <Modals />
    </>
  );
}

export default Index;

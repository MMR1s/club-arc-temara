import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Nav from "./component/Nav.jsx";
import MainComp from "./component/MainComp";
import Adhesion from "./component/Adhesion";
import Tips from "./component/MembershipAdvantages.jsx";
import Gallery from "./component/Gallery";
import ActivitiesEntrainement from "./component/ActivitiesEntrainement.jsx";
import Events from "./component/Events/Events.jsx";
import AboutUs from "./component/AboutUs";
import Animation from "./component/Animation.jsx";
import Faq from "./component/Faq.jsx";
import ContactUs from "./component/ContactUs.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <>
      {" "}
      {/* <div className="archery-container"> */}
      <Nav />
      <MainComp />
      <div style={{ backgroundColor: "#e4b419" }}>
        <Adhesion />
      </div>
      {/* <Tips /> */}
      <Gallery />
      <ActivitiesEntrainement />
      <Events />
      <Animation />
      <Faq />
      <ContactUs />
      <Footer />
      {/* <AboutUs /> */}
      {/* </div>{" "} */}
    </>
  );
}

export default App;

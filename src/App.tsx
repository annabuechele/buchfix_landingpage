import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponentLayoutStart from "./components/ComponentLayoutStart/ComponentLayoutStart";
import ComponentLayoutSection from "./components/ComponentLayoutSection/ComponentLayoutSection";
import ComponentContentItem from "./components/ComponentContentItem/ComponentContentItem";
import startImage from "./images/pic-startpage.jpg";
import ComponentLayoutFooterSection from "./components/ComponentLayoutFooterSection/ComponentLayoutFooterSection";
import ComponentContentItemText from "./components/ComponentContentItemText/ComponentContentItemText";

function App() {
  const NavItems = [
    {
      link: "aboutUs",
      text: "about us",
    },
    {
      link: "contactUs",
      text: "contact",
    },
    {
      link: "ourLocation",
      text: "location",
    },
  ];
  return (
    <div className="App">
      <ComponentLayoutStart
        navitems={NavItems}
        header="buchfix"
        image={startImage}
      />

      <ComponentLayoutSection
        id={NavItems[0].link}
        linkChild={
          <ComponentContentItem itemDown="about us" itemUp="learn more" />
        }
        contentChild={
          <ComponentContentItemText
            image={null}
            text="About us Lorem schienseijasjdölfkjaösldf"
          />
        }
      />
      <ComponentLayoutSection
        id={NavItems[1].link}
        linkChild={
          <ComponentContentItem itemDown="contact us" itemUp="feel free" />
        }
        contentChild={
          <ComponentContentItemText
            image={null}
            text="Contact us Lorem schienseijasjdölfkjaösldf"
          />
        }
      />
      <ComponentLayoutSection
        id={NavItems[2].link}
        linkChild={
          <ComponentContentItem itemDown="our location" itemUp="find out" />
        }
        contentChild={
          <ComponentContentItemText
            image={null}
            text="Our Locations Lorem schienseijasjdölfkjaösldf"
          />
        }
      />
    </div>
  );
}

export default App;

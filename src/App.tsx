import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponentLayoutStart from "./components/ComponentLayoutStart/ComponentLayoutStart";
import ComponentLayoutSection from "./components/ComponentLayoutSection/ComponentLayoutSection";
import ComponentContentItem from "./components/ComponentContentItem/ComponentContentItem";
import startImage from "./images/pic-startpage.jpg";

function App() {
  return (
    <div className="App">
      <ComponentLayoutStart
        navitems={[
          {
            link: "#aboutUs",
            text: "about us",
          },
          {
            link: "#contactUs",
            text: "contact",
          },
          {
            link: "#ourLocation",
            text: "location",
          },
        ]}
        header="buchfix"
        image={startImage}
      />
      <ComponentLayoutSection />
      <ComponentContentItem />
    </div>
  );
}

export default App;

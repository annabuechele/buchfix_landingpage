import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponentLayoutStart from "./components/ComponentLayoutStart/ComponentLayoutStart";
import ComponentLayoutSection from "./components/ComponentLayoutSection/ComponentLayoutSection";

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
        header="BUCHFIXX"
      />
      <ComponentLayoutSection />
    </div>
  );
}

export default App;

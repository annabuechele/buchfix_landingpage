import React from "react";
import "./ComponentLayoutStart.scss";

interface NavProp {
  text: string;
  link: string;
}

interface ComponentLayoutStartProps {
  navitems: NavProp[];
  header: string;
  image: any;
}

function ComponentLayoutStart(props: ComponentLayoutStartProps) {
  return (
    <div className="componentLayoutStartMain">
      <div className="navHeader">
        <div className="NavHeaderSection "></div>
        <div className="NavHeaderSection navItemContainer">
          {props.navitems.map((item) => {
            //foreach für alle array element in unserer nav array
            return <a href={"#" + item.link}>{item.text}</a>;
          })}
        </div>
        <div className="NavHeaderSection navItemContainer" id="loginright">
          <a href="https://app.buchfix.at" className="navItemLogin">
            Log-in
          </a>
        </div>
      </div>
      <div className="backgroundBlockStart">
        <div className="contentMain">{props.header}</div>
      </div>
      {/* des img sött ned in da block ine!*/}
      <img src={props.image} alt="startImage" className="startImage" />
    </div>
  );
}

export default ComponentLayoutStart;

import React from "react";
import "./ComponentLayoutStart.scss";

interface NavProp {
  text: string;
  link: string;
}

interface ComponentLayoutStartProps {
  navitems: NavProp[];
  header: string;
}
function ComponentLayoutStart(props: ComponentLayoutStartProps) {
  return (
    <div className="componentLayoutStartMain">
      <div className="navHeader">
        <div className="NavHeaderSection"></div>
        <div className="NavHeaderSection" id="navItemContainer">
          {props.navitems.map((item) => {
            //foreach für alle array element in unserer nav array
            return <span>{item.text}</span>;
          })}
        </div>
        <div className="NavHeaderSection NavLogin" id="navItemContainer">
          <a href="" id="login">
            log in
          </a>
        </div>
      </div>
      <div className="backgroundBlockStart">{props.header}</div>
    </div>
  );
}

export default ComponentLayoutStart;

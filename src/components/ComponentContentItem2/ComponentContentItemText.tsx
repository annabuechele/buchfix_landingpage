import React from "react";
import "./ComponentContentItemText.scss";

interface ComponentContentItemText {
  image: any;
  text: string;
}
function ComponentContentItemText(props: ComponentContentItemText) {
  return (
    <div className="componentContentItemTextWrapper">
      <img src={props.image} alt="imageAboutUs" id="componentItemText" />
      <p>{props.text}</p>
    </div>
  );
}

export default ComponentContentItemText;

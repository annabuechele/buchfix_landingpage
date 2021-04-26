import React, { ReactChild, ReactChildren } from "react";
import "./ComponentLayoutSection.scss";

interface ComponentLayoutSectionProps {
  linkChild:
    | ReactChild
    | ReactChild[]
    | ReactChildren
    | ReactChildren[]
    | string;
  id: string;
  contentChild:
    | ReactChild
    | ReactChild[]
    | ReactChildren
    | ReactChildren[]
    | string;
}
function ComponentLayoutSection(props: ComponentLayoutSectionProps) {
  return (
    <div className="componentLayoutSectionMain">
      <div className="backgroundBlockSection" id={props.id}>
        {props.linkChild}
      </div>
      <div className="componentContentItemContainer">{props.contentChild}</div>
    </div>
  );
}

export default ComponentLayoutSection;

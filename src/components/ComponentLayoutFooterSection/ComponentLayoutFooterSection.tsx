import React, { ReactChild, ReactChildren } from "react";
import "./ComponentLayoutFooterSection.scss";

interface ComponentLayoutFooterSectionProps {
  linkChild:
    | ReactChild
    | ReactChild[]
    | ReactChildren
    | ReactChildren[]
    | string;
}
function ComponentLayoutFooterSection(
  props: ComponentLayoutFooterSectionProps
) {
  return (
    <div className="componentLayoutFooterMain">
      <div className="backgroundBlockSectionFooter">{props.linkChild}</div>
    </div>
  );
}

export default ComponentLayoutFooterSection;

import React, { CSSProperties } from "react";
import "./ComponentContentItem.scss";

interface ComponentContentItemProps {
  itemUp: string;
  itemDown: string;
}
function ComponentContentItem(props: ComponentContentItemProps) {
  return (
    <div className="contentItemsContainer">
      <div className="itemSectionUp">{props.itemUp}</div>
      <div className="itemSectionDown">{props.itemDown}</div>
    </div>
  );
}

export default ComponentContentItem;

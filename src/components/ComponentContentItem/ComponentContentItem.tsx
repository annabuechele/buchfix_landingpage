import React from "react";
import "./ComponentContentItem.scss";

interface ComponentContentItem {
  itemUp: string;
  itemDown: string;
}
function ComponentContentItem(props: ComponentContentItem) {
  return (
    <div className="contentItemsContainer">
      <div className="itemSectionUp">{props.itemUp}</div>
      <div className="itemSecionDown">{props.itemDown}</div>
    </div>
  );
}

export default ComponentContentItem;

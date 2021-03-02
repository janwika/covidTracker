import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapEl from "../Components/MapEl";

function WorldMapWrapped(props) {
  const [content, setContent] = useState("");
  return (
    <div>
        <container className="container" width="960px">
            <MapEl props={props} setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
      </ container>
    </div>
  );
}

export default WorldMapWrapped;
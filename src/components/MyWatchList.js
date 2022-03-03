import React from "react";
import ShowCard from "./ShowCard";
import { v4 as uuid } from "uuid";
function MyWatchList({ watch, onShowClicked, onShowDelete }) {
  return (
    <div className="watch-list-container">
      {watch.map((show) => {
        return (
          <ShowCard
            show={show}
            key={uuid()}
            onShowClicked={onShowClicked}
            onShowDelete={onShowDelete}
          />
        );
      })}
    </div>
  );
}

export default MyWatchList;

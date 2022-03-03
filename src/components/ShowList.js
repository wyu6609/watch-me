import React from "react";
import ShowCard from "./ShowCard";
import { v4 as uuid } from "uuid";

function ShowList({ shows, onShowClicked, onShowDelete }) {
  return (
    <div className="show-container">
      {shows.map((show) => {
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

export default ShowList;

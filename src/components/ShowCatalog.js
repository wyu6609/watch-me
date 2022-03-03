import React, { useState, useEffect } from "react";
import MyWatchList from "./MyWatchList";
import ShowList from "./ShowList";

function ShowCatalog() {
  //state for showList
  const [shows, setShows] = useState([]);
  // state for MyWatchList
  const [watch, setWatch] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);
  const fetchAPI = () => {
    fetch("http://localhost:8081/shows")
      .then((resp) => resp.json())
      .then((data) => setShows(data));
  };

  //add to watch list when clicked fxn
  const addToWatchList = (addedObj) => {
    // added to state array only if clicked obj DNE
    if (watch.includes(addedObj) === false) {
      setWatch([...watch, addedObj]);
    }
  };

  //onDeleteShow fxn
  const deleteShow = (selectedObj) => {
    console.log(selectedObj);
    // DELETE fetch request
    fetch(`http://localhost:8081/shows/${selectedObj.id}`, {
      method: "DELETE",
    }).then(() => {
      setShows(shows.filter((show) => show.id !== selectedObj.id));
      setWatch(watch.filter((show) => show.id !== selectedObj.id));
    });
  };

  //delete from watchList
  const deleteFromWatch = (selectedObj) => {
    setWatch(watch.filter((show) => show.id !== selectedObj.id));
  };

  return (
    <>
      <MyWatchList
        watch={watch}
        onShowClicked={deleteFromWatch}
        onShowDelete={deleteFromWatch}
      />
      <hr />
      <ShowList
        shows={shows}
        onShowClicked={addToWatchList}
        onShowDelete={deleteShow}
      />
    </>
  );
}

export default ShowCatalog;

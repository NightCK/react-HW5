import React from "react";
import { Card } from "./Card";

// e 是 event 參數的意思
export default function App() {
  // const handleClick = () => {
  //   console.log("Clicked Me!")
  // }

  // const handleChange = () => {
  //   console.log("I am changing!")
  // }

  // const handleDelete = () => {console.log("Delete Me!")}



  return (
    // 常見 event:onClick, onChange
    // 裡面的人決定什麼時候要做，外面的人決定要做什麼。

    <div>
      <Card>
        This is a card
      </Card>
    </div>


    // <div className="">
    //   <Card onDelete={handleDelete}></Card>
    //   <input type="text" onChange={handleChange}></input>
    //   <button onClick={handleClick}> Click Me!</button>
    //   {/* handleClick 稱為 callback function */}
    // </div>
  );
}
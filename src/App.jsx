import React from "react";
import { DrinkInput } from "./Card";

export default function App() {
  return(

    <div>
      <DrinkInput>訂購人</DrinkInput>
    </div>

  )
}


// HW5 筆記：
// e 是 event 參數的意思。
// 常見 event:onClick, onChange。
// 裡面的人決定什麼時候要做，外面的人決定要做什麼。
// handleClick 稱為 callback function。
// onUpdate && 是有收到這個 props 才執行的意思。
// Conditional rendering，語法範例：editable ? : "Cannot edit"，如果不能 editable，就印出 Cannot edit。
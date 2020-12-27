import React from "react";
import cardStyle from "./stylesheets/Card.module.css"

export const DrinkInput = () => {

    const drinkInfo = {
        buyerName: "",
        drinkFormula: "",
        drinkName: "", 
    };

    const handleCreate = () => {
        
    }

    const handleBuyerName = (buyerName) => {
        console.log(buyerName.target.value)
    }

    const handleDrinkFormula = (drinkFormula) => {
        console.log(drinkFormula.target.value)
    }

    const handleDrinkName = (drinkName) => {
        console.log(drinkName.target.value)
    }

    return(
        <div>
            <input type="text" placeholder="訂購人" className={cardStyle.textfieldNormal} onChange={handleBuyerName} />
            <input type="text" placeholder="糖度冰塊" className={cardStyle.textfieldNormal} onChange={handleDrinkFormula}/>
            <input type="text" placeholder="飲品名稱" className={cardStyle.textfieldNormal} onChange={handleDrinkName} />
            <button className={cardStyle.btnPrimary} onClick={handleCreate}>新增</button>
        </div>
    )
}
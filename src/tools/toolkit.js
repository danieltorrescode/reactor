/* eslint-disable */
function getTodaysDate() {
    const today = new Date();
    const date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    return date;
}

const regExpr = (expr)=>{
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(expr)
}

export {regExpr , getTodaysDate};

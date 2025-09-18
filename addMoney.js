// console.log("connected") [Revise the syntax for memorizing]***
const addMoney= document.getElementById("add-money-btn");
addMoney.addEventListener("click",function(e)
{   
    console.log("button clicked")
    // e.preventDefault() 
    const blank=document.getElementById("bank").value 
    const accNum= document.getElementById("acc-no").value
    const Money = parseInt(document.getElementById("add-money").value)
    const accPIN= parseInt(document.getElementById("acc-pin").value)
    // console.log(blank,accNum,Money,accPIN)
    const currentBalance= parseInt( document.getElementById("current-balance").innerText)
    // console.log(currentBalance) //[.innerText for normal tag values and .value for input tag values]
    const totalBalance= currentBalance+Money;
    // console.log(totalBalance);
    document.getElementById("current-balance").innerText= totalBalance;

})
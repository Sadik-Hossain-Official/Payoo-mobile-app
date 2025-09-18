// Add Money feature 
// console.log("connected") [Revise the syntax for memorizing]***
const addMoney= document.getElementById("add-money-btn");
addMoney.addEventListener("click",function(e)
{   
    console.log("button clicked")
    // e.preventDefault() 
    const pin=1234;
    const bank=document.getElementById("bank").value 
    const accNum= document.getElementById("acc-no").value
    const Money = parseInt(document.getElementById("add-money").value)
    const accPIN= parseInt(document.getElementById("acc-pin").value)
    // console.log(bank,accNum,Money,accPIN)
    const currentBalance= parseInt( document.getElementById("current-balance").innerText)
    // console.log(currentBalance) //[.innerText for normal tag values and .value for input tag values]
    if(accNum.length<11){
        alert("Please Provide vaid account no");
        return;
    }
    if(accPIN!==pin){
        alert("Invalid PIN!")
        return;
    }
    const totalBalance= currentBalance+Money;
    // console.log(totalBalance);
    document.getElementById("current-balance").innerText= totalBalance;
})


// Cash Out feature 
const removeMoney=document.getElementById("withdraw-money-btn");
removeMoney.addEventListener("click",function()
{   const pin=1234;
    const reqMoney= parseInt(document.getElementById("remove-money").value)
    const accNum= document.getElementById("acc-no").value
    const accPIN= parseInt(document.getElementById("acc-pin").value)
    const currentBalance= parseInt( document.getElementById("current-balance").innerText)
    if(accNum.length<11){
        alert("Please Provide vaid account no");
        return;
    }
    if(accPIN!==pin){
        alert("Invalid PIN!")
        return;
    }
    const remainBalance= currentBalance-reqMoney;
    document.getElementById("current-balance").innerText=remainBalance;
})

// toggle functionality
document.getElementById("addMoney-click").addEventListener("click",function()
{
    document.getElementById("add-money-parent").style.display="block";
    document.getElementById("cash-out-parent").style.display="none";
})

document.getElementById("cashOut-click").addEventListener("click",function()
{
    document.getElementById("add-money-parent").style.display="none";
    document.getElementById("cash-out-parent").style.display="block";
})
// pin stored 
const pin=1234;
// reuse function for integer value 
function getIntValue(id)
{
    const ID=parseInt(document.getElementById(id).value);
    return ID;
}
// function for string value 
function getStringValue(x)
{
    const X= document.getElementById(x).value;
    return X;
}
// function for innerText
function getInnerText(y)
{
    const Y= parseInt(document.getElementById(y).innerText);
    return Y;
}
// function to set innerText
function setInnerText(y,z)
{
    document.getElementById(y).innerText=z;
}
// stoaring history in array 
const transactionData=[];
// storaing transactionData
function transactions(c)
{
    const history={
        name:c,
        date:new Date().toLocaleTimeString()
    }
    transactionData.push(history);
    console.log(transactionData);
}
// add money fonctionality
const addMoney= document.getElementById("add-money-btn");
addMoney.addEventListener("click",function(e)
{   
    console.log("button clicked")
    // e.preventDefault() 
    const bank=getStringValue("bank"); 
    const accNum= getStringValue("acc-no");
    const Money = getIntValue("add-money");
    const accPIN= getIntValue("acc-pin");
    // console.log(bank,accNum,Money,accPIN)
    const currentBalance= getInnerText("current-balance");
    // console.log(currentBalance) //[.innerText for normal tag values and .value for input tag values]
    if(accNum.length<11 || accNum.length>11){
        alert("Please Provide vaid account no");
        return;
    }
    if(Money<=0)
    {
        alert("Invalid amount!")
        return;
    }
    if(accPIN!==pin){
        alert("Invalid PIN!")
        return;
    }
    const totalBalance= currentBalance+Money;
    // console.log(totalBalance);
    // document.getElementById("current-balance").innerText= totalBalance;
    setInnerText("current-balance",totalBalance);
    // function call for history 
    transactions("Add Money");
})
// cash out functionality
const removeMoney=document.getElementById("withdraw-money-btn");
removeMoney.addEventListener("click",function()
{
    const reqMoney= getIntValue("remove-money");
    const accNum= getStringValue("acc-no");
    const accPIN= getIntValue("acc-pin");
    const currentBalance= getInnerText("current-balance");
    if(accNum.length!==11){
        alert("Please Provide vaid account no");
        return;
    }
    if(reqMoney<=0 || reqMoney>currentBalance)
    {
        alert("Invalid amount!")
        return;
    }
    if(accPIN!==pin){
        alert("Invalid PIN!")
        return;
    }
    const remainBalance= currentBalance-reqMoney;
    setInnerText("current-balance",remainBalance);
    transactions("Cash Out");
})

// toggle functionality
function toggling(a)
{
    const forms  = document.getElementsByClassName("forms");
    for( const form of forms)
    {
        form.style.display="none";
    }
    document.getElementById(a).style.display="block";
}
// action button effect functionality 
function action_btn(b)
{
    const Action_btn= document.getElementsByClassName("action-btn");
    for(const Action of Action_btn)
    {
        Action.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
        Action.classList.add("border-gray-400");
    }
    document.getElementById(b).classList.remove("border-gray-400")
    document.getElementById(b).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}
// toggle and action button functionality adding

document.getElementById("addMoney-click").addEventListener("click",function()
{
    toggling("add-money-parent");
    action_btn("addMoney-click");
})

document.getElementById("cashOut-click").addEventListener("click",function()
{
    const forms  = document.getElementsByClassName("forms");
    for( const form of forms)
    {
        form.style.display="none";
    }
    document.getElementById("cash-out-parent").style.display="block";
    action_btn("cashOut-click");
})
document.getElementById("transferMoney-click").addEventListener("click",function()
{   
    const forms  = document.getElementsByClassName("forms");
    for( const form of forms)
    {
        form.style.display="none";
    }
    document.getElementById("transfer-money-parent").style.display="block";
    action_btn("transferMoney-click");
})

document.getElementById("transaction-click").addEventListener("click",function()
{
    toggling("transaction-parent");
    action_btn("transaction-click");
})
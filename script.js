// button dom manupulation
const button=document.getElementById("btn");
button.addEventListener("click",function()
{
   const Mobile= 12345678910;
   const Pin= 1234;
   //console.log(Mobile,Pin)
   const num_value= document.getElementById("num").value 
   const pin_value= document.getElementById("pin").value
   const Number= parseInt(num_value);
   const PIN= parseInt(pin_value);
   //console.log(Number,PIN);
   if(Mobile===Number && PIN===Pin)
   { 
     console.log("condition matched")
     window.location.href="Home.html"
     //window.open("Home.html", "_blank"); // works like target="blank";
   }
   else{
    alert("Sorry!condition do not matched") //revise syntax;
   }
})
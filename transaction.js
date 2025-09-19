document.getElementById("transaction-click").addEventListener("click",function(){
    const Transactions= document.getElementById("transaction-container");
    Transactions.innerText="";
    for(const data of transactionData)
    {
        const div= document.createElement("div");
        div.innerHTML=`
        <div class="flex items-center justify-between p-1.5 bg-white rounded-xl my-1.5">
                    <div class="flex items-center gap-1.5">
                        <div class="rounded-full p-2.5 bg-[#f4f5f7]">
                            <img src="assets/wallet1.png" alt="logo">
                        </div>
                        <div class="">
                            <h5 class="font-bold text-lg">${data.name}</h5>
                            <p class="text-sm font-bold text-gray-600">${data.date}</p>
                        </div>
                    </div>
                    <div>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                `
        Transactions.appendChild(div);        
    }
})
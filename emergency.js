
// heart count Start.
let count = 0;
const hearts = document.getElementsByClassName("heart-icon");
for(const heart of hearts)
{
  heart.addEventListener('click', function(){
    count++;
    document.getElementById('heart-value').innerText = count;
  })
}
// heart count end
// copy count start
const copyData= []
const copyCounts = document.getElementsByClassName('copy-count')
for(const copyCount of copyCounts)
{
  copyCount.addEventListener('click',function(){
    count++
  document.getElementById("copy-count").innerText = count
const card = this.closest("div.rounded-xl");
    const number = card.querySelector("p.font-bold.text-xl.mt-2").innerText;

    const data = {
      number: number,
    };

    copyData.push(data);

    navigator.clipboard.writeText(data.number)
  
  })
}
// copy count end
// calling section start

let callingData = [];
const calls = document.querySelectorAll(".call-button");

for (const call of calls) {
  call.addEventListener("click", function () {
    const balanceAmount = parseInt(
      document.getElementById("balance").innerText
    );


    if (balanceAmount <= 0) {
      alert("Insufficient fund");
      return;
    }
    const chargeAmount = 20;
    const newBalance = balanceAmount - chargeAmount;
    document.getElementById("balance").innerText = newBalance;
    const card = this.closest("div.rounded-xl");

    const name = card.querySelector("h1").innerText;
    const number = card.querySelector("p.font-bold.text-xl.mt-2").innerText;

    const data = {
      name: name,
      number: number,
      date: new Date().toLocaleString(),
    };

    callingData.push(data);

    alert(`${data.name}, ${data.number}`);
      const transactionContainer = document.getElementById("transaction-container");
            transactionContainer.innerText = " ";
  for (const data of callingData) {
    const div = document.createElement("div");
    div.innerHTML = `
<div class="flex items-center justify-between bg-gray-100 p-5 ml-5 mr-5 rounded-xl mt-2">
                        <div>
                            <h1 class="font-bold ">${data.name}</h1>
                            <p class="text-[#5c5c5c] mt-1">${data.number}</p>
                        </div>
                        <div>
                            <p>${data.name}</p>
                        </div>
                    </div>
`
    transactionContainer.appendChild(div);
  }
    
  });
// calling section end
}
  document.getElementById("clear-history").addEventListener("click", function () {
  document.getElementById("transaction-container").innerHTML =""
  callingData=[]
});

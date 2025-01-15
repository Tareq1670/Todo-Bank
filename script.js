/**
 * !login button create
 */

const inter = document.getElementById("login");
inter.addEventListener("click",function(){
  var loginArea = document.getElementById("login_area");
  loginArea.style.display = "none";
  const trnarea = document.getElementById("trangection_area");
  trnarea.style.display = "block";
})

/**
 * !diposite button events
 */

const depositeButton = document.getElementById("add_diposite");
depositeButton.addEventListener("click",function(){
   const depositeAmount = document.getElementById("deposite_amount").value ;
   const depositeNumber = parseFloat(depositeAmount);

   const currentDepositor = document.getElementById("current_deposite").innerText;
   const current_deposite_number = parseFloat(currentDepositor);
   const totalDipositor = depositeNumber + current_deposite_number;

   document.getElementById("current_deposite").innerText = totalDipositor;

   document.getElementById("deposite_amount").value="";

   const currentBalance = document.getElementById("current_balance").innerText;
   const balanceType = parseFloat(currentBalance);
   totalBalance = depositeNumber + balanceType;
   document.getElementById("current_balance").innerText=totalBalance;

})


const withdrowSection = document.getElementById("add_withsrow");
withdrowSection.addEventListener("click",function(){
  const addAmount = document.getElementById("withsrow_amount").value;
  const currentAmount =parseFloat(addAmount);

  const typeAmount = document.getElementById("current_withdrow").innerText;
  const withsrowConvart = parseFloat(typeAmount);
  totalWithdrow = currentAmount + withsrowConvart;

  document.getElementById("current_withdrow").innerText = totalWithdrow;
  document.getElementById("withsrow_amount").value="";

const withdrowBalance = document.getElementById("current_balance").innerText;
const convartBalance = parseFloat(withdrowBalance);
newtotalBalance = convartBalance - currentAmount;

document.getElementById("current_balance").innerText =newtotalBalance;


})
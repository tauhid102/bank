function inputValue(amountID){
     const Input = document.getElementById(amountID);
            const amountText = Input.value;
            const Amount = parseFloat(amountText);
            Input.value='';
            return Amount;
}
function totalAmount(ID,amount){
    //get the amount form previous
    const depositePrevious = document.getElementById(ID);
    const depositePreviousText=depositePrevious.innerText; 
    const depositePreviousAmount=parseFloat(depositePreviousText);

    //sum of deposite balance
    const depositeTotal=amount + depositePreviousAmount;
    depositePrevious.innerText=depositeTotal;
}   

function getCurrentBalance(){
    const balancePrevious = document.getElementById('balance-amount');
            const balancePreviousText = balancePrevious.innerText;
             const balancePreviousAmount = parseFloat(balancePreviousText);
             return balancePreviousAmount;
}

function updateBalance(depositeAmount,isAdd){
    const balancePrevious = document.getElementById('balance-amount');
    const balancePreviousAmount = getCurrentBalance()
             
            if(isAdd==true){
                balancePrevious.innerText = balancePreviousAmount + depositeAmount;
            }
            else{
                balancePrevious.innerText = balancePreviousAmount - depositeAmount;
            
            }

             
}

document.getElementById('deposite-btn').addEventListener('click',function(){
            //get the amount of input
            const depositeAmount = inputValue('deposite-input');
            if(depositeAmount >0){
                //get the amount form previous 
            totalAmount('deposite-total',depositeAmount);

            //update balance amount
            updateBalance(depositeAmount,true);
           
            }
            else{
                alert('Give positive number')
            }
         })
 
         //withdraw handle
         document.getElementById('withdraw-btn').addEventListener('click',function(){
 
             //get the amount of withdraw
             const withdrawInputAmount = inputValue('withdraw-input');
             const currentBalance = getCurrentBalance();

             if(withdrawInputAmount>0 && withdrawInputAmount<currentBalance){
                totalAmount('withdraw-total',withdrawInputAmount);
 
                //set balance amount
                updateBalance(withdrawInputAmount,false)
             }
             else{
                 alert('Give positive and lowernumber in balace sheet');
             }

         })
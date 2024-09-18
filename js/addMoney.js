/*
* 1. add event listener to the add money button (from submit)
make sure to preventDafult sp that page dosent reloads
*2. get the money user wants to add 
*also , get the pin number ==> failed to add
*for right pin number, allow to add the number to the accoount balance 
*
*4. get the current balance
*
*5. add money to be added to be added with the current balance
*
*6. display/update the balance in the DOM/UI 
*
*/ 

document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('added the event handler');

    // get money add the pin number
    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('input-pin-number').value;
    // console.log(addMoney, pinNumber);

    if(pinNumber === '1234'){
        // add money to the account
        const blance = document.getElementById('acount-blance').innerText;
        const blanceNumber = parseFloat(blance);

        // update blance
        const newBlance = blanceNumber + addMoneyNumber;
        // update the DOM with updated blance
        document.getElementById('acount-blance').innerText = newBlance;

    }
    else{
     alert('Faield to added money. please')   
    }
})
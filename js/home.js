// add money to acount
/*
*
*
*
*
*/ 


// step-1: add an event handlar to the add money button inside the from
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    // prevent page reload after from submit
    event.preventDefault()
    // console.log('money add btn clicked');

    // step-2: get money to added to the amount
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(pinNumber);

    //step-3: verify the pin number
    // wrong way to validate pin number
    if(pinNumber === '1234'){
        console.log('adding the money yor acount');
        // step-4: get the currnet blance
        const blance = document.getElementById('acount-blance').innerText;
        console.log(blance);

        // step-5: add addMoneyInput with acount blance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const blanceNumber = parseFloat(blance);
        const newBlance = addMoneyNumber + blanceNumber;
        console.log(newBlance);
    
    // step-6: update the blance in the UI/DOM
    document.getElementById('acount-blance').innerText = newBlance;
    }
    else{
        alert('failed to add money ')
    }

});
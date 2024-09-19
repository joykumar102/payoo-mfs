document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault()

        
        const cashOut = document.getElementById('input-cash-out').value;
        const cashOutNumber = parseFloat(cashOut);
        const pinNumber = document.getElementById('input-cashout-pin').value;
    
        console.log(pinNumber, cashOut)

        if(pinNumber === '1234'){
            // console.log('money is reducing')
            const balance = document.getElementById('acount-blance').innerText
            const balanceNumber = parseFloat(balance);

            const newBlance = balanceNumber - cashOutNumber;

            document.getElementById('acount-blance').innerText = newBlance;
        }
        else{
            alert('failed to cash out. please try again later')
        }





    });



    
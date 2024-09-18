// console.log('button clicking file added')

// document.getElementById('id').addEventListener('click', fun)

// secarch : form submit reloading the page

// step - 1 set event handler
document.getElementById('btn-login').addEventListener
('click', function(event){

    // step - 2 : prevent dafualt behavior (prevent reloading browser)
    event.preventDefault();
    // console.log('login button clicked')

    // step - 3 : get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber)

    // step - 4 : validate phone number and pin
    // this temoporary
    if(phoneNumber === '5' && pinNumber === '1234') {
        console.log('you are loged in');
    }  
    // step - 5 : allow user to use the website
    else{
        alert('wrong phone or pin');
    }
 
})

document.getElementById('btn-login')
    .addEventListener('click', function(event){
        event.preventDefault();

        // get phone number and pin
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        // console.log(phoneNumber, pinNumber);

        // bad way to validate
        if(phoneNumber === '5' && pinNumber === '1234') {
                    console.log('you are loged in');
                    window.location.href = '/home.html';
                }  
               
                else{
                    alert('wrong phone or pin');
                }
             

    });
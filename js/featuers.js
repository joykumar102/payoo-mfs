// show the cash out section
document.getElementById('btn-show-cash-out')
    .addEventListener('click', function(){
        console.log('show cash out button clicked')

        document.getElementById('cash-out-from').classList.remove('hidden');


        // hide the add money from
        document.getElementById('add-money-from').classList.add('hidden')

    });
    

    // show add money from and the cash out from
    document.getElementById('btn-show-add-money')
    .addEventListener('click', function(){
        document.getElementById('add-money-from').classList.remove('hidden');
        document.getElementById('cash-out-from').classList.add('hidden');
    })
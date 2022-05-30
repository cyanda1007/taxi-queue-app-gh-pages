const passengerCount = document.querySelector('.passengerCounter');
const passengerAdd = document.querySelector('.join_queue');
const passengerRemove = document.querySelector('.leave_queue');

const passengerCounter = TaxiQueue();

passengerAdd.addEventListener('click', function(){
    passengerCounter.joinQueue();
    passengerAdd.innerHTML = passengerCounter.joinTaxiQueue
});

passengerRemove.addEventListener('click', function(){
    passengerCounter.leaveQueue();
    passengerRemove.innerHTML = passengerCounter.leaveQueue
})
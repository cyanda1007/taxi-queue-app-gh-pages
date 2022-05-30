const passengerCount = document.querySelector('.passengerCounter');
const passengerAdd = document.querySelector('.join_queue');
const passengerRemove = document.querySelector('.leave_queue');
const counter = document.querySelector('.passenger_queue_count');

const taxiQueue = document.querySelector('.taxicounter');
const taxiJoin = document.querySelector('.join_taxi_queue');

const passengerCounter = TaxiQueue();



passengerAdd.addEventListener('click', function(){
    
    counter.innerHTML = passengerCounter.joinQueue()
    console.log(passengerCounter)
});

passengerRemove.addEventListener('click', function(){
  
  counter.innerHTML = passengerCounter.leaveQueue()
  console.log(passengerCounter)
});


taxiJoin.addEventListener('click', function(){
    passengerCounter.joinQueue();
    taxiJoin.innerHTML = passengerCounter
})
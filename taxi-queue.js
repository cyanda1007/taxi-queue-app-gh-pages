function TaxiQueue(_peopleAdd, _taxi) {
	let passengerCounter = 0;
	let taxis = 0;
    
	

	function joinQueue() {
	passengerCounter = passengerCounter+1
		return passengerCounter;
	}

	function leaveQueue() {
		if (passengerCounter > 0){
			return passengerCounter--;
		}
	}

	function joinTaxiQueue() {
		 return taxis++;
	}

	function queueLength() {
      return passengerCounter;
	}

	function taxiQueueLength() {
       return taxis;
	}

	function taxiDepart(){
		if(passengerCounter >= 12 && taxis > 0){
			return taxis = (taxis-- && passengerCounter-12);
		}

	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}
class GameControl {

	constructor() {
		var population = 1000;
		this.customer = new Customer(population);
		this.day = 1;
		this.mealInt = 1; 		
	}
	
	getCustomer() {
		return this.customer;
	}
	getDay(){
		return this.day;
	}
    incrementDay(){
        this.day += 1;
    }
	playGame() {

		if  (this.customer.getHealthy != 0 && this.customer.getsick != 0) {
			this.mealInt += 1;
			if (mealInt > 4) {this.mealInt = 1; this.day += 1;}
		}
	}
	
	getMeal (){
		switch (this.mealInt) {
			case 1: {return "Breakfast"; break;}
			case 2: {return "Lunch"; break;}
			case 3: {return "Dinner"; break;} 
			case 4: {return "Late Night"; break;}
		}
	}
}
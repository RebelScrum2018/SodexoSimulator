class Customer {
  
//Customer class requires a starting population.
  constructor(population) {
    this.healthy = population;
    this.sick = 0;
    this.dead = 0;
  }
 //Standard Getters and setters 
    getHealthy(){
        return this.healthy;
    }
    getSick(){
        return this.sick;
    }
    getDead(){
        return this.dead;
    }
    setDead(newDead) {
        this.dead += newDead;
        this.sick -= newDead;
    }
    setSick(newSick) {
        this.sick += newSick;
        this.healthy -= newSick
    }
    setRecovered(newHealthy) {
        this.sick -= newHealthy;
        this.healthy += newHealthy;
    }
    //This will randomly allow customers to become healthy again
    calculateRecovered() {
        var randInt = 0;
        var recovered = 0;
        for (var i = 0; i < this.sick; i++){
            randInt = Math.floor(Math.random() *100);
            if (randInt > 74) {
                recovered += 1;
            }
        }
        this.setRecovered(recovered);
    }
    //this will calculate the amount of illness and death based on 
    //satisfaction is a value 0-100
    calculateSick(satisfaction) {
        var randInt = 0;
        var sick = 0;
        var dead = 0;
        for (var i = 0; i < this.healthy; i++){
            randInt = Math.floor(Math.random() * satisfaction);
            if (randInt < 35 && randInt > 7) {
                sick += 1;
            } 
            else if (randInt == 0) {
                dead += 1;
            }
        }
        this.setSick(sick);
        this.setDead(dead);
    }
}

//function that tests all functions to make sure they do something
function testGetPopulationReport () {
    var c = new Customer(1000);
    
    var healthy = c.getHealthy();
    var sick = c.getSick();
    var dead = c.getDead();
    
    console.log("healthy: " ,healthy);
    console.log("sick: ", sick);
    console.log("dead: ", dead);
    
    c.setDead(20);
    
    healthy = c.getHealthy();
    sick = c.getSick();
    dead = c.getDead();
    
    console.log("healthy: " , healthy);
    console.log("sick: ", sick);
    console.log("dead: ", dead);
    
    c.setSick(40)
    
    healthy = c.getHealthy();
    sick = c.getSick();
    dead = c.getDead();
    
    console.log("healthy: " ,healthy);
    console.log("sick: ", sick);
    console.log("dead: ", dead);
    
    c.setRecovered(50);
    
    healthy = c.getHealthy();
    sick = c.getSick();
    dead = c.getDead();
    
    console.log("healthy: " ,healthy);
    console.log("sick: ", sick);
    console.log("dead: ", dead);
    
    c.calculateRecovered();
    
        
    healthy = c.getHealthy();
    sick = c.getSick();
    dead = c.getDead();
    
    console.log("healthy: " ,healthy);
    console.log("sick: ", sick);
    console.log("dead: ", dead);
    
    c.calculateSick(100);
 
    healthy = c.getHealthy();
    sick = c.getSick();
    dead = c.getDead();
    
    console.log("healthy: " ,healthy);
    console.log("sick: ", sick);
    console.log("dead: ", dead);
}

//run a mini test sim and only output once, much nicer to look at.
function test(){
    var c = new Customer(1000);
    var satisfaction = 75;
    
    
    c.calculateSick(satisfaction);
    c.calculateRecovered();
    c.calculateSick(satisfaction);
    c.calculateRecovered();
    c.calculateSick(satisfaction);
    c.calculateRecovered();
    
    
    var healthy = c.getHealthy();
    var sick = c.getSick();
    var dead = c.getDead();
    
    console.log("healthy: " ,healthy);
    console.log("sick: ", sick);
    console.log("dead: ", dead);
    
}
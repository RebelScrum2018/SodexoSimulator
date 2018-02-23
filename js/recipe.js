class Ingredient{
    constructor(name, group){
        this.name = name;
        this.group = group;
    }
}

class Part{
    constructor(name, target){
        this.name = name;
        this.target = target;
        this.ingredient = null;
    }
    
    setIngredient(ingredient){
        this.ingredient = ingredient;
    }
}

class Recipe{
    constructor(name){
        this.name = name
        this.parts = []
        this.dishName = null
    }
    
    printParts(){
        for (let i = 0; i < this.parts.length; i++) {
            console.log(this.parts[i].name);
        }
    }
    
    printDishName(){
        var output = this.dishName;
        for (let i = 0; i < this.parts.length; i++) {
            if(this.parts[i].ingredient == null){
                console.log("Incomplete Recipe");
                break;
            }
            
            output = output.replace("&" + this.parts[i].name, this.parts[i].ingredient.name);
        }
        console.log(output);
		return output
    }
	getSatisfaction(){
		var satisfaction = 0;
		for (let i = 0; i < this.parts.length; i++) {
			if(this.parts[i].ingredient == this.parts[i].target){
			satisfaction += 30;
			}else if (this.parts[i].ingredient.group == this.parts[i].target.group){
			satisfaction += 10;
			}
	}
		return satisfaction;
	}
}

//Define Ingredients
//Save these into ingredient data file later
bread = new Ingredient("Bread", "Grain");
beef = new Ingredient("Beef", "Protein");
mushroom = new Ingredient("Mushroom", "Vegetable");
cheese = new Ingredient("Cheese", "Dairy");
waffle = new Ingredient("Waffle", "Grain");
sausage = new Ingredient("Sausage", "Protein");
eggs = new Ingredient("Eggs", "Protein");
//Define Recipe Parts
//Save these into recipe data file later
bunPart = new Part("Bun", bread);
pattyPart = new Part("Patty", beef);
toppingPart = new Part("Topping", cheese);

//Define Recipes
//Save these into recipe data file later
burgerRecipe = new Recipe("Burger");
burgerRecipe.parts.push(bunPart);
burgerRecipe.parts.push(pattyPart);
burgerRecipe.parts.push(toppingPart);
burgerRecipe.dishName = "&Patty and &Topping Burger on &Bun Bun";
burgerRecipe.parts[0].setIngredient(bread);
burgerRecipe.parts[1].setIngredient(beef);
burgerRecipe.parts[2].setIngredient(cheese);

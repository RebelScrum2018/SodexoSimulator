class IngredientList{
    constructor(){
        this.list = [];
    }
    searchList(name){
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].name == name){
                return this.list[i];
            }
        }
    }
}

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
        this.name = name;
        this.parts = [];
        this.dishName = null;
    }
    
     setIngredient(ingredient, partName){
        for (let i = 0; i < this.parts.length; i++) {
            if (this.parts[i].name == partName){
                this.parts[i].ingredient = ingredient;
            }
        }
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
        console.log(satisfaction);
        return satisfaction;
    }
}

class Station{
    constructor(name){
        this.name = name;
        this.stationIngredients = [];
        this.activeRecipe = null;
    }
    
    addIngredient(ingredient){
        if(stationIngredients.length < 5){
            stationIngredients.push(ingredient);
        }
    }
    
    removeIngredient(ingredient){
        for(let i = 0; i < stationIngredients.length; i++){
            if(ingredient.name == stationIngredients[i].name){
                stationIngredients.splice(i, 1);
            }
        }
    }
    
    setRecipe(recipe){
        this.recipe = recipe;
    }
}

function createRecipeFromJSON(jsonData){
    var newRecipe = new Recipe(jsonData.recipeName);
    newRecipe.dishName = jsonData.dishName;
    
    for(let i = 0; i < jsonData.parts.length; i++){
        newRecipe.parts.push(new Part(jsonData.parts[i].name, jsonData.parts[i].target));
    }
    
    return newRecipe;
}

//Define Ingredients
//Save these into ingredient data file later
bread = new Ingredient("Wheat Bread", "Grain");
beef = new Ingredient("Beef", "Protein");
mushroom = new Ingredient("Mushroom", "Vegetable");
cheese = new Ingredient("Cheese", "Dairy");
waffle = new Ingredient("Waffle", "Grain");
sausage = new Ingredient("Sausage", "Protein");
eggs = new Ingredient("Eggs", "Protein");
//Define Recipe Parts
//Save these into recipe data file later
iList = new IngredientList();
iList.list.push(bread);
iList.list.push(beef);
iList.list.push(mushroom);
iList.list.push(cheese);
iList.list.push(waffle);
iList.list.push(sausage);
iList.list.push(eggs);

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
burgerRecipe.setIngredient(beef, "Patty");
burgerRecipe.setIngredient(bread, "Bun");
burgerRecipe.setIngredient(cheese, "Topping");


   
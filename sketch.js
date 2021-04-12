//Create variables here
var dog,di
var happy ,happyi
var foods
var food

var database
var Stock="20"
var foodstock

var feed,add
//var milk

function preload()
{

di=loadImage("dogImg.png")
happyi=loadImage("dogImg1.png")
//milk=loadImage("Milk.png")

	//load images here
}

function setup() {
	createCanvas(950, 400);
  database=firebase.database();

  database.ref('Food').on("value",readStock)
  
  food=new Food()
  
feed=createButton("Feed Drago")
feed.position(700,100)
feed.mousePressed(feeddog)

add=createButton("Add Food")
add.position(600,100)
add.mousePressed(addfood)


  
  

dog=createSprite(700,200,10,10)
dog.addImage(di)
dog.scale=0.2



}

function readStock(data){
  foodstock =data.val()
  food.updateFoodstock(foodstock)
}

function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here
 
 food.display();

}

function addfood(){
  foodstock++
  database.ref('/').update({
    Food:foodstock
  })
}

function feeddog(){

  dog.addImage(happyi)
  if(food.getFoodstock()<=0){
    food.updateFoodstock(food.getFoodstock()*0)
  }
  else{food.updateFoodstock(food.getFoodstock()-1)}
  database.ref('/').update({
    Food:food.getFoodstock()
  })
}






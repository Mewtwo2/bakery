class Muffin{
  constructor(price,description){
    this.price = price;
    this.description = description;
  }
}

var chocoChipMuff = new Muffin(5,"Classic Muffin with nuts and chocolate chips. Tried and true");
var doubleChocoMuff = new Muffin(7,"Muffin with chocolate cake and hershey kisses. Chocolate everywhere!");
var carrotMuff = new Muffin(5,"Carrot Muffins with raisin bread for a healthy alternative");

var muffins = document.getElementsByClassName("muffin-variety");

chocoChipDesc = document.createElement("p");
chocoChipDesc.innerHTML = chocoChipMuff["description"] + "<br><br>" + "Price: $" + chocoChipMuff["price"];
var chocoChipButton = document.createElement("a");
chocoChipButton.innerHTML = "Purchase";
muffins[0].appendChild(chocoChipDesc);
muffins[0].appendChild(chocoChipButton);

doubleChocoDesc = document.createElement("p");
doubleChocoDesc.innerHTML = doubleChocoMuff["description"] + "<br><br>" + "Price: $" + doubleChocoMuff["price"];
var doubleChocoButton = document.createElement("a");
doubleChocoButton.innerHTML = "Purchase";
muffins[1].appendChild(doubleChocoDesc);
muffins[1].appendChild(doubleChocoButton);

carrotDesc = document.createElement("p");
carrotDesc.innerHTML = carrotMuff["description"] + "<br><br>" + "Price: $" + carrotMuff["price"];
var carrotButton = document.createElement("a");
carrotButton.innerHTML = "Purchase";
muffins[2].appendChild(carrotDesc);
muffins[2].appendChild(carrotButton);

let counter = 0;

function updatePurchases() {
  if (counter == 1) {
    alert(`You bought ${counter} cake`)
  } else if (counter < 3) {
    alert(`You bought ${counter} cakes, thank you for your patronage`)
  } else {
    alert(`You bought ${counter} cakes, the AHA recommends eating no more than 25-38 grams of added sugar everyday`)
  }
}

chocoChipButton.addEventListener("click", function() {
  counter++;
  updatePurchases();
});

doubleChocoButton.addEventListener("click", function() {
  counter++;
  updatePurchases();
});

carrotButton.addEventListener("click", function() {
  counter++;
  updatePurchases();
});

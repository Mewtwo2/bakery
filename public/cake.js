class Cake {
  constructor(price, description) {
    this.price = price;
    this.description = description;
  }
}

var weddingCake = new Cake(3000, "We make wedding cakes based on your requirements and theme");
var chocoCake = new Cake(200, "We make the highest quality chocolate cake in the tri-state area");
var kidsCake = new Cake(250, "We make cakes for your kids birthday parties or other celebrations");

var cakes = document.getElementsByClassName("cake-variety");

weddingDesc = document.createElement("p");
weddingDesc.innerHTML = weddingCake["description"] + "<br><br>" + "Price: $" + weddingCake["price"];
var weddingButton = document.createElement("a");
weddingButton.innerHTML = "Purchase";
cakes[0].appendChild(weddingDesc);
cakes[0].appendChild(weddingButton);

chocoDesc = document.createElement("p");
chocoDesc.innerHTML = chocoCake["description"] + "<br><br>" + "Price: $" + chocoCake["price"];
var chocoButton = document.createElement("a");
chocoButton.innerHTML = "Purchase";
cakes[1].appendChild(chocoDesc);
cakes[1].appendChild(chocoButton);

kidsDesc = document.createElement("p");
kidsDesc.innerHTML = kidsCake["description"] + "<br><br>" + "Price: $" + kidsCake["price"];
var kidsButton = document.createElement("a");
kidsButton.innerHTML = "Purchase";
cakes[2].appendChild(kidsDesc);
cakes[2].appendChild(kidsButton);

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

weddingButton.addEventListener("click", function() {
  counter++;
  updatePurchases();
});

chocoButton.addEventListener("click", function() {
  counter++;
  updatePurchases();
});

kidsButton.addEventListener("click", function() {
  counter++;
  updatePurchases();
});

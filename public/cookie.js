class Cookie{
  constructor(price,description){
    this.price = price;
    this.description = description;
  }
}

var chocoChipCookie = new Cookie(7,"Enjoy the deliciousness of the classic chocolate chip cookie");
var doubleChocoCookie = new Cookie(10,"For the chocolate lovers out there, this cookie will have you feeling like you ate a piece of heaven");
var varietyCookie = new Cookie(10,"Enjoy our candy oat blast cookie. It is a blast of variety.");

var cookies = document.getElementsByClassName("cookie-variety");

chocoChipDesc = document.createElement("p");
chocoChipDesc.innerHTML = chocoChipCookie["description"] + "<br><br>" + "Price: $" + chocoChipCookie["price"];
var chocoChipButton = document.createElement("a");
chocoChipButton.innerHTML = "Purchase";
cookies[0].appendChild(chocoChipDesc);
cookies[0].appendChild(chocoChipButton);

doubleChocoDesc = document.createElement("p");
doubleChocoDesc.innerHTML = doubleChocoCookie["description"] + "<br><br>" + "Price: $" + doubleChocoCookie["price"];
var doubleChocoButton = document.createElement("a");
doubleChocoButton.innerHTML = "Purchase";
cookies[1].appendChild(doubleChocoDesc);
cookies[1].appendChild(doubleChocoButton);

varietyDesc = document.createElement("p");
varietyDesc.innerHTML = varietyCookie["description"] + "<br><br>" + "Price: $" + varietyCookie["price"];
var varietyButton = document.createElement("a");
varietyButton.innerHTML = "Purchase";
cookies[2].appendChild(varietyDesc);
cookies[2].appendChild(varietyButton);

let counter = 0;

function updatePurchases() {
  if (counter == 1) {
    alert(`You bought ${counter} cookie`)
  } else if (counter < 3) {
    alert(`You bought ${counter} cookies, thank you for your patronage`)
  } else {
    alert(`You bought ${counter} cookies, the AHA recommends eating no more than 25-38 grams of added sugar everyday`)
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

varietyButton.addEventListener("click", function() {
  counter++;
  updatePurchases();
});

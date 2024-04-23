
const unick = [];

function addToCard(item) {
  const count = unick.length;
  const cardTitle = item.parentNode.childNodes[3].innerText;
  const cardPrice = item.parentNode.childNodes[5].innerText.split(" ")[0];
  
  // Check if the card title is already in the cart
  const isItemInCart = unick.includes(cardTitle);

  if (!isItemInCart) {
    // If the item is not in the cart, add it
    unick.push(cardTitle);

    // Add the item to the cart display
    const cardContainer = document.getElementById("addToCardCantainer");
    const p = document.createElement("p");
    p.innerText = cardTitle;
    cardContainer.appendChild(p);

    console.log(unick, "this is unick item");
  }
  const totalElement = document.getElementById("total-price");
  const previousTotalText = totalElement.innerText;
  const previousTotal = parseFloat(previousTotalText);

  const totalPrice = previousTotal + parseFloat(cardPrice);
  totalElement.innerText = totalPrice;
//   enable make purchase button
  if(totalPrice > 0){
    document.getElementById("Purchase").removeAttribute("disabled")
  }else{
    document.getElementById("Purchase").setAttribute("disabled")
  }
//  enable appy btn 
 if(totalPrice >= 200){
    document.getElementById("apply").removeAttribute("disabled");
 }else{
    // document.getElementById("apply").setAttribute("disabled");
 }
}

// apply coupon 
function applyCoupon(){
  const couponField = document.getElementById("coupon-field");
  const couponValue = couponField.value;
  couponField.value = "";
  const coupon = document.getElementById("coupon-code").innerText;
  if(couponValue === coupon){
     console.log("great")
  }
  else{
    alert("invalid coupon code");
    return;
  }
  // get previous total price
  const previousTotal = document.getElementById("total-price");
  const previousTotalText = previousTotal.innerText;
  const previousTotalAmount = parseFloat(previousTotalText);
  
  // get discount price
  const discountPercentage = 0.20;
  const discountAmount = previousTotalAmount * discountPercentage;
  const discountPrice = previousTotalAmount - discountAmount;
  const discountPriceToDecimal = discountPrice.toFixed(2);
  // console.log(discountPrice, typeof discountPrice);

  // set discount price
  const discountId = document.getElementById("discount");
  discountId.innerText = discountPriceToDecimal;

  // SET USER TOTAL PRICE
  const userTotalPay = previousTotalAmount - discountPriceToDecimal;
  const userprice = document.getElementById("userPayPrice");
  userprice.innerText = userTotalPay.toFixed(2);


}


document.getElementById("goHome").addEventListener("click",function(){
    removeElementValue("total-price");
    removeElementValue("discount");
    removeElementValue("userPayPrice");

      const container = document.getElementById("addToCardCantainer");
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    
})

// reusable function
function removeElementValue(inputId){
  const elementId = document.getElementById(inputId);
  elementId.innerText = "";
}
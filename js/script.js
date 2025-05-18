 AOS.init({
    disable: function () {
      // Disable AOS on screens smaller than 1024px (tablet and mobile)
      return window.innerWidth < 1025;
    },
    // Other AOS options (optional)
    duration: 800,
    easing: 'ease-in-out',
  });



//  const second = document.querySelector(".second .number");
// const minutes =document.querySelector(".minutes .number");
// const hours=document.querySelector(".hours .number");
// const days =document.querySelector(".days .number");

// console.log(second,minutes,hours,days);
// let secValue =60;
// let minValue =60;
// let hourValue =24;
// let dayValue = 47;
// const timeFunction =setInterval(() =>{
//     secValue--;
//     if(secValue === 0){
//         minValue--;
//         secValue =60;
//     }
//     if(minValue === 0){
//         hourValue--;
//         minValue =60;
//     }
//     if(hourValue === 0){
//         dayValue --;
//         hourValue = 24;
//     }
//     if(dayValue === 0){
//         clearInterval(timeFunction);
//     }
//     console.log(secValue);
//     second.textContent =secValue < 10 ? `0${secValue}` : secValue;
//     minutes.textContent =minValue < 10 ? `0${minValue}` : minValue;
//     hours.textContent =hourValue < 10 ? `0${hourValue}` : hourValue;
//     days.textContent =dayValue < 10 ? `0${dayValue}` : dayValue;
// },1000);

console.log("sonali");



const deadline = new Date("june 31, 2025 12:00:00").getTime();             
const x = setInterval(function() {
   const currentTime = new Date().getTime();       
   // console.log(currentTime);         
   const t = deadline - currentTime; 
   const days = Math.floor(t / (1000 * 60 * 60 * 24)); 
   // console.log(days)
   const hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
   const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
   const seconds = Math.floor((t % (1000 * 60)) / 1000); 
   document.getElementById("day").innerHTML =days; 
   document.getElementById("hour").innerHTML =hours; 
   document.getElementById("minute").innerHTML = minutes; 
   document.getElementById("second").innerHTML =seconds; 
   if (t < 0) {
      clearInterval(x); 
      document.getElementById("time-up").innerHTML = "TIME UP"; 
      document.getElementById("day").innerHTML ='0'; 
      document.getElementById("hour").innerHTML ='0'; 
      document.getElementById("minute").innerHTML ='0' ; 
      document.getElementById("second").innerHTML = '0'; 
   } 
}, 1000);  



const deadend = new Date("june 31, 2025 00:00:00").getTime();             
const y = setInterval(function() {
   const currentTimer = new Date().getTime();                
   const time = deadend - currentTimer; 
   const daysoffer = Math.floor(time / (1000 * 60 * 60 * 24)); 
   const hoursoffer = Math.floor((time%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
   const minutesoffer = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); 
   const secondsoffer = Math.floor((time % (1000 * 60)) / 1000); 
   document.getElementById("offer-day").innerHTML =daysoffer ; 
   document.getElementById("offer-hour").innerHTML =hoursoffer; 
   document.getElementById("offer-minute").innerHTML = minutesoffer; 
   document.getElementById("offer-second").innerHTML =secondsoffer; 
   if (time < 0) {
      clearInterval(x); 
      document.getElementById("times-end").innerHTML = "TIME UP"; 
      document.getElementById("offer-day").innerHTML ='0'; 
      document.getElementById("offer-hour").innerHTML ='0'; 
      document.getElementById("offer-minute").innerHTML ='0' ; 
      document.getElementById("offer-second").innerHTML = '0'; 
   } 
}, 1000);  




// responsive hamburger 
const humburger =document.querySelector(".hamburgermenu");

const menulist = document.querySelector(".hamburger-area");

humburger.addEventListener("click",()=>{
console.log(menulist.classList.toggle("menuitem"));

});





// Add to cart function
  function addToCart(button) {
    const productCard = button.closest(".product-grid4");

    const name = productCard.querySelector(".title a").textContent.trim();
    const priceText = productCard.querySelector(".price").childNodes[0].nodeValue.trim();
    const price = parseFloat(priceText.replace("$", ""));
    const image = productCard.querySelector("img").getAttribute("src");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name, price, image });

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "cardlist.html"; // Redirect to cart page
  }

  // Function to load cart and render items
  function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.getElementById("cart-list");

    cartList.innerHTML = ""; // Clear existing items

    if (cart.length === 0) {
      cartList.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }

    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("class-iteams");
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.marginBottom = "20px";
      div.style.borderBottom = "1px solid #ccc";
      div.style.paddingBottom = "10px";

      div.innerHTML = `
        <img src="${item.image}" width="100" alt="${item.name}" style="margin-right: 20px; border-radius: 10px;">
        <div class="cart-item-details">
          <div>
            <h3>${item.name}</h3>
            <p>Price: $${item.price.toFixed(2)}</p>
            <button class="remove-btn" onclick="removeFromCart(${index})"
              style="background-color: #ff4444; color: white; border: none; padding: 6px 12px; cursor: pointer; border-radius: 5px;">
              Remove
            </button>
          </div>
        </div>
      `;

      cartList.appendChild(div);
    });
  }

  // Function to remove item
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Remove item
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart(); // Reload list
  }

  // Combined window.onload
  window.onload = loadCart;
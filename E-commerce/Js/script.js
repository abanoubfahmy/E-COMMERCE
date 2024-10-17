let userInfo = document.querySelector('#user_info'); // Corrected the ID selector
let useDom = document.querySelector('#user');
let links = document.querySelector('#links');
let logoutBtn = document.querySelector('#logout');
 
let username = localStorage.getItem('username');

if (username) {
    links.remove();  // Remove the navigation links if the user is logged in
    userInfo.style.display = "flex";  // Show user info
    useDom.innerHTML = username;  // Display the username
}

logoutBtn.addEventListener('click', function() {
    localStorage.clear();
    setTimeout(() => {
        window.location = 'register.html';
    }, 1500);
});

// Define product
let productsDom = document.querySelector(".products");

let products = [
    {
        id: 1,
        title: "mobile",
        size: "Large",
        imgageUrl: "51yh3V5taFL._AC_UY327_FMwebp_QL65_.webp",
    },
    {
        id: 2,
        title: "smartphone",
        size: "Small",
        imgageUrl: "51yh3V5taFL._AC_UY327_FMwebp_QL65_.webp",
    },
    {
        id: 3,
        title: "AISmart",
        size: "Medium",
        imgageUrl: "51yh3V5taFL._AC_UY327_FMwebp_QL65_.webp",
    }
];

function drawProductsUI() {
    let productsUI = products.map((item) => {
        return `
         <div class="product-item" style="margin:5px 0px">
            <img
              src="${item.imgageUrl}"
              class="product-item-img"
              alt="Product Image"
            />
            <div class="product-item-desc">
              <h2>${item.title}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur laudantium nam ea qui vel esse sequi provident!
              </p>
              <span>Size: ${item.size}</span>
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="addedToCart(${item.id})">Add to Cart</button>
                <i class="far fa-heart"></i>
            </div>
         </div>
        `;
    }).join(""); // Join to return a single string
    
    productsDom.innerHTML = productsUI;
}
 function addedToCart(id){
    console.log(id)
 }

drawProductsUI();
function checkLogedUser(){
    if(localStorage.getItem("username")){
console.log("add to cart");
    } else{
        window.location="login.html";
    }
        
}

import { Cart } from "./cart";
function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "The Velvet Blooom Café Menu";

    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("categories");

    const display = document.createElement("div");
    display.classList.add("menu-display");


    // Buttons
    const coffeeBtn = document.createElement("button");
    coffeeBtn.textContent = "Coffee";
   
    const cakeBtn = document.createElement("button");
    cakeBtn.textContent = "Cakes";
   
    const pastryBtn = document.createElement("button");
    pastryBtn.textContent = "Pastries";
    
    display.innerHTML = `
   <h2>☕ Today's Selection</h2>

   <p>Freshly brewed coffee made daily</p>
   <p>Handcrafted cakes & pastries</p>
   <p>Locally sourced ingredients</p>

   <br>

   <em>Select a category above</em>
`;
    // Coffee popup
    coffeeBtn.addEventListener("click", () => {
        display.innerHTML = `
            <h2>Coffee Selection ☕</h2>
            <p>Espresso ........ £3.50<button class="order-btn" id="o1">add</button></p>
            <p>Latte ........... £4.20<button class="order-btn" id="o2">add</button></p>
            <p>Cappuccino ...... £4.50<button class="order-btn" id="o3">add</button></p>
            <p>Mocha ........... £4.80<button class="order-btn" id="o4">add</button></p>
        `;
    });


    // Cakes popup
    cakeBtn.addEventListener("click", () => {
        display.innerHTML = `
            <h2>Cakes 🍰</h2>
            <p>Red Velvet ........ £5.50<button  class="order-btn" id="o5">add</button></p>
            <p>Chocolate Fudge ... £6.00<button  class="order-btn" id="o6">add</button></p>
            <p>Cheesecake ........ £5.80<button class="order-btn" id="o7">add</button></p>
            <p>Carrot Cake ....... £5.20<button class="order-btn" id="o8">add</button></p>
        `;
    });


    // Pastries popup
    pastryBtn.addEventListener("click", () => {
        display.innerHTML = `
            <h2>Pastries 🥐</h2>
            <p>Croissant ......... £3.20<button class="order-btn" id="o9">add</button></p>
            <p>Pain au Chocolat .. £3.80<button class="order-btn" id="o10">add</button></p>
            <p>Blueberry Danish .. £4.10<button class="order-btn" id="o11">add</button></p>
            <p>Cinnamon Roll ..... £4.50<button class="order-btn" id="o12">add</button></p>
        `;
    });

    const footer = document.createElement("footer");
    footer.textContent = "© 2024 Velvet Bloom Café. All rights reserved.";
    categoryContainer.appendChild(coffeeBtn);
    categoryContainer.appendChild(cakeBtn);
    categoryContainer.appendChild(pastryBtn);

    content.appendChild(heading);
    content.appendChild(categoryContainer);
    content.appendChild(display);
    content.appendChild(footer);



    display.addEventListener("click", (e)=>{

    if(e.target.classList.contains("order-btn")){

        let id = e.target.id;

        Cart(id)
    }

});

}

export default loadMenu;
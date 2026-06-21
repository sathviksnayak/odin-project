import { getCart } from "./cart";
function ExitCafe(){

    const content = document.getElementById("content");
    content.innerHTML = "";

    const bill = document.createElement("div");
    const data = getCart();

    bill.innerHTML = `
        <h2>Your Order Summary ☕</h2>

        ${data.items.map((item)=>{

            return `<p>${item.name} ........ £${item.price}</p>`

        }).join("")}

        <hr>

        <h3>Total : £${data.total}</h3>

        <button id="pay">PAY NOW</button>
    `;

    bill.classList.add("card");


        const footer = document.createElement("footer");
    footer.textContent = "© 2024 Velvet Bloom Café. All rights reserved.";


    content.appendChild(bill);     
    content.appendChild(footer);
    const pay = document.getElementById("pay");

    pay.addEventListener("click", leave);  
}
function leave(){

    const content = document.getElementById("content");

    content.innerHTML = "";

    const greet = document.createElement("div");

    greet.innerHTML = `
        <h2>Thank you for visiting Velvet Bloom Café ☕</h2>

        <p>We hope every sip made your day a little warmer.</p>

        <p>See you again soon.</p>
    `;

    greet.classList.add("card");

            const footer = document.createElement("footer");
    footer.textContent = "© 2024 Velvet Bloom Café. All rights reserved.";
    content.appendChild(greet);  
     content.appendChild(footer);
}


export default ExitCafe;
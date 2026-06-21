
function loadHome() {
    const content = document.getElementById("content");

    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to the Velvet Bloom Café";

    const para = document.createElement("p");
    para.textContent = "where every cup uncovers a world of flavor and warmth";
    
    const titlecard=document.createElement("div");
    titlecard.innerHTML=`
    <h2>opening time</h2>
    <p><strong> weekdays : </strong> 7:00am - 9:00pm </p>
    <p><strong> weekends : </strong> 7:00am - 10:00pm </p>
    `;
    titlecard.classList.add("card");

    const footer = document.createElement("footer");
    footer.textContent = "© 2024 Velvet Bloom Café. All rights reserved.";

    
    content.appendChild(heading);
    content.appendChild(para);
    content.appendChild(titlecard)
    content.appendChild(footer);
}

export default loadHome;
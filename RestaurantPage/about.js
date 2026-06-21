function loadAbout() {
    const content = document.getElementById("content");

    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "About Us";

    const para=document.createElement("div");
const p1 = document.createElement("p");
p1.textContent =
"Since 2024, Velvet Bloom Café has been a quiet corner for coffee lovers seeking warmth, comfort, and handcrafted flavors.";

const p2 = document.createElement("p");
p2.textContent =
"Every cup is brewed with care, every pastry made fresh, and every visit meant to feel like home.";

para.appendChild(p1);
para.appendChild(p2);

    const footer = document.createElement("footer");
    footer.textContent = "© 2024 Velvet Bloom Café. All rights reserved.";


    para.classList.add("about-para");
    content.appendChild(heading);
    content.appendChild(para)
    content.appendChild(footer);
}

export default loadAbout;
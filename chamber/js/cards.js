const businesses = [
    { name: "Alpha Solutions", tagline: "Innovating Your World", email: "alpha@gmail.com", phone: "800-555-1010", url: "alpha.com" },
    { name: "Beta Tech", tagline: "Future of Tech", email: "beta@gmail.com", phone: "800-555-2020", url: "beta.com" },
    { name: "Gamma Corp", tagline: "Excellence Always", email: "gamma@gmail.com", phone: "800-555-3030", url: "gamma.com" }
];

const showcase = document.querySelector(".business-showcase");
showcase.innerHTML = ""; // Clear placeholder cards

businesses.forEach(b => {
    const card = document.createElement("div");
    card.classList.add("business-card");
    card.innerHTML = `
        <div class="card-header">
            <h4>${b.name}</h4>
            <p class="tag-line">${b.tagline}</p>
        </div>
        <div class="card-body">
            <div class="image-box"></div>
            <div class="contact-info">
                <p>EMAIL: ${b.email}</p>
                <p>PHONE: ${b.phone}</p>
                <p>URL: ${b.url}</p>
            </div>
        </div>
    `;
    showcase.appendChild(card);
});

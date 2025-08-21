// Dark MODE
const modeBtn = document.getElementById("modeBtn");
modeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

// Create Cards Dynamically
fetch('../data.json')
  .then(res => res.json())
  .then(data => {
    renderCards(data);
  })
  .catch(err => console.log('Error loading the JSON file: ', err));

function renderCards(data) {
  const container = document.querySelector(".extensions");
  container.innerHTML = ""; // limpiar antes de renderizar

  data.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-status", item.isActive ? "active" : "inactive");

    card.innerHTML = `
      <div class="card-main">
        <img src="${item.logo}" alt="icon">
        <div class="card-text">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
      </div>
      <div class="card-button">
        <button class="remove">Remove</button>
        <button class="off"><span class="on"></span></button>
      </div>
    `;

    container.appendChild(card);

    const removeBtn = document.querySelectorAll(".remove");

    removeBtn.forEach(btn => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".card"); // busca el padre mas cercano con la clase "card"
          card.remove() // card.style.display = "none";
      });
    });

    const toggleBtn = card.querySelector(".off");
    toggleBtn.addEventListener("click", function () {
      this.classList.toggle("active");

      // actualizar el data-status de la card
      if(this.classList.contains("active")) {
        card.setAttribute("data-status", "active");
      } else {
        card.setAttribute("data-status", "inactive");
      }
    });
  });
}

// Filtrar Cards
const filterButtons = document.querySelectorAll(".filter-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
  
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter; // all, active, 
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const status = card.getAttribute("data-status");
      if (filter === "all" || status === filter) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

card.setAttribute("data-status", item.isActive ? "active" : "inactive");
if (item.isActive) {
  card.querySelector(".off").classList.add("active");
}

// Remover Extension/Card
const removeBtn = document.querySelectorAll(".remove");

removeBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card"); // busca el padre mas cercano con la clase "card"
      card.style.display = "none"; // o card.remove() para eliminarlo del DOM
  });
});


import { places } from "../data/discover.mjs";

const grid = document.getElementById("discover-grid");

// BUILD CARDS
places.forEach((place, index) => {
  const card = document.createElement("article");
  card.classList.add(`area${index + 1}`);

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="images/${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;

  grid.appendChild(card);
});


const message = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / 86400000);
  if (days < 1) {
    message.textContent = "Back so soon! Awesome!";
  } else {
    message.textContent = `You last visited ${days} day${days === 1 ? "" : "s"} ago.`;
  }
}

localStorage.setItem("lastVisit", now);

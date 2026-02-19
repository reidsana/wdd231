
import { setupMenu } from "./menu.js";


setupMenu();


const container = document.querySelector("#riverContainer");
const modal = document.querySelector("#riverModal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");


const basePath = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost"
  ? "../"  
  : "./";   

const jsonPath = `${basePath}data/rivers.json`;
const imagesPath = `${basePath}images/`;


async function getRivers() {
  try {
    console.log(`Fetching rivers from: ${jsonPath}`);
    const response = await fetch(jsonPath);
    if (!response.ok) throw new Error(`Failed to fetch river data. Status: ${response.status}`);

    const rivers = await response.json();
    console.log("Rivers loaded:", rivers);
    displayRivers(rivers);

  } catch (error) {
    container.innerHTML = "<p>Unable to load rivers at this time. Please try again later.</p>";
    console.error("Error fetching rivers:", error);
  }
}


function displayRivers(rivers) {
  rivers.forEach(river => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${imagesPath}${river.image}" alt="${river.name}" loading="lazy">
      <h3>${river.name}</h3>
      <p><strong>State:</strong> ${river.state}</p>
      <p><strong>Species:</strong> ${river.species}</p>
      <button type="button" aria-label="View details for ${river.name}">View Details</button>
    `;

  
    card.querySelector("button").addEventListener("click", () => {
      modalContent.innerHTML = `
        <h2>${river.name}</h2>
        <p><strong>Season:</strong> ${river.season}</p>
        <p><strong>Difficulty:</strong> ${river.difficulty}</p>
      `;
      modal.showModal();

      localStorage.setItem("lastViewedRiver", river.name);
    });

    container.appendChild(card);
  });
}


closeModal.addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});

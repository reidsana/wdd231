import { setupMenu } from "./menu.js";

setupMenu();

const container = document.querySelector("#riverContainer");
const modal = document.querySelector("#riverModal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");

async function getRivers() {
  try {
    const response = await fetch("../data/rivers.json");
    if (!response.ok) throw new Error("Data fetch failed");

    const data = await response.json();
    displayRivers(data);

  } catch (error) {
    container.innerHTML = "<p>Unable to load rivers.</p>";
    console.error(error);
  }
}

function displayRivers(rivers) {
  rivers.forEach(river => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="../images/${river.image}" alt="${river.name}" loading="lazy">
      <h3>${river.name}</h3>
      <p><strong>State:</strong> ${river.state}</p>
      <p><strong>Species:</strong> ${river.species}</p>
      <button>View Details</button>
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

getRivers();



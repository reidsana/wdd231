import { setupMenu } from "./menu.js";


setupMenu();


const container = document.querySelector("#riverContainer");
const modal = document.querySelector("#riverModal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");


async function getRivers() {
  try {
    const response = await fetch("../data/rivers.json");
    if (!response.ok) throw new Error("Failed to fetch river data.");

    const rivers = await response.json();
    displayRivers(rivers);

  } catch (error) {
    container.innerHTML = "<p>Unable to load rivers at this time.</p>";
    console.error("Error fetching rivers:", error);
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


getRivers();

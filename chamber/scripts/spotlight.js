const spotlightContainer = document.getElementById("spotlight-container");

async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");

    if (!response.ok) {
      throw new Error("Unable to load member data");
    }

    const data = await response.json();

    // Filter ONLY Silver (2) and Gold (3) members
    const qualified = data.members.filter(
      member => member.membership === 2 || member.membership === 3
    );


    qualified.sort(() => 0.5 - Math.random());

    
    const selected = qualified.slice(0, Math.min(3, qualified.length));


    spotlightContainer.innerHTML = "";

    selected.forEach(member => {
      const card = document.createElement("section");

      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="Logo of ${member.name}">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
        <p><strong>${member.membership === 3 ? "Gold Member" : "Silver Member"}</strong></p>
      `;

      spotlightContainer.appendChild(card);
    });

  } catch (error) {
    console.error("Spotlight error:", error);
  }
}

loadSpotlights();




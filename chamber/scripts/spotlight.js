const spotlightContainer = document.getElementById("spotlight-container");

async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const data = await response.json();

  const qualified = data.members.filter(
    m => m.membership === "Gold" || m.membership === "Silver"
  );

  qualified.sort(() => 0.5 - Math.random());
  const selected = qualified.slice(0, 3);

  selected.forEach(member => {
    const card = document.createElement("section");
    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="images/${member.image}" alt="${member.name}">
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p><strong>${member.membership}</strong></p>
    `;
    spotlightContainer.appendChild(card);
  });
}

loadSpotlights();

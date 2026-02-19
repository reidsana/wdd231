const modal = document.querySelector('#tripModal');
const content = document.querySelector('#modalContent');
const closeBtn = document.querySelector('#closeModal');

export function openModal(trip) {
  content.innerHTML = `
    <h2>${trip.name}</h2>
    <p>River: ${trip.river}</p>
    <p>Difficulty: ${trip.level}</p>
    <p>Price: $${trip.price}</p>
  `;
  modal.showModal();
}

closeBtn.addEventListener('click', () => {
  modal.close();
});

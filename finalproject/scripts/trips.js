import { openModal } from './modal.js';

const container = document.querySelector('#tripsContainer');

async function loadTrips() {
  try {
    const response = await fetch('data/trips.json');
    const trips = await response.json();

    trips.forEach(trip => {
      const card = document.createElement('div');
      card.classList.add('trip');

      card.innerHTML = `
        <h3>${trip.name}</h3>
        <p>River: ${trip.river}</p>
        <p>Level: ${trip.level}</p>
        <p>Price: $${trip.price}</p>
        <button>Details</button>
      `;

      card.querySelector('button').addEventListener('click', () => {
        openModal(trip);
      });

      container.appendChild(card);
    });
  } catch (error) {
    container.textContent = 'Unable to load trips.';
  }
}

loadTrips();


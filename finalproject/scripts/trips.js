import { openModal } from './modal.js';

const container = document.querySelector('#tripsContainer');

async function loadTrips() {
  try {
    const response = await fetch('data/trips.json');
    const trips = await response.json();

    trips.forEach(trip => {
      const div = document.createElement('div');
      div.classList.add('trip');

      div.innerHTML = `
        <h3>${trip.name}</h3>
        <p>River: ${trip.river}</p>
        <p>Level: ${trip.level}</p>
        <p>Price: $${trip.price}</p>
        <button>Details</button>
      `;

      div.querySelector('button').addEventListener('click', () => {
        openModal(trip);
      });

      container.appendChild(div);
    });
  } catch (error) {
    container.textContent = 'Failed to load trips.';
  }
}

loadTrips();

const membersContainer = document.querySelector('#members');

async function getMembers() {
  const response = await fetch('data/members.json');
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  members.forEach(member => {
    const card = document.createElement('section');
    card.innerHTML = `
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.url}" target="_blank">Website</a>
    `;
    membersContainer.appendChild(card);
  });
}

document.querySelector('#grid').addEventListener('click', () => {
  membersContainer.className = 'grid';
});

document.querySelector('#list').addEventListener('click', () => {
  membersContainer.className = 'list';
});

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

getMembers();

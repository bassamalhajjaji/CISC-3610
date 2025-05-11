let data = {};
let audio = new Audio();

fetch('data.json')
  .then(res => res.json())
  .then(json => {
    data = json.planets;
    const select = document.getElementById('topicSelect');
    data.forEach((item, index) => {
      const opt = document.createElement('option');
      opt.value = index;
      opt.innerText = item.title;
      select.appendChild(opt);
    });
    select.onchange = () => displayPlanet(select.value);
    displayPlanet(0); // Load first item
  });

function displayPlanet(index) {
  const planet = data[index];
  document.getElementById('title').innerText = planet.title;
  document.getElementById('description').innerText = planet.description;
  document.getElementById('image').src = planet.image;
  audio.src = planet.audio;

  // Canvas drawing
  const ctx = document.getElementById('planetCanvas').getContext('2d');
  ctx.clearRect(0, 0, 600, 300);
  const img = new Image();
  img.src = planet.image;
  img.onload = () => ctx.drawImage(img, 200, 50, 200, 200);
}

function playAudio() {
  audio.play();
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
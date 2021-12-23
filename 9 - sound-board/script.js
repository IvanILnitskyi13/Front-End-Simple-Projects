const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const sources = [
  "sounds/applause.mp3",
  "sounds/boo.mp3",
  "sounds/gasp.mp3",
  "sounds/tada.mp3",
  "sounds/victory.mp3",
  "sounds/wrong.mp3",
];

sounds.forEach((sound, id) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  const audio = document.createElement("audio");
  audio.src = sources[id];
  audio.id = sound;
  document.querySelector("body").appendChild(audio);

  btn.addEventListener("click", () => {
    stopSound();
    audio.play();
  });

  document.querySelector(".buttons").appendChild(btn);
});

function stopSound() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}

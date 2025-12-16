const infoOverlay = document.getElementById("info-overlay");
const logoBtn = document.getElementById("logo-btn");
const addBtn = document.getElementById("add-btn");
const addPairOverlay = document.getElementById("add-pair-overlay");

// display info modal when logo is clicked
logoBtn.onclick = () => infoOverlay.classList.remove("info-hidden");

// close info modal when infoOverlay is clicked
infoOverlay.onclick = (e) => {
  if (e.target === infoOverlay) infoOverlay.classList.add("info-hidden");
}

// display add pair overlay when button is clicked
addBtn.onclick = () => addPairOverlay.classList.remove("add-hidden");

// close add modal when addPairOverlay is clicked
addPairOverlay.onclick = (e) => {
  if (e.target === addPairOverlay) addPairOverlay.classList.add("add-hidden");
}

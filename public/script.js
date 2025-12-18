const infoOverlay = document.getElementById("info-overlay");
const logoBtn = document.getElementById("logo-btn");
const addBtn = document.getElementById("add-btn");
const addPairOverlay = document.getElementById("add-pair-overlay");
const toggleAll = document.getElementById("toggle-all-checkbox");

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

// toggle all switch
// TODO: check against "active" field in user document for default value
//    and modify that field when switch is toggled
toggleAll.checked = true;

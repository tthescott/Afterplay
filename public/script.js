const overlay = document.getElementById("overlay");
const btnLogo = document.getElementById("btn-logo");

// display modal when logo is clicked
btnLogo.onclick = () => overlay.classList.remove("hidden");

// close modal when overlay is clicked
overlay.onclick = (e) => {
  if (e.target === overlay) overlay.classList.add("hidden");
}

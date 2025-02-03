const addButton = document.getElementById("add");
const closeButton = document.getElementById("close");
const fixedDiv = document.getElementById("fixedDiv");
const sidebar = document.getElementById("sidebar");

fixedDiv.classList.toggle("hidden");

addButton.addEventListener("click", () => {
  fixedDiv.classList.toggle("hidden"); // Toggle visibility
});

closeButton.addEventListener("click", () => {
  fixedDiv.classList.add("hidden"); // Hide the div
});

document.getElementById("dropdownBtn").addEventListener("click", function () {
  document.getElementById("profileMenu").classList.toggle("hidden");
});

document.getElementById("closeProfile").addEventListener("click", function () {
  document.getElementById("profilePage").classList.add("hidden");
});

function openProfile() {
  document.getElementById("profilePage").classList.toggle("hidden");
}
document.getElementById("openProfile").addEventListener("click",openProfile)

document.getElementById("openProfilePhone").addEventListener("click",openProfile)

document.getElementById("sideBarToggle").addEventListener("click",()=>
    sidebar.classList.toggle("w-0")
)

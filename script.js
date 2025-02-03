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
  const profileMenu = document.getElementById("profileMenu");

  if (profileMenu.classList.contains("opacity-0")) {
    profileMenu.classList.remove("opacity-0", "max-h-0");
    profileMenu.classList.add("opacity-100", "max-h-[500px]"); // or any large max-height
  } else {
    profileMenu.classList.remove("opacity-100", "max-h-[500px]");
    profileMenu.classList.add("opacity-0", "max-h-0");
  }
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

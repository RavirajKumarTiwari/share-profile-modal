const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

const followMe = () => {
  return window.open("https://www.linkedin.com/in/raviraj-kumar-019956225/");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};
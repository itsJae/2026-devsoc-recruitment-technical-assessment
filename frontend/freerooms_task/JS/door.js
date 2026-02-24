// Take two elements: the logo wrapper and the logo image
const logo_wrapper = document.getElementById("logo-wrapper");
const logo_img = document.getElementById("logo-img");

// When <a></a> is clicked, toggle the logo image between open and closed
logo_wrapper.addEventListener("click", (event) => {
  event.preventDefault();

  // if it is closed, then change it to open by assigning a new src
  if (logo_img.src.includes("freeroomsDoorClosed.png")) {
    logo_img.src = "../assets/freeroomsLogo.png";
    // if it is open, then change it to closed by assigning a new src
  } else {
    logo_img.src = "../assets/freeroomsDoorClosed.png";
  }
});
